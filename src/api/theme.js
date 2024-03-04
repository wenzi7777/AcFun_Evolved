import {getRuntimeSettings, saveRuntimeSettings} from "../core/settings";

/**
 * 获取当前的主题的class类名
 * @returns {string} - 类名
 */
export const currentThemeClass = async () => {
    let settings = await getRuntimeSettings()
    if (settings.view.theme === 'aceAuto') {
        return autoTheme()
    }
    return settings.view.theme
}

/**
 * 设置为亮色主题
 * @returns {null}
 */
export const setToLight = async () => {
    let settings = await getRuntimeSettings()
    settings.view.theme = 'aceLight'
    await saveRuntimeSettings(settings)
}

/**
 * 设置为暗色主题
 * @returns {null}
 */
export const setToDark = async () => {
    let settings = await getRuntimeSettings()
    settings.view.theme = 'aceDark'
    await saveRuntimeSettings(settings)
}

export const sunriseTime = "06:00";
export const sunsetTime = "18:00";

/**
 * 依照 Beijing/Taipei/HongKong/Macao 标准时间，以定义好的日出日落时间，自动计算当前的主题
 * @returns {string} - 当前主题类名
 */
export const autoTheme = () => {
    const now = new Date();
    const currentTime = now.getHours() + ':' + now.getMinutes().toString().padStart(2, '0');

    const sunriseDate = new Date(now.toDateString() + ' ' + sunriseTime);
    const sunsetDate = new Date(now.toDateString() + ' ' + sunsetTime);
    const currentDate = new Date(now.toDateString() + ' ' + currentTime);

    if (currentDate >= sunsetDate || currentDate <= sunriseDate) {
        return 'aceDark'
    } else {
        return 'aceLight'
    }
};
