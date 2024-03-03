import {getRuntimeSettings} from "../settings";
import {psv} from "../security";
import {openDialog} from "../../api/dialog";
import {largeGet, largeSet} from "../../api/storage";
import {injectCss, injectHTML, removeCss} from "../../api/inject";
import {
    aceNodeLocating,
    addLoader,
    closePanel,
    getIconHtmlCode,
    isTrustable,
    openWebpage,
    removeLoader,
    toggleAnimation
} from "../../api/ace";
import shortcutEjsTemplate from "../../template/shortcut/shortcut.ejs";
import {currentThemeClass} from "../../api/theme";
import {urlChange} from "../../api/supervisor";
import {pageList} from "../../api/url";
import {GET_PLUGIN_LATEST_VERSION_DOWNLOAD_URL} from "../../../config";
import {monkey} from "../../api/networking";
import pako from "pako";
import {untar} from "untar.js";
import pluginPanelEjsTemplate from "../../template/pluginPanel/pluginPanel.ejs"
import pluginPanelStyleCode from "../../template/pluginPanel/pluginPanel.css"
import {closeDashboard} from "../dashboard";
import aceSelectEjsTemplate from "../../template/aceSelect/aceSelect.ejs"
import aceRadioEjsTemplate from "../../template/aceRadio/aceRadio.ejs"
import aceInputEjsTemplate from "../../template/aceInput/aceInput.ejs"
import {openAboutPanel} from "../../api/aboutPanel";
import {manifest} from "./aceStore";

export let _tombstones = []

export const installPlugin = async (pack, bridged) => {
    const settings = await getRuntimeSettings();
    let psvResult = false
    if (settings.development.psv !== 'off') {
        psvResult = await psv(pack.signature, pack.self)
    } else {
        psvResult = true
    }
    if (!psvResult) {
        try {
            await openDialog('安装被拒绝', `此插件「${pack.manifest.id}」未通过PSV检查。`, true, () => {
            }, () => {
            })
        } catch (e) {
            console.log(e)
        }
        return
    }
    if (bridged) {
        let installedPlugins = await getInstalledPlugins();
        pack.enabled = true;
        pack.manifest.bridged = true
        const existingPluginIndex = installedPlugins.findIndex(plugin => plugin.manifest.id === pack.manifest.id);
        if (existingPluginIndex !== -1) {
            installedPlugins[existingPluginIndex] = pack;
        } else {
            installedPlugins.push(pack);
        }
        await saveInstalledPlugins(installedPlugins);
    } else {
        if (await checkIfInstalled(pack)) {
            try {
                await openDialog('安装被拒绝', `此插件「${pack.manifest.id}」已经安装。`, true, () => {
                }, () => {
                })
            } catch (e) {
                console.log(e)
            }
            return
        }
        let installedPlugins = await getInstalledPlugins()
        pack.enabled = true
        installedPlugins.push(pack)
        await saveInstalledPlugins(installedPlugins)
        await openDialog('插件安装成功', `此插件「${pack.manifest.id}」已被安装，按下「好」后将刷新页面以载入插件。`, true, () => {
            location.reload()
        }, () => {
        })
    }
}

export const getInstalledPlugins = async () => {
    let installedPlugins = await largeGet('installedPlugins')
    if (!installedPlugins) {
        installedPlugins = []
        await saveInstalledPlugins(installedPlugins)
    }
    return installedPlugins
}

export const getSelfPreference = async (manifest) => {
    let installedPlugins = await getInstalledPlugins()
    let targetPlugin = installedPlugins.find(installedPlugin => installedPlugin.manifest.id === manifest.id)
    return targetPlugin.manifest.settings
}

export const saveSelfPreference = async (manifest, settings) => {
    let installedPlugins = await getInstalledPlugins()
    let targetPlugin = installedPlugins.find(installedPlugin => installedPlugin.manifest.id === manifest.id)
    targetPlugin.manifest.settings = settings
    await saveInstalledPlugins(installedPlugins)
}

export const saveInstalledPlugins = async (installedPlugins) => {
    await largeSet('installedPlugins', installedPlugins)
}

export const checkIfInstalled = async (pack) => {
    let installedPlugins = await getInstalledPlugins()
    let isInstalled = false
    installedPlugins.forEach(installedPlugin => {
        if (pack.manifest.id.original) {
            if (installedPlugin.manifest.id === pack.manifest.id.original) {
                isInstalled = true
            }
        } else {
            if (installedPlugin.manifest.id === pack.manifest.id) {
                isInstalled = true
            }
        }
    })
    return isInstalled
}

export const getTombstones = () => {
    return _tombstones
}

export const saveTombstones = (tombstones) => {
    _tombstones = tombstones
}

export const ferryman = async () => {
    // 提取的执行逻辑函数
    const executeTombstones = async (currentUrl) => {
        let tombstones = getTombstones();
        for (const tombstone of tombstones) {
            // 如果已经执行过，跳过当前墓碑
            if (tombstone.executed) continue;

            const {self, args, manifest} = tombstone; // 解构出必要的属性
            if (manifest.matches && manifest.matches.length > 0) {
                const requiredPatterns = manifest.matches.flatMap(key => pageList[key] || []); // 根据matches数组获取需要的URL模式数组

                // 检查当前URL是否与任一模式相匹配
                const isMatch = requiredPatterns.some(pattern => pattern.test(currentUrl));
                if (isMatch) {
                    try {
                        console.log('executed' + manifest.id)
                        // 如果当前URL与模式匹配，则执行对应的插件
                        const targetFunction = new Function(...args.map(arg => arg.name), 'manifest', 'getSelfPreference', self);
                        // const targetFunction = new Function(...args.map(arg => arg.name), 'manifest', `(()=>{"use strict";(async(a,e,o,c)=>{let n;setTimeout(async() => {console.log(await o(c))}, 3000);"aceLight"===await o(c)&&(console.log("light"),n=await a("#header {\\n    background-color: #ff0000;\\n}",c)),"aceDark"===await o(c)&&(console.log("dark"),n=await a("#header {\\n    background-color: #333333;\\n}",c)),console.log(n)})(injectCss,removeCss,currentThemeClass,manifest)})();`);
                        // 执行这个新创建的函数，传入实际参数
                        targetFunction(...args.map(arg => arg.target), manifest, getSelfPreference);
                        // 标记为已执行
                        tombstone.executed = true;
                    } catch (e) {
                        console.error(`Error ferrying plugin ${manifest.id}:`, e);
                        await openDialog('摆渡人错误', `摆渡人在执行插件「${manifest.id}」中出现错误${e}，因此已中止运行此插件。`, true, () => {
                        }, () => {
                        });
                    }
                }
            }
        }
        // 更新墓碑数组以保存执行状态
        saveTombstones(tombstones);
    };

    // 立即执行一次检查
    await executeTombstones(window.location.href);

    // 监听URL变化，再次执行检查
    urlChange(async (currentUrl) => {
        await executeTombstones(currentUrl);
    });

};


export const initializePluginExecutionAndSetTrigger = async () => {
    const installedPlugins = await getInstalledPlugins();
    let __tombstones = [];
    if (installedPlugins.length === 0) return;

    const apiImplementations = {
        'injectCss': injectCss,
        'removeCss': removeCss,
        'currentThemeClass': currentThemeClass
    };

    for (const installedPlugin of installedPlugins) {
        if (!installedPlugin.enabled) continue;

        const {self, manifest} = installedPlugin;

        let allApisDefined = true;
        const args = await Promise.all(manifest.requestedAPIs.map(async (apiName) => {
            if (apiImplementations[apiName]) {
                return {name: apiName, target: apiImplementations[apiName]};
            } else {
                console.error(`Error loading plugin tombstone ${manifest.id}, cannot resolve API ${apiName} of undefined.`);
                await openDialog('插件无法载入', `插件「${manifest.id}」请求了一个未定义的API「${apiName}」，因此拒绝载入此插件。`, true, () => {
                }, () => {
                });
                allApisDefined = false; // 标记发现未定义的API
                return undefined;
            }
        }));

        if (!allApisDefined) continue; // 如果发现未定义的API，跳过当前插件的进一步处理

        const filteredArgs = args.filter(arg => arg !== undefined);
        if (filteredArgs.length === manifest.requestedAPIs.length) {
            try {
                __tombstones.push({
                    self: self,
                    manifest: manifest,
                    args: filteredArgs,
                    executed: false
                });
            } catch (error) {
                console.error(`Error creating plugin tombstone ${manifest.id}:`, error);
                await openDialog('墓碑创建失败', `插件载入器在生成插件「${manifest.id}」的墓碑中出现错误${error}，因此AcFun evolved已中止运行。`, true, () => {
                }, () => {
                });
            }
        }
    }
    saveTombstones(__tombstones);
    await ferryman();
};


export const createShortcut = async (dashboardAceUuid, dashboardCloseInfo) => {
    let installedPlugins = await getInstalledPlugins()
    let dashboardNode = aceNodeLocating(dashboardAceUuid)
    for (const installedPlugin of installedPlugins) {
        let targetShortcutHtmlCode = shortcutEjsTemplate({
            theme: await currentThemeClass(),
            icon: installedPlugin.manifest.icon ? installedPlugin.manifest.icon : await getIconHtmlCode(installedPlugin.manifest.iconName),
            title: installedPlugin.manifest.name,
            bridged: installedPlugin.manifest.bridged ? installedPlugin.manifest.bridged : false
        })
        let targetShortcutAceUuid = await injectHTML(targetShortcutHtmlCode, dashboardNode.querySelector('.aceDashboardMain'))
        let targetShortcutNode = aceNodeLocating(targetShortcutAceUuid)
        targetShortcutNode.addEventListener('click', async () => await openTargetPanel(installedPlugin, dashboardCloseInfo))
    }
}

export const downloadAndInstallPlugin = async (bigManifest, loaderAceUuid) => {
    let fullDownloadUrl = await GET_PLUGIN_LATEST_VERSION_DOWNLOAD_URL(bigManifest);
    await openDialog(`AcFun Evolved Runtime 要安装 「${bigManifest.id.original}」 `, `AcFun Evolved Runtime 要从 「${fullDownloadUrl}」 下载 「${bigManifest.id.original}」 然后安装，此链接：${isTrustable(fullDownloadUrl) ? '受信任' : '不受信任'}`, false, async () => {
        let loaderData = await addLoader(loaderAceUuid)
        let compressedPack = await monkey({
            method: 'GET',
            url: fullDownloadUrl,
            responseType: 'arraybuffer'
        });
        let decompressedContent;
        try {
            decompressedContent = pako.inflate(compressedPack);
            const files = untar(decompressedContent);
            let rawObject = files[0]
            rawObject = new TextDecoder().decode(rawObject.fileData)
            let pack = JSON.parse(rawObject)
            await installPlugin(pack)
        } catch (err) {
            console.error('解压缩失败', err);
            await openDialog('插件安装器无法解压缩', `插件「${bigManifest.id.original}」的安装无法完成，因为插件安装器无法成功解压缩，请再试一次。`, true, () => {
            }, () => {
            });
        }
        await removeLoader(loaderData)
    }, async () => {
        await openDialog('插件安装被取消', `插件「${bigManifest.id.original}」的安装被取消。`, true, () => {
        }, () => {
        })
    });
}

export const extractAndInstallPlugin = async (compressData, aceStoreAceUuid) => {
    await openDialog(`AcFun Evolved Runtime 要解压缩然后安装插件`, `确认吗？`, false, async () => {
        let loaderData = await addLoader(aceStoreAceUuid);
        try {
            const decompressedArrayBuffer = pako.inflate(new Uint8Array(compressData));
            if (!decompressedArrayBuffer.buffer) {
                throw new Error('解压后的数据不包含有效的buffer属性');
            }
            const files = untar(decompressedArrayBuffer.buffer);
            if (!files || files.length === 0) {
                throw new Error('未能从压缩包中提取任何文件');
            }
            let rawObject = files[0];
            rawObject = new TextDecoder().decode(rawObject.fileData);
            let pack = JSON.parse(rawObject);
            await installPlugin(pack);
        } catch (err) {
            console.error('插件处理失败', err);
            await openDialog('插件安装器无法处理', `插件的安装无法完成，因为插件处理过程中出错: ${err.message}`, true);
        }
        await removeLoader(loaderData);
    }, async () => {
        await openDialog('插件安装被取消', `插件的安装被取消。`, true);
    });
};


export const uninstallPlugin = async (manifestOrBigManifest, loaderRootAceUuid) => {
    let id = manifestOrBigManifest.id.original ? manifestOrBigManifest.id.original : manifestOrBigManifest.id
    let loaderData = await addLoader(loaderRootAceUuid)
    try {
        let installedPlugins = await getInstalledPlugins()
        let newInstalledPlugins = installedPlugins.filter(installedPlugin => installedPlugin.manifest.id !== id)
        await saveInstalledPlugins(newInstalledPlugins)
        await openDialog('插件解除安装成功', `插件「${id}」卸载完成，点击「好」以刷新页面。`, true, () => {
            location.reload()
        }, () => {
        });
    } catch (e) {
        console.error(`Error uninstalling plugin ${id}:`, e);
        await openDialog('插件解除安装失败', `在卸载插件「${id}」中出现错误${e}，请再试一次。`, true, () => {
        }, () => {
        });
    }
    await removeLoader(loaderData)
}

export const openTargetPanel = async (targetPlugin, dashboardCloseInfo) => {
    let targetPanelStyleAceUuid = await injectCss(pluginPanelStyleCode)
    let targetPanelHtmlCode = pluginPanelEjsTemplate({
        theme: await currentThemeClass(),
        icon: targetPlugin.manifest.icon ? targetPlugin.manifest.icon : await getIconHtmlCode(targetPlugin.manifest.iconName),
        manifest: targetPlugin.manifest
    })
    let targetPanelAceUuid = await injectHTML(targetPanelHtmlCode, document.body)
    await closeDashboard(dashboardCloseInfo.dashboardAceUuid, dashboardCloseInfo.dashboardStyleAceUuid, dashboardCloseInfo.shortcutStyleAceUuid)
    toggleAnimation(targetPanelAceUuid, '.acePluginPanel')
    let node = aceNodeLocating(targetPanelAceUuid)
    node.querySelector('#close').addEventListener('click', () => closePanel(targetPanelAceUuid, targetPanelStyleAceUuid, '.acePluginPanel'))
    node.querySelector('#site').addEventListener('click', () => openWebpage(targetPlugin.manifest.website, targetPlugin.manifest))
    node.querySelector('#uninstall').addEventListener('click', () => uninstallPlugin(targetPlugin.manifest, targetPanelAceUuid))
    node.querySelector('#refresh').addEventListener('click', () => location.reload())
    node.querySelector('#about').addEventListener('click', () => openAboutPanel(targetPlugin.manifest.name, targetPlugin.manifest.iconName, targetPlugin.manifest.version, targetPlugin.manifest.description, targetPlugin.manifest.copyrightCaption))
    let assembledSettingsHtmlArray = await assembleSettings(targetPlugin.manifest)
    for (let settingHtml of assembledSettingsHtmlArray) {
        let parentWrapperAceUuid = await injectHTML(settingHtml.htmlCode, node.querySelector('.acePluginPanelView'))
        settingHtml.syncTrigger(await aceNodeLocating(parentWrapperAceUuid))
    }
}

export const assembleSettings = async (manifest) => {
    let settings = await getSelfPreference(manifest);
    let settingsHtmlArray = [];
    for (const setting of settings) {
        switch (setting.type) {
            case 'select':
                settingsHtmlArray.push({
                    htmlCode: aceSelectEjsTemplate({
                        theme: await currentThemeClass(),
                        settingId: setting.id,
                        ...setting
                    }) + '<br />',
                    syncTrigger: async (wrapper) => {
                        const selectElement = wrapper.querySelector(`#${setting.id}`);
                        selectElement.addEventListener('change', async (e) => {
                            let originalSettings = await getSelfPreference(manifest);
                            let settingToUpdate = originalSettings.find(s => s.id === setting.id);
                            settingToUpdate.options.forEach(option => {
                                option.selected = option.value === e.target.value;
                            });
                            await saveSelfPreference(manifest, originalSettings);
                        });
                    }
                });
                break;
            case 'radio':
                settingsHtmlArray.push({
                    htmlCode: aceRadioEjsTemplate({
                        theme: await currentThemeClass(),
                        ...setting
                    }) + '<br />',
                    syncTrigger: async (wrapper) => {
                        const radioElements = wrapper.querySelectorAll(`input[name="${setting.id}"]`);
                        radioElements.forEach((radio) => {
                            radio.addEventListener('change', async (e) => {
                                let originalSettings = await getSelfPreference(manifest);
                                let settingToUpdate = originalSettings.find(s => s.id === setting.id);
                                settingToUpdate.options.forEach(option => {
                                    option.selected = option.value === e.target.value;
                                });
                                await saveSelfPreference(manifest, originalSettings);
                            });
                        });
                    }
                });
                break;
            case 'input':
                settingsHtmlArray.push({
                    htmlCode: aceInputEjsTemplate({
                        theme: await currentThemeClass(),
                        settingsId: setting.id,
                        ...setting
                    }) + '<br />',
                    syncTrigger: async (wrapper) => {
                        const inputElement = wrapper.querySelector(`#${setting.id}`);
                        inputElement.addEventListener('change', async (e) => {
                            let originalSettings = await getSelfPreference(manifest);
                            let settingToUpdate = originalSettings.find(s => s.id === setting.id);
                            settingToUpdate.value = e.target.value;
                            await saveSelfPreference(manifest, originalSettings);
                        });
                    }
                });
                break;
            default:
                console.error('Unknown setting type', setting.type);
                await openDialog(`发现了未知的设置项`, `插件「${manifest.id}」的设置中包含了未知的设置类型「${setting.type}」，此设定项已被跳过。在严格PSV情况下不会出现此错误，因此此插件大可能是自行载入的插件，你需要联系开发者。`, true, () => {
                }, () => {
                });
        }
    }
    return settingsHtmlArray;
};

export const uninstallBridgedPlugin = async () => {
    let installedPlugins = await getInstalledPlugins();
    let bridgedPlugins = installedPlugins.filter(i => i.manifest.bridged === true)
    if (bridgedPlugins.length !== 0) {
        let id = bridgedPlugins[0].manifest.id
        if (id) {
            try {
                let installedPlugins = await getInstalledPlugins()
                let newInstalledPlugins = installedPlugins.filter(installedPlugin => installedPlugin.manifest.id !== id)
                await saveInstalledPlugins(newInstalledPlugins)
                await openDialog('调试桥插件解除安装成功', `插件「${id}」卸载完成，点击「好」以刷新页面。`, true, () => {
                    location.reload()
                }, () => {
                });
            } catch (e) {
                console.error(`Error uninstalling plugin ${id}:`, e);
                await openDialog('调试桥插件解除安装失败', `在卸载插件「${id}」中出现错误${e}，请再试一次。`, true, () => {
                }, () => {
                });
            }
        }
    }
}