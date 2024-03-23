import {ACE_VERSION, LATEST_ACE_RELEASE, LATEST_ACE_RELEASE_VERSION, PLUGIN_LIST_API} from "../../config";
import {monkey} from "../api/networking";
import {downloadAndInstallPlugin, getInstalledPlugins} from "./apps/pluginToolkit";
import {openDialog} from "../api/dialog";
import {openWebpage} from "../api/ace";
import {manifest} from "./settings";
import {largeSet, localGet, localSet} from "../api/storage";

export const checkSelfUpdate = async () => {
    let fullUrl = await LATEST_ACE_RELEASE_VERSION()
    let raw = await monkey({
        method: 'GET',
        url: fullUrl,
        responseType: 'text'
    })
    let latestVersion = JSON.parse(raw).version

    return {
        updatable: ACE_VERSION === latestVersion,
        latestVersion
    }
}

export const checkPluginsUpdate = async () => {
    let pluginsData = await monkey({
        method: 'GET',
        url: await PLUGIN_LIST_API(),
    })
    let installedPlugins = await getInstalledPlugins()
    pluginsData = JSON.parse(pluginsData)
    let updatablePlugins = []
    for (let pluginData of pluginsData) {
        for (let installedPlugin of installedPlugins) {
            if (pluginData.id === installedPlugin.manifest.id) {
                if (pluginData.latestVersion !== installedPlugin.manifest.version) {
                    updatablePlugins.push({latestRelease: pluginData, currentRelease: installedPlugin})
                }
            }
        }
    }
    return updatablePlugins
}

export const checkAllUpdate = async () => {
    const lastCheckTime = await localGet('lastUpdateCheckTime')
    const currentTime = new Date().getTime();

    if (lastCheckTime && currentTime - lastCheckTime < 43200000) {
        return;
    }

    await localSet('lastUpdateCheckTime', currentTime)

    let selfUpdate = await checkSelfUpdate();
    let pluginsUpdate = await checkPluginsUpdate();

    if (selfUpdate.updatable) {
        await openDialog('发现更新', `AcFun Evolved Runtime 有新的版本，版本号是: ${selfUpdate.latestVersion}。您当前的版本号是: ${ACE_VERSION}。要更新吗？`, false, async () => {
            await updateSelf();
        });
    } else {
        if (pluginsUpdate.length > 0) {
            await openDialog('发现更新', `插件${pluginsUpdate[0].currentRelease.manifest.id}可以更新了，新的版本号是: ${pluginsUpdate[0].latestRelease.latestVersion}。您的版本号是: ${pluginsUpdate[0].currentRelease.manifest.version}`, false, async () => {
                await updatePlugin(pluginsUpdate[0].currentRelease.manifest);
            });
        }
    }
};

export const updateSelf = async () => {
    await openWebpage(await LATEST_ACE_RELEASE(), manifest)
}

export const updatePlugin = async (bigManifest) => {
    await downloadAndInstallPlugin(bigManifest)
}