import {getRuntimeSettings} from "./src/core/settings";

export const ANIMATION_DELAY = 200

export const ACE_VERSION = `${ACFUN_EVOLVED_VERSION} ${GIT_HASH}`

export const PUBLIC_KEY = `-----BEGIN PUBLIC KEY-----
MIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEAilgGwC2CNm3zSSUzaz7j
cIM08uKKGGmWs1yoQNUzBsgX/cnuVQsuPL79RDtt5P8/aPwKyzFKcd2kxIzKbLr/
XTOhPz6miVcRd86HiFJmEC1zO/9FQITMNcN4/xjGGnKZWa80su7CpFdHkTLifLiO
P2U7qi/yiNOrjEfo4ymCjFToFBYQ2VQ6Te5mnQxvmK9arKwm/wT40OPk9H8YpJnx
ZiPLyCCYhzOQCHHijlc/iI2oNw0UnqLJ4wDsBSnuePC9QWyz3QdV+o//AVZpjGq6
XWWtEOgGfY5nyOSzp19FbiVgbxV3QX8RWBP3ifPtJhv0D16X1joCELgnqtKbaVkG
L6+m0r+YSoZojY2HY0159PafKkYg5xhTTCLyXtsWscEFd/PK2sm4Ag/htuGYEX2n
HH9XGyi1oV/8zeFF4YKe5DlEyxy5KaBnRBGyo4YSfDZD4+PGTponUOaJc1iC/qPu
YnCFobD55bs2zlDWpJUNLaUIkijFWMwNbtqlRGp5wUnNrFdv8k6L2vR9fUnetxoO
xowBvt/quZbgpn5K/WVF8QML3dY4clPDGYvYceKPGVCdZUI+NTnfeeH45ldOYSin
3z+cDYEA7wQaPtu57mRRQOBVUaa5tCP43OJHtlsFjKJmvx4Iw2Z4OEUZZJThZcJG
yl8yJuhgZ/FJ6NU5dSVzRjkCAwEAAQ==
-----END PUBLIC KEY-----`

export const BASE_PLUGIN_REPO_URL = async () => {
    let base_url = ''
    let runtimeSettings = await getRuntimeSettings()
    if(runtimeSettings.general.source === 'github') {
        base_url = 'https://wenzi7777.github.io/AcFun-Evolved-Plugins' // github repo
    }else if(runtimeSettings.general.source === 'jsdelivr') {
        base_url = 'https://cdn.jsdelivr.net/gh/wenzi7777/AcFun-Evolved-Plugins@main' // jsdelivr cdn
    }else {
        base_url = 'https://ace-plugins.1205.moe' // cloudflare proxy
    }
    return base_url
}

export const BASE_SELF_REPO_URL = async () => {
    let base_url = ''
    let runtimeSettings = await getRuntimeSettings()
    if(runtimeSettings.general.source === 'github') {
        base_url = 'https://wenzi7777.github.io/AcFun-Evolved' // github repo
    }else if(runtimeSettings.general.source === 'jsdelivr') {
        base_url = 'https://cdn.jsdelivr.net/gh/wenzi7777/AcFun-Evolved@main' // jsdelivr cdn
    }else {
        base_url = 'https://ace.1205.moe' // cloudflare proxy
    }
    return base_url
}

export const PLUGIN_LIST_API = async () => {
    return `${await BASE_PLUGIN_REPO_URL()}/manifest.json`
}

export const GET_PLUGIN_LATEST_VERSION_DOWNLOAD_URL = async (bigManifest) => {
    return `${await BASE_PLUGIN_REPO_URL()}/${bigManifest.id.original}/packs/${bigManifest.latestVersion}/raw.json.tar.gz`
}

export const LATEST_ACE_RELEASE = async () => {
    return `${await BASE_SELF_REPO_URL()}/dist/acfun.evolved.bundle.min.user.js`
}

export const LATEST_ACE_RELEASE_VERSION = async () => {
    return `${await BASE_SELF_REPO_URL()}/package.json`
}