import {currentThemeClass} from "./theme";
import {injectCss, injectHTML, removeCss, removeHTML} from "./inject";
import {ANIMATION_DELAY} from "../../config";
import loaderEjsTemplate from '../template/loader/loader.ejs'
import loaderCssCode from '../template/loader/loader.css'
import {openDialog} from "./dialog";

/**
 * ACE托管元素定位
 * @param aceUuid - 元素的ACE Uuid
 * @returns {Element} - 元素节点
 */
export const aceNodeLocating = (aceUuid) => {
    return document.querySelector(`[data-ace-uuid="${aceUuid}"]`)
}

/**
 * 开关元素上的 .open 动画效果
 * @param aceUuid - 元素包裹器的ACE Uuid
 * @param target - 元素的本体类名
 */
export const toggleAnimation = (aceUuid, target) => {
    let node = aceNodeLocating(aceUuid);
    requestAnimationFrame(() => {
        requestAnimationFrame(() => {
            node.querySelector(target).classList.toggle('open');
        });
    });
};

/**
 * 关闭面板
 * @param htmlAceUuid - 面板包裹器的ACE Uuid
 * @param cssAceUuid - 面板所需的Style的ACE Uuid
 * @param target - 面板本体的类名
 */
export const closePanel = (htmlAceUuid, cssAceUuid, target) => {
    toggleAnimation(htmlAceUuid, target)
    setTimeout(async () => {
        await removeHTML(htmlAceUuid)
        await removeCss(cssAceUuid)
    }, ANIMATION_DELAY)
}

/**
 * 获取图标的RawHTML
 * @param iconName - 图标的名字
 * @returns {string} - 图标的RawHTML
 */
export const getIconHtmlCode = async (iconName) => {
    let icons = {
        'pluginDefaultIcon': require('../template/icons/pluginDefaultIcon.ejs'),
        'aceIcon': require('../template/icons/aceIcon.ejs'),
        'storeIcon': require('../template/icons/storeIcon.ejs'),
        'installerIcon': require('../template/icons/installerIcon.ejs'),
        'bridgeIcon': require('../template/icons/bridgeIcon.ejs'),
    }
    let selectedIcon = icons[iconName]
    if (selectedIcon === undefined) {
        selectedIcon = icons['pluginDefaultIcon']
    }
    return selectedIcon({
        theme: await currentThemeClass()
    })
}

/**
 * 检查字符串`str`是否包含或匹配给定的模式`pattern`。
 * 如果`pattern`是一个字符串，则函数检查`str`是否包含`pattern`。
 * 如果`pattern`是一个正则表达式，则函数检查`str`是否匹配`pattern`。
 *
 * @param {string} str - 要检查的字符串。
 * @param {string|RegExp} pattern - 要匹配的模式，可以是字符串或正则表达式。
 * @returns {boolean} - 如果字符串包含或匹配模式，则返回true；否则返回false。
 */
export const matchPattern = (str, pattern) => {
    if (typeof pattern === 'string') {
        return str.includes(pattern)
    }
    return pattern.test(str)
}

/**
 * 检查当前页面的URL（不包含查询字符串）是否包含或匹配给定的模式`pattern`。
 * 该函数利用`matchPattern`函数进行匹配检查。
 * 如果`pattern`是一个字符串，则函数检查URL是否包含`pattern`。
 * 如果`pattern`是一个正则表达式，则函数检查URL是否匹配`pattern`。
 *
 * @param {string|RegExp} pattern - 要匹配的模式，可以是字符串或正则表达式。
 * @returns {boolean} - 如果URL包含或匹配模式，则返回true；否则返回false。
 */
export const matchUrlPattern = (pattern) => matchPattern(document.URL.replace(window.location.search, ''), pattern)

/**
 * 用新标签页打开网页
 * @param url - 网页URL
 * @param manifestOrBigManifest - 插件的manifest或者bigManifest
 * @returns {null}
 */
export const openWebpage = async (url, manifestOrBigManifest) => {
    let pluginId = manifestOrBigManifest.id.original ? manifestOrBigManifest.id.original : manifestOrBigManifest.id
    await openDialog(`${pluginId} 要开启页面`, `${pluginId} 要开启页面 ${url} 。按下「好」后将用新标签页打开此页，AcFun Evolved Runtime 不对目标网站的安全性负责。`, false, () => {
        window.open(url)
    }, () => {
    });
}

/**
 * 为指定的节点添加载入器
 * @param targetAceUuid - 指定节点的ACE Uuid
 * @returns {{htmlAceUuid: string, cssAceUuid: string}} - 载入器的信息
 */
export const addLoader = async (targetAceUuid) => {
    let node
    if (!targetAceUuid) {
        node = document.body
    } else {
        node = aceNodeLocating(targetAceUuid)
    }
    let loaderHtmlCode = loaderEjsTemplate({
        theme: await currentThemeClass()
    })
    let loaderCssAceUuid = await injectCss(loaderCssCode)
    let loaderAceUuid = await injectHTML(loaderHtmlCode, node)
    return {
        htmlAceUuid: loaderAceUuid,
        cssAceUuid: loaderCssAceUuid
    }
}

/**
 * 移除载入器
 * @param htmlAceUuid - 载入器的包裹器的ACE Uuid
 * @param cssAceUuid - 载入器的Style的ACE Uuid
 * @returns {null}
 */
export const removeLoader = async ({htmlAceUuid, cssAceUuid}) => {
    await removeHTML(htmlAceUuid)
    await removeCss(cssAceUuid)
}

/**
 * 检查URL是否是官方URL
 * @param url - 要检查的URL
 * @returns {boolean}
 */
export const isTrustable = (url) => {
    if (url.indexOf('https://wenzi7777.github.io/AcFun-Evolved-Plugins') === 0) {
        return true
    }
    if (url.indexOf('https://cdn.jsdelivr.net/gh/wenzi7777/AcFun-Evolved-Plugins@main') === 0) {
        return true
    }
    if (url.indexOf('https://ace-plugins.1205.moe') === 0) {
        return true
    }
    if (url.indexOf('https://wenzi7777.github.io/AcFun-Evolved') === 0) {
        return true
    }
    if (url.indexOf('https://cdn.jsdelivr.net/gh/wenzi7777/AcFun-Evolved@main') === 0) {
        return true
    }
    if (url.indexOf('https://ace.1205.moe') === 0) {
        return true
    }
    return false
}