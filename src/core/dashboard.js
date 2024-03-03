import dashboardEjsTemplate from "../template/dashboard/dashboard.ejs";
import shortcutStyleCode from '../template/shortcut/shortcut.css'
import dashboardStyleCode from "../template/dashboard/dashboard.css";
import {injectCss, injectHTML, removeCss, removeHTML} from "../api/inject";
import {currentThemeClass} from "../api/theme";
import {aceNodeLocating, toggleAnimation} from "../api/ace";
import {ANIMATION_DELAY} from "../../config";
import {loadAceStore} from "./apps/aceStore";
import {getRuntimeSettings} from "./settings";
import {loadAceBridge, loadInstallationWizard} from "./apps/aceBridge";
import {createShortcut} from "./apps/pluginToolkit";

export const openDashboard = async () => {
    let dashboardStyleAceUuid = await injectCss(dashboardStyleCode)
    let shortcutStyleAceUuid = await injectCss(shortcutStyleCode)
    let htmlCode = dashboardEjsTemplate({
        theme: await currentThemeClass()
    })
    let dashboardAceUuid = await injectHTML(htmlCode, document.body)
    toggleAnimation(dashboardAceUuid, '.aceDashboard')
    let node = aceNodeLocating(dashboardAceUuid)
    node.querySelector('#close').addEventListener('click', () => closeDashboard(dashboardAceUuid, dashboardStyleAceUuid, shortcutStyleAceUuid))
    let dashboardCloseInfo = {
        dashboardAceUuid,
        dashboardStyleAceUuid,
        shortcutStyleAceUuid
    }
    await loadDefaultApps(dashboardAceUuid, dashboardCloseInfo)
    await createShortcut(dashboardAceUuid, dashboardCloseInfo)
}

export const closeDashboard = async (htmlAceUuid, cssAceUuid, shortcutCssAceUuid) => {
    toggleAnimation(htmlAceUuid, '.aceDashboard')
    setTimeout(async () => {
        await removeHTML(htmlAceUuid)
        await removeCss(cssAceUuid)
        await removeCss(shortcutCssAceUuid)
    }, ANIMATION_DELAY)
}

export const loadDefaultApps = async (dashboardAceUuid, dashboardCloseInfo) => {
    let settings = await getRuntimeSettings()
    await loadAceStore(dashboardAceUuid, dashboardCloseInfo)
    if (settings.development.psv !== 'strong') {
        await loadAceBridge(dashboardAceUuid, dashboardCloseInfo)
    }
}