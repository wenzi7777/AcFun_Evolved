import Preferences from "./Preferences";
import Security from "./Security";
import ACEV2Toast from "../../plugins/ACEV2Toast";
import ACEV2Dialog from "../../plugins/ACEV2Dialog";
import I18n from "./I18n";
import ACEV2Storage from "../services/ACEV2Storage";
import ACEV2Loader from "../../plugins/ACEV2Loader";
import Logger from "./Logger";
import {pageList} from "./ACEV2URL";
import Supervisor from "./Supervisor";
import PluginStore from "../../plugins/PluginStore";
import DebugBridge from "../../plugins/DebugBridge";
import pako from "pako"
import {untar} from "untar.js"
import ACEV2DOM from "./ACEV2DOM";
import Variable from "./Variable";
import IO from "./IO";
import {Manager} from "../../ui/Manager";

class PluginToolkit {
    private tombstones: tombstone[] = []
    private apiImplementations: any = {
        showDialog: ({title, content, okAction, cancelAction}: {
            title: string,
            content: string,
            okAction: Function,
            cancelAction?: Function
        }) => ACEV2Dialog.showDialog({title, content, okAction, cancelAction}),
        showToast: ({text}: { text: string }) => ACEV2Toast.showToast({text}),
        aceLog: {
            info: ({message}: { message: string }) => Logger.info({message}),
            success: ({message}: { message: string }) => Logger.success({message}),
            warn: ({message}: { message: string }) => Logger.warn({message}),
            error: ({message}: { message: string }) => Logger.error({message})
        },
        isDarkMode: () => Preferences.isDarkMode(),
        ACEV2DOM: {
            injectHTML: ({HTMLCode}: { HTMLCode: string }) => ACEV2DOM.injectHTML({HTMLCode}),
            removeHTML: ({tracker}: { tracker: string }) => ACEV2DOM.removeElement({tracker})
        }
    }

    async installPlugin({pluginPack, bridged}: { pluginPack: pluginPack, bridged: boolean }) {
        let psvResult = false;
        try {
            if (Preferences.getPreference({category: 'developer', k: 'psv'}) !== 'none') {
                psvResult = await Security.psv({signature: pluginPack.signature, pluginSelf: pluginPack.self});
            } else {
                psvResult = true;
            }
        } catch (e) {
            ACEV2Toast.showToast({text: I18n.t({key: 'psv-check-failed-installation-denied'})});
        }
        if (!psvResult) {
            ACEV2Toast.showToast({text: `安装被拒绝, 此插件「${pluginPack.manifest.id}」未通过PSV检查。`});
            return;
        }
        if (this.checkIfInstalled({pluginPack})) {
            ACEV2Toast.showToast({text: `安装被拒绝, 此插件「${pluginPack.manifest.id}」已经安装。`});
            return;
        }
        if (bridged) {
            let installedPlugins = this.getInstalledPlugins();
            pluginPack.enabled = true;
            pluginPack.manifest.bridged = true;
            const existingPluginIndex = installedPlugins.findIndex((plugin) => plugin.manifest.id === pluginPack.manifest.id);
            if (existingPluginIndex !== -1) {
                installedPlugins[existingPluginIndex] = pluginPack;
            } else {
                installedPlugins.push(pluginPack);
            }
            this.saveInstalledPlugins({installedPlugins});
        } else {
            let installedPlugins = this.getInstalledPlugins();
            pluginPack.enabled = true;
            installedPlugins.push(pluginPack);
            this.saveInstalledPlugins({installedPlugins});
            ACEV2Toast.showToast({text: `插件「${pluginPack.manifest.id}」安装成功，页面将自动刷新。`});
            setTimeout(() => location.reload(), Variable.TOAST_DURATION);
        }
    }

    uninstallPlugin({manifest}: { manifest: manifest }) {
        let id = manifest.id
        ACEV2Loader.draw()
        try {
            let installedPlugins = this.getInstalledPlugins()
            let newInstalledPlugins = installedPlugins.filter(installedPlugin => installedPlugin.manifest.id !== id)
            this.saveInstalledPlugins({installedPlugins: newInstalledPlugins})
            ACEV2Dialog.showDialog({
                title: I18n.t({key: 'uninstallation-succeed'}),
                content: `插件「${id}」卸载完成，点击「好」以刷新页面。`,
                okAction: () => location.reload()
            })
        } catch (e) {
            ACEV2Toast.showToast({text: `插件解除安装失败，在尝试解除安装插件「${id}」时出现错误，请再试一次。`})
            Logger.error({message: JSON.stringify(e)})
        }
        ACEV2Loader.destroy()
    }

    uninstallBridgedPlugin() {
        let installedPlugins = this.getInstalledPlugins();
        let bridgedPlugins = installedPlugins.filter(i => i.manifest.bridged === true)
        if (bridgedPlugins.length !== 0) {
            let id = bridgedPlugins[0].manifest.id
            if (id) {
                try {
                    let installedPlugins = this.getInstalledPlugins()
                    let newInstalledPlugins = installedPlugins.filter(installedPlugin => installedPlugin.manifest.id !== id)
                    this.saveInstalledPlugins({installedPlugins: newInstalledPlugins})
                    Logger.success({message: I18n.t({key: 'uninstalled-bridged-plugin'}) + id})
                    ACEV2Toast.showToast({text: I18n.t({key: 'uninstalled-bridged-plugin'}) + id + I18n.t({key: 'please-reload-page'})})
                } catch (e) {
                    ACEV2Toast.showToast({text: I18n.t({key: 'uninstall-bridged-plugin-failed'}) + id + I18n.t({key: 'please-try-again'})})
                    Logger.error({message: JSON.stringify(e)})
                }
            }
        }
    }

    checkIfInstalled({pluginPack}: { pluginPack: pluginPack }) {
        let installedPlugins: pluginPack[] = this.getInstalledPlugins();
        let isInstalled = false;
        installedPlugins.forEach((installedPlugin) => {
            if (installedPlugin.manifest.id === pluginPack.manifest.id) {
                isInstalled = true;
            }
        });
        return isInstalled;
    }

    getInstalledPlugins() {
        let installedPlugins = ACEV2Storage.getPlugins();
        if (!installedPlugins) {
            installedPlugins = [];
            this.saveInstalledPlugins({installedPlugins});
        }
        return installedPlugins as pluginPack[];
    }

    saveInstalledPlugins({installedPlugins}: { installedPlugins: pluginPack[] }) {
        ACEV2Storage.updatePluginsStorage({newPlugins: installedPlugins});
    }

    getSelfPreference({manifest}: { manifest: manifest }) {
        let installedPlugins: pluginPack[] = this.getInstalledPlugins()
        let targetPlugin = installedPlugins.find(installedPlugin => installedPlugin.manifest.id === manifest.id) as pluginPack
        return targetPlugin.manifest.settings
    }

    saveSelfPreference({manifest, settings}: { manifest: manifest, settings: any }) {
        let installedPlugins: pluginPack[] = this.getInstalledPlugins()
        let targetPlugin = installedPlugins.find(installedPlugin => installedPlugin.manifest.id === manifest.id) as pluginPack
        targetPlugin.manifest.settings = settings
        this.saveInstalledPlugins({installedPlugins})
    }

    async initializePluginExecutionAndSetTrigger() {
        const installedPlugins = this.getInstalledPlugins();
        let __tombstones: tombstone[] = [];

        if (installedPlugins.length === 0) return;

        for (const installedPlugin of installedPlugins) {
            if (!installedPlugin.enabled) continue;

            const {self, manifest} = installedPlugin;

            let allApisDefined = true;

            const args = await Promise.all(manifest.requestedAPIs.map(async (apiName) => {
                if (this.apiImplementations[apiName]) {
                    return {name: apiName, target: this.apiImplementations[apiName]};
                } else {
                    Logger.error({message: `Error loading plugin tombstone ${manifest.id}, cannot resolve API ${apiName} of undefined.`});
                    ACEV2Toast.showToast({text: `插件「${manifest.id}」请求了一个未定义的API「${apiName}」，因此拒绝载入此插件。`})
                    allApisDefined = false;
                    return undefined;
                }
            }));

            if (!allApisDefined) continue;

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
                    Logger.error({message: `Error creating plugin tombstone ${manifest.id}: ${JSON.stringify(error)}`});
                    ACEV2Dialog.showDialog({
                        title: I18n.t({key: 'request-reload'}),
                        content: `插件载入器在生成插件「${manifest.id}」的墓碑中出现错误${error}，因此AcFun Evolved已中止运行，按下「好」以重新启动AcFun Evolved.`,
                        okAction: () => location.reload()
                    })
                }
            }
        }
        this.tombstones = __tombstones
        await this.ferryman();
    };

    async ferryman() {
        const executeTombstones = async ({currentUrl}: { currentUrl: string }) => {
            let __tombstones = this.tombstones;
            for (const tombstone of __tombstones) {
                if (tombstone.executed) continue;

                const {self, args, manifest} = tombstone;
                if (manifest.trigger.matches && manifest.trigger.matches.length > 0) {
                    const requiredPatterns = manifest.trigger.matches.flatMap(key => pageList[key] || []);
                    const isMatch = requiredPatterns.some(pattern => pattern.test(currentUrl));
                    if (isMatch) {
                        try {
                            Logger.info({message: `executed ${manifest.id}`})
                            const targetFunction = new Function(...args.map((arg: any) => arg.name), 'manifest', 'getSelfPreference', self);
                            // const targetFunction = new Function(...args.map((arg: any) => arg.name), 'manifest', `(()=>{"use strict";(async()=>{console.log('-------------------')})();`);
                            targetFunction(...args.map((arg: any) => arg.target), manifest, ({manifest}: {
                                manifest: manifest
                            }) => this.getSelfPreference({manifest}));
                            tombstone.executed = true;
                        } catch (e) {
                            Logger.error({message: `Error ferrying plugin ${manifest.id}: ${JSON.stringify(e)}`});
                            ACEV2Toast.showToast({text: `摆渡人在执行插件「${manifest.id}」中出现错误${JSON.stringify(e)}，因此已中止运行此插件。`})
                        }
                    }
                }
            }
            this.tombstones = __tombstones;
        };

        await executeTombstones({currentUrl: window.location.href});

        Supervisor.urlChange(async (currentUrl) => {
            await executeTombstones({currentUrl});
        });

    };

    wakeUpBuildInPlugins() {
        if (Preferences.getPreference({category: 'developer', k: 'psv'}) !== 'full') {
            DebugBridge.wakeUp()
        }
        PluginStore.wakeUp()
    }

    extractAndInstallPlugin({compressedData}: { compressedData: ArrayBuffer }) {
        ACEV2Dialog.showDialog({
            title: I18n.t({key: I18n.t({key: 'wants-to-extract-and-install-plugin-package'})}),
            content: I18n.t({key: 'do-you-really-want-to-do-that'}),
            okAction: async () => {
                ACEV2Loader.draw()
                try {
                    const decompressedArrayBuffer = pako.inflate(new Uint8Array(compressedData));
                    if (!decompressedArrayBuffer.buffer) {
                        ACEV2Toast.showToast({text: I18n.t({key: 'decompressed-data-does-not-contain-valid-buffer-property'})});
                        return
                    }
                    const files = untar(decompressedArrayBuffer.buffer);
                    if (!files || files.length === 0) {
                        ACEV2Toast.showToast({text: I18n.t({key: 'no-files-extracted-from-the-compressed-data'})});
                        return
                    }
                    let rawObject: any = files[0];
                    rawObject = new TextDecoder().decode(rawObject.fileData);
                    let pack = JSON.parse(rawObject);
                    await this.installPlugin({pluginPack: pack, bridged: false});
                } catch (err) {
                    Logger.error({message: `Error extracting and installing plugin package: ${JSON.stringify(err)}`});
                    ACEV2Toast.showToast({text: I18n.t({key: 'error-extracting-and-installing-plugin-package'})});
                }
                ACEV2Loader.destroy()
            },
            cancelAction: () => ACEV2Toast.showToast({text: 'canceled'})
        })
    };

    downloadAndInstallPluginPack({manifest}: { manifest: manifest }) {
        let fullDownloadUrl = Variable.pluginDownloadURL({manifest});
        ACEV2Dialog.showDialog({
            title: Variable.MASTER_MANIFEST.id + ' ' + I18n.t({key: 'wants-to-download-and-install-plugin-package'}),
            content: I18n.t({key: 'download-url'}) + ': [' + fullDownloadUrl + '] | ' + I18n.t({key: 'target-plugin-id'}) + manifest.id,
            okAction: async () => {
                ACEV2Loader.draw()
                let compressedPack = await IO.monkey({
                    method: 'GET',
                    url: fullDownloadUrl,
                    responseType: 'arraybuffer'
                });
                let decompressedContent;
                try {
                    decompressedContent = pako.inflate(compressedPack as any);
                    const files = untar(decompressedContent);
                    let rawObject = files[0]
                    let pack = JSON.parse(new TextDecoder().decode(rawObject.fileData)) as pluginPack
                    await this.installPlugin({pluginPack: pack, bridged: false})
                } catch (err) {
                    ACEV2Toast.showToast({text: I18n.t({key: 'error-extracting-and-installing-plugin-package'})});
                    console.error('解压缩失败', err);
                }
                ACEV2Loader.destroy()
            },
            cancelAction: () => ACEV2Toast.showToast({text: I18n.t({key: 'canceled'})})
        })
    }
}

export default new PluginToolkit();
