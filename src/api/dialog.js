import dialogEjsTemplate from '../template/dialog/dialog.ejs'
import styleCode from '../template/dialog/dialog.css'
import {injectCss, injectHTML} from "./inject";
import {aceNodeLocating, closePanel, toggleAnimation} from "./ace";
import {currentThemeClass} from "./theme";

/**
 * 打开模态框
 * @param title - 标题
 * @param content - 内容
 * @param isNotice - 是否是通知
 * @param onConfirm - 按下「好」后执行的操作
 * @param onCancel - 按下「取消」后执行的操作
 * @returns {null}
 */
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