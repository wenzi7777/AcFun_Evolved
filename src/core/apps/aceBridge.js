import shortcutEjsTemplate from '../../template/shortcut/shortcut.ejs'
import {ACE_VERSION} from "../../../config";
import {aceNodeLocating, closePanel, getIconHtmlCode, toggleAnimation} from "../../api/ace";
import {injectCss, injectHTML} from "../../api/inject";
import {currentThemeClass} from "../../api/theme";
import {closeDashboard} from "../dashboard";
import acedbEjsTemplate from "../../template/acedb/acedb.ejs";
import acedbStyleCode from "../../template/acedb/acedb.css"
import {openAboutPanel} from "../../api/aboutPanel";
import {openDialog} from "../../api/dialog";
import {clearLocal, clearMonkey, exportAll, importAll} from "../../api/storage";
import {browserUploadAsArrayBuffer, browserUploadAsText, monkey} from "../../api/networking";
import {extractAndInstallPlugin, installPlugin, uninstallPlugin} from "./pluginToolkit";
import bridgeSettingsStyleCode from "../../template/bridgeSettings/bridgeSettings.css"
import bridgeSettingsEjsTemplate from "../../template/bridgeSettings/bridgeSettings.ejs"
import {getBridgeSettings, saveBridgeSettings} from "../settings";
import bridgeHintStyleCode from "../../template/bridgeHint/bridgeHint.css"
import bridgeHintEjsTemplate from "../../template/bridgeHint/bridgeHint.ejs"

export const loadAceBridge = async (dashboardAceUuid, dashboardCloseInfo) => {
    let dashboardNode = aceNodeLocating(dashboardAceUuid)
    let aceBridgeShortcutHtmlCode = shortcutEjsTemplate({
        theme: await currentThemeClass(),
        icon: await getIconHtmlCode(manifest.iconName),
        title: manifest.name
    })
    let aceBridgeShortcutAceUuid = await injectHTML(aceBridgeShortcutHtmlCode, dashboardNode.querySelector('.aceDashboardMain'))
    let aceBridgeShortcutNode = aceNodeLocating(aceBridgeShortcutAceUuid)
    aceBridgeShortcutNode.addEventListener('click', () => openAceBridge(dashboardCloseInfo))
}

export const manifest = {
    name: 'ACE Runtime Debug Bridge',
    description: 'AcFun Evolved Runtime 调试桥',
    version: ACE_VERSION,
    iconName: 'bridgeIcon',
    copyrightCaption: '(c)2023-2024 Nick Hsu, Licensed under MPL-2.0',
    requestedAPI: [],
    author: 'Nick Hsu',
    id: '@wenzi7777/ace_runtime_bridge',
    website: 'https://acfun-evolved.1205.moe/'
}

export const openAceBridge = async (dashboardCloseInfo) => {
    let acedbStyleAceUuid = await injectCss(acedbStyleCode)
    let htmlCode = acedbEjsTemplate({
        theme: await currentThemeClass()
    })
    let acedbAceUuid = await injectHTML(htmlCode, document.body)
    await closeDashboard(dashboardCloseInfo.dashboardAceUuid, dashboardCloseInfo.dashboardStyleAceUuid, dashboardCloseInfo.shortcutStyleAceUuid)
    toggleAnimation(acedbAceUuid, '.acedbWrapper')
    let node = aceNodeLocating(acedbAceUuid)
    node.querySelector('#close').addEventListener('click', () => closePanel(acedbAceUuid, acedbStyleAceUuid, '.acedbWrapper'))
    node.querySelector('#about').addEventListener('click', () => openAboutPanel(manifest.name, manifest.iconName, manifest.version, manifest.description, manifest.copyrightCaption))
    node.querySelector('#clearMonkey').addEventListener('click', async () => await openDialog('要清除TamperMonkey存储吗？', '您会失去所有设置与已安装的插件，此操作无法回退。', false, async () => {
        clearMonkey()
        await openDialog('清除成功', 'TamperMonkey存储已清除，按一下「好」来重新载入页面。', true, () => {
            location.reload()
        }, () => {
        })
    }, () => {
    }))
    node.querySelector('#clearLocal').addEventListener('click', async () => await openDialog('要清除LocalStorage存储吗？', '您会失去此网页的所有状态信息（包括登入状态等），某些插件如果使用LocalStorage存储资料，您也会失去这些资料，此操作无法回退。', false, async () => {
        clearLocal()
        await openDialog('清除成功', 'LocalStorage存储已清除，按一下「好」来重新载入页面。', true, () => {
            location.reload()
        }, () => {
        })
    }, () => {
    }))
    node.querySelector('#clearBoth').addEventListener('click', async () => await openDialog('要清除TamperMonkey与LocalStorage存储吗？', '您会失去此网页的所有状态信息（包括登入状态等）、设置项、已安装的插件、此操作无法回退。', false, async () => {
        clearMonkey()
        clearLocal()
        await openDialog('清除成功', 'TamperMonkey与LocalStorage存储已清除，按一下「好」来重新载入页面。', true, () => {
            location.reload()
        }, () => {
        })
    }, () => {
    }))
    node.querySelector('#exportBoth').addEventListener('click', async () => await openDialog('要导出所有存储内容吗？', '所有内容将被导出。', false, async () => {
        exportAll()
    }, () => {
    }))
    node.querySelector('#importBoth').addEventListener('click', async () => await openDialog('要导入所有存储内容吗？', '请选择「all.ace.[timestamp].json」以覆盖当前的存储资料。', false, async () => {
        browserUploadAsText(async ({content, file}) => {
            if (file.name.indexOf('.ace.') === -1) {
                await openDialog('导入失败', '文件名不符合规范。', true, () => {
                }, () => {
                })
            } else {
                clearLocal()
                clearMonkey()
                importAll(content)
                await openDialog('配置文件导入成功', '存储已导入，按一下「好」来重新载入页面。', true, () => {
                    location.reload()
                }, () => {
                })
            }
        })
    }, () => {
    }))
    node.querySelector('#loadPackage').addEventListener('click', async () => {
        await openDialog('真的要载入插件吗？', '请确定你信任此插件的来源。选择「raw.json.tar.gz」以加载。', false, async () => {
            browserUploadAsArrayBuffer(async ({content, file}) => {
                if (file.name.indexOf('raw.json.tar.gz') === -1) {
                    await openDialog('载入失败', '你选择的文件可能不是一个合法的插件包或者您未正确命名/压缩。请使用GitHub上提供的打包工具。', true, () => {
                    }, () => {
                    })
                } else {
                    await extractAndInstallPlugin(content, acedbAceUuid)
                }
            })
        }, () => {
        })
    })
    node.querySelector('#loadUnpackedPackage').addEventListener('click', async () => {
        await openDialog('真的要载入插件吗？', '请确定你信任此插件的来源。选择「raw.json」以加载。', false, async () => {
            browserUploadAsText(async ({content, file}) => {
                if (file.name.indexOf('raw.json') === -1) {
                    await openDialog('载入失败', '你选择的文件可能不是一个合法的插件包或者您未正确命名。请使用GitHub上提供的打包工具。', true, () => {
                    }, () => {
                    })
                } else {
                    content = JSON.parse(content)
                    await installPlugin(content, acedbAceUuid)
                }
            })
        }, () => {
        })
    })
    node.querySelector('#aceBridge').addEventListener('click', () => openBridgeSettingsPanel({
        acedbAceUuid,
        acedbStyleAceUuid
    }))
}

export const openBridgeSettingsPanel = async (acedbCloseInfo) => {
    let bridgeSettingsStyleAceUuid = await injectCss(bridgeSettingsStyleCode)
    let htmlCode = bridgeSettingsEjsTemplate({
        theme: await currentThemeClass()
    })
    let bridgeSettingsAceUuid = await injectHTML(htmlCode, document.body)
    toggleAnimation(bridgeSettingsAceUuid, '.aceRuntimeBridgeSettingsPanel')
    acedbCloseInfo && closePanel(acedbCloseInfo.acedbAceUuid, acedbCloseInfo.acedbStyleAceUuid, '.acedbWrapper')
    syncBridgeSettingsToView(await getBridgeSettings(), bridgeSettingsAceUuid)
    let node = aceNodeLocating(bridgeSettingsAceUuid)
    node.querySelector('#cancel').addEventListener('click', () => closePanel(bridgeSettingsAceUuid, bridgeSettingsStyleAceUuid, '.aceRuntimeBridgeSettingsPanel'))
    node.querySelector('#confirm').addEventListener('click', async () => {
        closePanel(bridgeSettingsAceUuid, bridgeSettingsStyleAceUuid, '.aceRuntimeBridgeSettingsPanel')
        await syncViewToBridgeSettings(bridgeSettingsAceUuid)
        await openDialog('设置已保存', '设置已保存，按一下「好」来重新载入页面。', true, () => {
            location.reload()
        }, () => {
        })
    })
}

export const syncBridgeSettingsToView = (settings, aceUuid) => {
    // 定位到特定的节点，假设aceNodeLocating函数可以根据aceUuid找到对应的DOM节点
    let node = aceNodeLocating(aceUuid);

    // 确保找到了节点
    if (!node) {
        console.error('Unable to locate node for UUID:', aceUuid);
        return;
    }

    // 更新 "Debug Bridge 开启" 选项
    const bridgedSelect = node.querySelector('#bridged');
    if (bridgedSelect) {
        bridgedSelect.value = settings.bridged || 'disabled'; // 默认为 'disabled' 如果没有设置
    } else {
        console.warn('Bridged select not found');
    }

    // 更新 "插件载入时机" 选项
    const timingSelect = node.querySelector('#timing');
    if (timingSelect) {
        timingSelect.value = settings.timing || 'normal'; // 默认为 'normal' 如果没有设置
    } else {
        console.warn('Timing select not found');
    }

    // 更新 "连接" 输入框
    const connectInput = node.querySelector('#connect');
    if (connectInput) {
        connectInput.value = settings.connect || ''; // 默认为空字符串如果没有设置
    } else {
        console.warn('Connect input not found');
    }
};

export const syncViewToBridgeSettings = async (aceUuid) => {
    let node = aceNodeLocating(aceUuid);

    if (!node) {
        console.error('Unable to locate node for UUID:', aceUuid);
        return;
    }

    let newSettings = {};

    // 读取 "Debug Bridge 开启" 选项的值
    const bridgedSelect = node.querySelector('#bridged');
    if (bridgedSelect) {
        newSettings.bridged = bridgedSelect.value;
    } else {
        console.warn('Bridged select not found');
    }

    // 读取 "插件载入时机" 选项的值
    const timingSelect = node.querySelector('#timing');
    if (timingSelect) {
        newSettings.timing = timingSelect.value;
    } else {
        console.warn('Timing select not found');
    }

    // 读取 "连接" 输入框的值
    const connectInput = node.querySelector('#connect');
    if (connectInput) {
        newSettings.connect = connectInput.value;
    } else {
        console.warn('Connect input not found');
    }

    await saveBridgeSettings(newSettings)
};

export const runBridge = async () => {
    let settings = await getBridgeSettings();
    if (settings.bridged === 'enabled') {
        let hintStyleAceUuid = await injectCss(bridgeHintStyleCode)
        let htmlCode = bridgeHintEjsTemplate({
            theme: await currentThemeClass()
        })
        let hintAceUuid = await injectHTML(htmlCode, document.body)
        let node = aceNodeLocating(hintAceUuid)
        node.addEventListener('click', () => openBridgeSettingsPanel())
        console.info('[ACE调试桥] 下载插件')
        let rawJSON = await monkey({
            method: 'GET',
            url: settings.connect,
            responseType: 'text'
        });
        rawJSON = JSON.parse(rawJSON)
        console.info('[ACE调试桥] 准备安装插件')
        await installPlugin(rawJSON, true)
        console.info('[ACE调试桥] 插件安装完成')
    }
}