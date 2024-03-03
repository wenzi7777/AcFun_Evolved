import lightCssCode from "./light.css"
import darkCssCode from "./dark.css"

const acTheme = async ([injectCss, removeCss, currentThemeClass], manifest) => {
    if (currentThemeClass(manifest) === 'acLight') {
        injectCss(lightCssCode, manifest)
    }

    if (currentThemeClass(manifest) === 'acDark') {
        injectCss(darkCssCode, manifest)
    }
}