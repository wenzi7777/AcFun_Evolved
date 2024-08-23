import Variable from "./Variable";
import IO from "./IO";
import Version from "./Version";
import Preferences from "./Preferences";
import PluginToolkit from "./PluginToolkit";
import ACEV2Storage from "../services/ACEV2Storage";
import Clock from "../services/Clock";
import ACEV2Dialog from "../../plugins/ACEV2Dialog";
import I18n from "./I18n";
import ACEV2Toast from "../../plugins/ACEV2Toast";

class ReleaseTracker {
    public getPluginLatestVersion({manifest}: { manifest: manifest }) {
        return manifest.versions[manifest.versions.length - 1]
    }

    private async checkSelfUpdate() {
        let fullUrl = Variable.getSelfLatestVersionManifestURL()
        let raw = await IO.monkey({
            method: 'GET',
            url: fullUrl,
            responseType: 'text'
        })
        let latestVersion = JSON.parse(raw as string)

        let latestVersionInfo = latestVersion[latestVersion.length - 1]

        let compareResult = Version.compareVersion({
            version1: Version.getCurrentVersion(),
            version2: latestVersionInfo.version + ' ' + latestVersionInfo.versionTag,
            target: Preferences.getPreference({category: 'general', k: 'updateRuntimeTo'}) as target
        })

        return {
            latestVersionInfo,
            compareResult
        }
    }

    private async checkPluginsUpdate() {
        let rawPluginsData = await IO.monkey({
            method: 'GET',
            url: Variable.bigManifestURL(),
        })
        let installedPlugins = PluginToolkit.getInstalledPlugins()
        if (installedPlugins.length === 0) {
            return []
        }
        let pluginsData = JSON.parse(rawPluginsData as string)
        let updatablePlugins: any = []
        for (let pluginData of pluginsData) {
            for (let installedPlugin of installedPlugins) {
                if (pluginData.id === installedPlugin.manifest.id) {
                    if (pluginData.versions[pluginData.versions.length - 1] !== installedPlugin.manifest.versions[installedPlugin.manifest.versions.length - 1]) {
                        updatablePlugins.push({latestRelease: pluginData, currentRelease: installedPlugin})
                    }
                }
            }
        }

        return updatablePlugins

    }

    private updateSelf() {
        ACEV2Storage.localSet({
            k: 'selfUpdateRecord',
            v: {
                timestamp: Clock.getTimestamp()
            }
        })
        window.open(Variable.getSelfLatestScriptURL())
    }

    private async updatePlugin({manifest, remainingUpdatablePlugins}: {
        manifest: manifest,
        remainingUpdatablePlugins: any
    }) {
        if (remainingUpdatablePlugins.length === 0) {
            ACEV2Storage.localSet({
                k: 'pluginsUpdateRecord',
                v: {
                    timestamp: Clock.getTimestamp()
                }
            })
        }
        PluginToolkit.dangerUninstallPluginWithoutReloadAndNotice({manifest})
        await PluginToolkit.dangerDownloadAndInstallPluginPackWithoutUserConfirm({manifest})
    }

    private timeToCheckSelfUpdate() {
        let updateFrequency = Preferences.getPreference({category: 'general', k: 'updateRuntimeWhen'})
        let selfUpdateRecord = ACEV2Storage.localGet({k: 'selfUpdateRecord'}) as { timestamp: number } | null
        if (!selfUpdateRecord) {
            let timestamp = Clock.getTimestamp() as number
            ACEV2Storage.localSet({
                k: 'selfUpdateRecord',
                v: {
                    timestamp
                }
            })
            selfUpdateRecord = {
                timestamp
            }
        }
        if (updateFrequency === 'startup') {
            return true
        } else if (updateFrequency === 'daily') {
            let lastCheck = selfUpdateRecord.timestamp
            let now = Clock.getTimestamp() as number
            return now - lastCheck >= 86400000;
        } else if (updateFrequency === 'weekly') {
            let lastCheck = selfUpdateRecord.timestamp
            let now = Clock.getTimestamp() as number
            return now - lastCheck >= 604800000;
        } else if (updateFrequency === 'monthly') {
            let lastCheck = selfUpdateRecord.timestamp
            let now = Clock.getTimestamp() as number
            return now - lastCheck >= 2592000000;
        } else {
            return false
        }
    }

    private timeToCheckPluginsUpdate() {
        let updateFrequency = Preferences.getPreference({category: 'general', k: 'updatePluginsWhen'})
        let pluginsUpdateRecord = ACEV2Storage.localGet({k: 'pluginsUpdateRecord'}) as { timestamp: number } | null
        if (!pluginsUpdateRecord) {
            let timestamp = Clock.getTimestamp() as number
            ACEV2Storage.localSet({
                k: 'pluginsUpdateRecord',
                v: {
                    timestamp
                }
            })
            pluginsUpdateRecord = {
                timestamp
            }
        }
        if (updateFrequency === 'startup') {
            return true
        } else if (updateFrequency === 'daily') {
            let lastCheck = pluginsUpdateRecord.timestamp
            let now = Clock.getTimestamp() as number
            return now - lastCheck >= 86400000;
        } else if (updateFrequency === 'weekly') {
            let lastCheck = pluginsUpdateRecord.timestamp
            let now = Clock.getTimestamp() as number
            return now - lastCheck >= 604800000;
        } else if (updateFrequency === 'monthly') {
            let lastCheck = pluginsUpdateRecord.timestamp
            let now = Clock.getTimestamp() as number
            return now - lastCheck >= 2592000000;
        } else {
            return false
        }
    }

    public async selfReleaseTracker() {
        if (this.timeToCheckSelfUpdate()) {
            let result = await this.checkSelfUpdate()
            if (result.compareResult < 0) {
                ACEV2Dialog.showDialog({
                    title: I18n.t({key: 'version'}) + ' ' + result.latestVersionInfo.version + ' ' + result.latestVersionInfo.versionTag + ' ' + I18n.t({key: 'has-been-released'}),
                    content: I18n.t({key: 'newer-runtime-version-has-been-released-please-consider-updating'}) + ' ' + I18n.t({key: 'current-version'}) + ' ' + Version.getCurrentVersion() + ' ' + I18n.t({key: 'to'}) + ' ' + result.latestVersionInfo.version + ' ' + result.latestVersionInfo.versionTag,
                    okAction: () => this.updateSelf(),
                    cancelAction: () => {
                        ACEV2Toast.showToast({text: I18n.t({key: 'cancelled'})})
                    }
                })
            }
        }
    }

    public async pluginsReleaseTracker() {
        if (this.timeToCheckPluginsUpdate()) {
            let updatablePlugins = await this.checkPluginsUpdate()
            if (updatablePlugins.length > 0) {
                ACEV2Dialog.showDialog({
                    title: I18n.t({key: 'newer-version-of'}) + ' ' + updatablePlugins[0].latestRelease.id + ' ' + I18n.t({key: 'has-been-released'}),
                    content: I18n.t({key: 'do-you-want-to-update-this-plugin-from'}) + ' ' + updatablePlugins[0].currentRelease.manifest.versions[updatablePlugins[0].currentRelease.manifest.versions.length - 1] + ' ' + I18n.t({key: 'to'}) + ' ' + updatablePlugins[0].latestRelease.versions[updatablePlugins[0].latestRelease.versions.length - 1],
                    okAction: async () => {
                        await this.updatePlugin({
                            manifest: updatablePlugins[0].latestRelease,
                            remainingUpdatablePlugins: updatablePlugins.slice(1) as any
                        })
                    },
                    cancelAction: () => {
                        ACEV2Toast.showToast({text: I18n.t({key: 'cancelled'})})
                    }
                })
            }
        }
    }
}

export default new ReleaseTracker();