import {currentThemeClass} from "./theme";
import {injectCss, injectHTML, removeCss, removeHTML} from "./inject";
import {ANIMATION_DELAY} from "../../config";
import loaderEjsTemplate from '../template/loader/loader.ejs'
import loaderCssCode from '../template/loader/loader.css'
import {openDialog} from "./dialog";

export const aceNodeLocating = (aceUuid) => {
    return document.querySelector(`[data-ace-uuid="${aceUuid}"]`)
}

export const toggleAnimation = (aceUuid, target) => {
    let node = aceNodeLocating(aceUuid);
    requestAnimationFrame(() => {
        requestAnimationFrame(() => {
            node.querySelector(target).classList.toggle('open');
        });
    });
};

export const closePanel = (htmlAceUuid, cssAceUuid, target) => {
    toggleAnimation(htmlAceUuid, target)
    setTimeout(async () => {
        await removeHTML(htmlAceUuid)
        await removeCss(cssAceUuid)
    }, ANIMATION_DELAY)
}

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

export const matchPattern = (str, pattern) => {
    if (typeof pattern === 'string') {
        return str.includes(pattern)
    }
    return pattern.test(str)
}

export const matchUrlPattern = (pattern) => matchPattern(document.URL.replace(window.location.search, ''), pattern)

export const openWebpage = async (url, manifestOrBigManifest) => {
    let pluginId = manifestOrBigManifest.id.original ? manifestOrBigManifest.id.original : manifestOrBigManifest.id
    await openDialog(`${pluginId} 要开启页面`, `${pluginId} 要开启页面 ${url} 。按下「好」后将用新标签页打开此页，AcFun Evolved Runtime 不对目标网站的安全性负责。`, false, () => {
        window.open(url)
    }, () => {
    });
}

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

export const removeLoader = async ({htmlAceUuid, cssAceUuid}) => {
    await removeHTML(htmlAceUuid)
    await removeCss(cssAceUuid)
}

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
    return false
}