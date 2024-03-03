import aceStoreStyleCode from "../../template/aceStore/aceStore.css";
import aceStoreEjsTemplate from "../../template/aceStore/aceStore.ejs";
import shortcutEjsTemplate from '../../template/shortcut/shortcut.ejs'
import aceStoreItemEjsTemplate from '../../template/aceStoreItem/aceStoreItem.ejs'
import aceStoreItemStyleCode from '../../template/aceStoreItem/aceStoreItem.css'
import {ACE_VERSION, PLUGIN_LIST_API} from "../../../config";
import {
    aceNodeLocating,
    addLoader,
    closePanel,
    getIconHtmlCode,
    openWebpage,
    removeLoader,
    toggleAnimation
} from "../../api/ace";
import {injectCss, injectHTML, removeCss, removeHTML} from "../../api/inject";
import {currentThemeClass} from "../../api/theme";
import {closeDashboard} from "../dashboard";
import {openAboutPanel} from "../../api/aboutPanel";
import {monkey} from "../../api/networking";
import {manifestLimit} from "../../utils/text";
import {checkIfInstalled, downloadAndInstallPlugin, uninstallPlugin} from "./pluginToolkit";

export const loadAceStore = async (dashboardAceUuid, dashboardCloseInfo) => {
    let dashboardNode = aceNodeLocating(dashboardAceUuid)
    let aceStoreShortcutHtmlCode = shortcutEjsTemplate({
        theme: await currentThemeClass(),
        icon: await getIconHtmlCode('storeIcon'),
        title: manifest.name
    })
    let aceStoreShortcutAceUuid = await injectHTML(aceStoreShortcutHtmlCode, dashboardNode.querySelector('.aceDashboardMain'))
    let aceStoreShortcutNode = aceNodeLocating(aceStoreShortcutAceUuid)
    aceStoreShortcutNode.addEventListener('click', () => openAceStore(dashboardCloseInfo))
}

export const smallManifest = {
    name: 'ACE Store',
    description: 'ACE Store是AcFun Evolved的插件商店。',
    version: ACE_VERSION,
    iconName: 'storeIcon',
    copyrightCaption: '(c)2023-2024 Nick Hsu, Licensed under MPL-2.0',
    requestedAPI: [],
    author: 'Nick Hsu',
    id: '@wenzi7777/ace_store',
    website: 'https://ace.1205.moe/'
}

export const manifest = smallManifest

export const openAceStore = async (dashboardCloseInfo) => {
    let aceStoreStyleAceUuid = await injectCss(aceStoreStyleCode)
    let htmlCode = aceStoreEjsTemplate({
        theme: await currentThemeClass(),
        manifest
    })
    let aceStoreAceUuid = await injectHTML(htmlCode, document.body)
    await closeDashboard(dashboardCloseInfo.dashboardAceUuid, dashboardCloseInfo.dashboardStyleAceUuid, dashboardCloseInfo.shortcutStyleAceUuid)
    toggleAnimation(aceStoreAceUuid, '.aceStore')
    let node = aceNodeLocating(aceStoreAceUuid)
    let pluginListCloseInfo = await injectPluginList(aceStoreAceUuid)
    node.querySelector('#close').addEventListener('click', async () => {
        await removeCss(pluginListCloseInfo.cssAceUuid)
        await removeHTML(pluginListCloseInfo.htmlAceUuid)
        closePanel(aceStoreAceUuid, aceStoreStyleAceUuid, '.aceStore')
    })
    node.querySelector('#about').addEventListener('click', () => openAboutPanel(manifest.name, manifest.iconName, manifest.version, manifest.description, manifest.copyrightCaption))
    node.querySelector('#site').addEventListener('click', () => openWebpage(manifest.website, manifest))
}

export const injectPluginList = async (aceStoreAceUuid) => {
    let aceStoreItemStyleAceUuid = await injectCss(aceStoreItemStyleCode)
    let node = aceNodeLocating(aceStoreAceUuid)
    let loaderData = await addLoader(aceStoreAceUuid)
    let pluginsData = await monkey({
        method: 'GET',
        url: await PLUGIN_LIST_API()
    })
    await removeLoader(loaderData)
    pluginsData = JSON.parse(pluginsData)
    let aceStoreItemHtmlCode = ''
    for (let pluginData of pluginsData) {
        let installed = await checkIfInstalled({manifest: pluginData})
        aceStoreItemHtmlCode += aceStoreItemEjsTemplate({
            theme: await currentThemeClass(),
            icon: pluginData.icon ? pluginData.icon : await getIconHtmlCode(pluginData.iconName),
            manifest: manifestLimit(pluginData),
            installed
        })
    }
    let aceStoreItemAceUuid = await injectHTML(aceStoreItemHtmlCode, node.querySelector('.aceStoreView'))
    let aceStoreItemNode = aceNodeLocating(aceStoreItemAceUuid)
    for (let pluginData of pluginsData) {
        let idSelector = pluginData.id.original.replaceAll('@', '-').replaceAll('/', '-')
        if (aceStoreItemNode.querySelector(`#install-${idSelector}`)) {
            aceStoreItemNode.querySelector(`#install-${idSelector}`).addEventListener('click', () => downloadAndInstallPlugin(pluginData, aceStoreAceUuid))
        }
        if (aceStoreItemNode.querySelector(`#uninstall-${idSelector}`)) {
            aceStoreItemNode.querySelector(`#uninstall-${idSelector}`).addEventListener('click', () => uninstallPlugin(pluginData, aceStoreAceUuid))
        }
        if (aceStoreItemNode.querySelector(`#website-${idSelector}`)) {
            aceStoreItemNode.querySelector(`#website-${idSelector}`).addEventListener('click', () => openWebpage(pluginData.website, pluginData))
        }
    }
    return {
        htmlAceUuid: aceStoreItemAceUuid,
        cssAceUuid: aceStoreItemStyleAceUuid
    }
}