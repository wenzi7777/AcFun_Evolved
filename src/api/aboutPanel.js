import aboutPanelEjsTemplate from '../template/aboutPanel/aboutPanel.ejs'
import aboutPanelStyleCode from '../template/aboutPanel/aboutPanel.css'
import {injectCss, injectHTML} from "./inject";
import {currentThemeClass} from "./theme";
import {aceNodeLocating, closePanel, getIconHtmlCode, toggleAnimation} from "./ace";

export const openAboutPanel = async (name, iconName, version, content, caption) => {
    let aboutPanelStyleAceUuid = await injectCss(aboutPanelStyleCode)
    let htmlCode = aboutPanelEjsTemplate({
        theme: await currentThemeClass(),
        name,
        icon: await getIconHtmlCode(iconName),
        version,
        content,
        caption
    })
    let aboutPanelAceUuid = await injectHTML(htmlCode, document.body)
    toggleAnimation(aboutPanelAceUuid, '.aceAboutPanel')
    let node = aceNodeLocating(aboutPanelAceUuid)
    node.querySelector('#close').addEventListener('click', () => closePanel(aboutPanelAceUuid, aboutPanelStyleAceUuid, '.aceAboutPanel'))
}
