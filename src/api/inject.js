import {trackHtml, trackScript, trackStyle, untrackHtml, untrackScript, untrackStyle} from "../core/trace";
import {uuidV4} from "../utils/uuid";
import {aceNodeLocating} from "./ace";

export const injectHTML = async (htmlCode, position) => {
    let node = document.createElement('div')
    let aceUuid = uuidV4()
    node.innerHTML = htmlCode
    node.dataset.aceUuid = aceUuid
    position.appendChild(node)
    await trackHtml(aceUuid)
    return aceUuid
}

export const removeHTML = async (aceUuid) => {
    await untrackHtml(aceUuid)
    aceNodeLocating(aceUuid).parentNode.removeChild(aceNodeLocating(aceUuid))
}

export const injectCss = async (cssCode) => {
    let node = document.createElement('style')
    let aceUuid = uuidV4()
    node.innerHTML = cssCode
    node.dataset.aceUuid = aceUuid
    document.head.appendChild(node)
    await trackStyle(aceUuid)
    return aceUuid
}

export const removeCss = async (aceUuid) => {
    await untrackStyle(aceUuid)
    aceNodeLocating(aceUuid).parentNode.removeChild(aceNodeLocating(aceUuid))
}

export const injectScript = async (scriptCode) => {
    let node = document.createElement('script')
    let aceUuid = uuidV4()
    node.innerHTML = scriptCode
    node.dataset.aceUuid = aceUuid
    document.head.appendChild(node)
    await trackScript(aceUuid)
    return aceUuid
}

export const removeScript = async (aceUuid) => {
    await untrackScript(aceUuid)
    aceNodeLocating(aceUuid).parentNode.removeChild(aceNodeLocating(aceUuid))
}