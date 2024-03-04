import {trackHtml, trackScript, trackStyle, untrackHtml, untrackScript, untrackStyle} from "../core/trace";
import {uuidV4} from "../utils/uuid";
import {aceNodeLocating} from "./ace";

/**
 * HTML注入器
 * @param htmlCode - 要注入的RawHTML
 * @param position - 要注入的位置节点
 * @returns {string} - 被注入的HTML的包裹器的ACE Uuid
 */
export const injectHTML = async (htmlCode, position) => {
    let node = document.createElement('div')
    let aceUuid = uuidV4()
    node.innerHTML = htmlCode
    node.dataset.aceUuid = aceUuid
    position.appendChild(node)
    await trackHtml(aceUuid)
    return aceUuid
}

/**
 * 移除注入的HTML
 * @param aceUuid - 要被移除的HTML的包裹器的ACE Uuid
 * @returns {null}
 */
export const removeHTML = async (aceUuid) => {
    await untrackHtml(aceUuid)
    aceNodeLocating(aceUuid).parentNode.removeChild(aceNodeLocating(aceUuid))
}

/**
 * CSS注入器
 * @param cssCode - 要被注入的RawCSS
 * @returns {string} - 被注入的CSS的Style标签的ACE Uuid
 */
export const injectCss = async (cssCode) => {
    let node = document.createElement('style')
    let aceUuid = uuidV4()
    node.innerHTML = cssCode
    node.dataset.aceUuid = aceUuid
    document.head.appendChild(node)
    await trackStyle(aceUuid)
    return aceUuid
}

/**
 * 移除注入的CSS
 * @param aceUuid - 要被移除的CSS的Style标签的ACE Uuid
 * @returns {null}
 */
export const removeCss = async (aceUuid) => {
    await untrackStyle(aceUuid)
    aceNodeLocating(aceUuid).parentNode.removeChild(aceNodeLocating(aceUuid))
}

/**
 * Script注入器
 * @param scriptCode - 要被注入的RawJavaScript
 * @returns {string} - 注入的JavaScript的Script标签的ACE Uuid
 */
export const injectScript = async (scriptCode) => {
    let node = document.createElement('script')
    let aceUuid = uuidV4()
    node.innerHTML = scriptCode
    node.dataset.aceUuid = aceUuid
    document.head.appendChild(node)
    await trackScript(aceUuid)
    return aceUuid
}

/**
 * 移除注入的Script
 * @param aceUuid - 要被移除的JavaScript的Script标签的ACE Uuid
 * @returns {null}
 */
export const removeScript = async (aceUuid) => {
    await untrackScript(aceUuid)
    aceNodeLocating(aceUuid).parentNode.removeChild(aceNodeLocating(aceUuid))
}