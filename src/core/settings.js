import sideMenuEjsTemplate from '../template/sideMenu/sideMenu.ejs'
import sideMenuStyleCode from '../template/sideMenu/sideMenu.css'
import runtimeSettingsEjsCode from '../template/runtimeSettings/runtimeSettings.ejs'
import runtimeSettingsStyleCode from '../template/runtimeSettings/runtimeSettings.css'
import {injectCss, injectHTML} from "../api/inject";
import {aceNodeLocating, closePanel, openWebpage, toggleAnimation} from "../api/ace";
import {currentThemeClass} from "../api/theme";
import {ACE_VERSION} from "../../config";
import {largeGet, largeSet} from "../api/storage";
import {openDialog} from "../api/dialog";
import {openAboutPanel} from "../api/aboutPanel";
import {openDashboard} from "./dashboard";

export const initSideMenu = async () => {
    await injectCss(sideMenuStyleCode)
    let htmlCode = sideMenuEjsTemplate({
        theme: await currentThemeClass()
    })
    let sideMenuAceUuid = await injectHTML(htmlCode, document.body)
    let node = aceNodeLocating(sideMenuAceUuid)
    node.querySelector('#dashboard').addEventListener('click', () => openDashboard())
    node.querySelector('#settings').addEventListener('click', () => openRuntimeSettings())
}

export const openRuntimeSettings = async () => {
    let runtimeSettingsStyleAceUuid = await injectCss(runtimeSettingsStyleCode)
    let htmlCode = runtimeSettingsEjsCode({
        theme: await currentThemeClass()
    })
    let runtimeSettingsAceUuid = await injectHTML(htmlCode, document.body)
    toggleAnimation(runtimeSettingsAceUuid, '.aceRuntimeSettingsPanel', currentThemeClass())
    let node = aceNodeLocating(runtimeSettingsAceUuid)
    node.querySelector('#cancel').addEventListener('click', () => closePanel(runtimeSettingsAceUuid, runtimeSettingsStyleAceUuid, '.aceRuntimeSettingsPanel'))
    syncRuntimeSettingsToView(await getRuntimeSettings(), runtimeSettingsAceUuid)
    node.querySelector('#confirm').addEventListener('click', () => {
        closePanel(runtimeSettingsAceUuid, runtimeSettingsStyleAceUuid, '.aceRuntimeSettingsPanel')
        syncViewToRuntimeSettings(runtimeSettingsAceUuid)
    })
    node.querySelector('#about').addEventListener('click', () => openAboutPanel(manifest.name, manifest.iconName, manifest.version, manifest.description, manifest.copyrightCaption))
    node.querySelector('#github').addEventListener('click', () => openWebpage('https://github.com/wenzi7777/AcFun-Evolved', manifest))
}

export const syncRuntimeSettingsToView = (settings, aceUuid) => {
    let node = aceNodeLocating(aceUuid);
    node.querySelector('#timing').value = settings.general.timing;
    node.querySelector('#source').value = settings.general.source;
    node.querySelector('#observeMode').value = settings.general.observeMode;
    if (settings.view.theme === 'aceLight') {
        node.querySelector('#themeLight').checked = true;
    } else if (settings.view.theme === 'aceDark') {
        node.querySelector('#themeDark').checked = true;
    } else if (settings.view.theme === 'aceAuto') {
        node.querySelector('#themeAuto').checked = true;
    }
    if (settings.development.psv === 'strong') {
        node.querySelector('#psvStrong').checked = true;
    } else if (settings.development.psv === 'weak') {
        node.querySelector('#psvWeak').checked = true;
    } else if (settings.development.psv === 'off') {
        node.querySelector('#psvOff').checked = true;
    }
}

export const getRuntimeSettings = async () => {
    let settings = await largeGet('runtimeSettings')
    if (!settings) {
        settings = {
            general: {
                timing: 'normal',
                source: 'jsdelivr',
                observeMode: 'normal'
            },
            view: {
                theme: 'aceLight'
            },
            development: {
                psv: 'strong'
            }
        }
        await largeSet('runtimeSettings', settings)
    }
    return settings
}

export const syncViewToRuntimeSettings = async (aceUuid) => {
    let node = aceNodeLocating(aceUuid);

    let timing = node.querySelector('#timing').value;
    let source = node.querySelector('#source').value;
    let observeMode = node.querySelector('#observeMode').value;
    let theme;
    if (node.querySelector('#themeLight').checked) {
        theme = 'aceLight';
    } else if (node.querySelector('#themeDark').checked) {
        theme = 'aceDark';
    } else if (node.querySelector('#themeAuto').checked) {
        theme = 'aceAuto';
    }
    let psv;
    if (node.querySelector('#psvStrong').checked) {
        psv = 'strong';
    } else if (node.querySelector('#psvWeak').checked) {
        psv = 'weak';
    } else if (node.querySelector('#psvOff').checked) {
        psv = 'off';
    }

    let newSettings = {
        general: {
            timing: timing,
            source: source,
            observeMode: observeMode
        },
        view: {
            theme: theme,
        },
        development: {
            psv: psv,
        },
    };
    let currentSettings = await getRuntimeSettings();
    if (!_.isEqual(newSettings, currentSettings)) {
        await saveRuntimeSettings(newSettings);
        await openDialog('设置已保存', '按下「好」后将刷新页面以应用设置。', true, () => {
            location.reload()
        }, () => {
        });
    }
}

export const saveRuntimeSettings = async (settings) => {
    await largeSet('runtimeSettings', settings)
}

export const getBridgeSettings = async () => {
    let settings = await largeGet('bridgeSettings')
    if (!settings) {
        settings = {
            bridged: false,
            timing: 'normal',
            connect: ''
        }
        await largeSet('bridgeSettings', settings)
    }
    return settings
}

export const saveBridgeSettings = async (settings) => {
    await largeSet('bridgeSettings', settings)
}

export const manifest = {
    name: 'AcFun Evolved Runtime',
    description: '一个强大的AcFun脚本管理器',
    version: ACE_VERSION,
    iconName: 'aceIcon',
    copyrightCaption: '(c)2023-2024 Nick Hsu, Licensed under MPL-2.0',
    requestedAPI: [],
    author: 'Nick Hsu',
    id: '@wenzi7777/ace_store',
}