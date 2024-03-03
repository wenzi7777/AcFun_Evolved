import {getRuntimeSettings, saveRuntimeSettings} from "../core/settings";

export const currentThemeClass = async () => {
    let settings = await getRuntimeSettings()
    if (settings.view.theme === 'aceAuto') {
        return autoTheme()
    }
    return settings.view.theme
}

export const setToLight = async () => {
    let settings = await getRuntimeSettings()
    settings.view.theme = 'aceLight'
    await saveRuntimeSettings(settings)
}

export const setToDark = async () => {
    let settings = await getRuntimeSettings()
    settings.view.theme = 'aceDark'
    await saveRuntimeSettings(settings)
}

export const sunriseTime = "06:00";
export const sunsetTime = "18:00";

export const autoTheme = () => {
    // 获取当前时间
    const now = new Date();
    const currentTime = now.getHours() + ':' + now.getMinutes().toString().padStart(2, '0');

    // 将字符串时间转换为日期对象，以便比较
    const sunriseDate = new Date(now.toDateString() + ' ' + sunriseTime);
    const sunsetDate = new Date(now.toDateString() + ' ' + sunsetTime);
    const currentDate = new Date(now.toDateString() + ' ' + currentTime);

    // 判断当前时间是否在日落之后或日出之前
    if (currentDate >= sunsetDate || currentDate <= sunriseDate) {
        return 'aceDark'
    } else {
        return 'aceLight'
    }
};
