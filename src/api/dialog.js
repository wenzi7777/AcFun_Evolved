import dialogEjsTemplate from '../template/dialog/dialog.ejs'
import styleCode from '../template/dialog/dialog.css'
import {injectCss, injectHTML} from "./inject";
import {aceNodeLocating, closePanel, toggleAnimation} from "./ace";
import {currentThemeClass} from "./theme";

export const openDialog = async (title, content, isNotice = true, onConfirm = () => {}, onCancel = () => {}) => {
    let styleAceUuid = await injectCss(styleCode)
    let htmlCode = dialogEjsTemplate({
        title: title,
        content: content,
        isNotice,
        theme: await currentThemeClass()
    })
    let dialogAceUuid = await injectHTML(htmlCode, document.body)
    let node = aceNodeLocating(dialogAceUuid)
    toggleAnimation(dialogAceUuid, '.aceDialog')
    node.querySelector('#confirm').addEventListener('click', () => {
        onConfirm()
        closePanel(dialogAceUuid, styleAceUuid, '.aceDialog')
    })
    if (!isNotice) {
        node.querySelector('#cancel').addEventListener('click', () => {
            onCancel()
            closePanel(dialogAceUuid, styleAceUuid, '.aceDialog')
        })
    }
}