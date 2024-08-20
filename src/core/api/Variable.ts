import Version from "./Version";
import Preferences from "./Preferences";
import ACEV2Toast from "../../plugins/ACEV2Toast";
import I18n from "./I18n";
import ReleaseTracker from "./ReleaseTracker";
import logoIcon from "../../ui/assets/logo.svg"

class Variable {
    public ANIMATION_DURATION = 1000 * .2
    public TOAST_DURATION = 1000 * 2
    public DEBOUNCE_DURATION = 1000 * .5
    public MASTER_MANIFEST: manifest = {
        icon: logoIcon,
        name: 'AcFun Evolved Runtime',
        id: '@wenzi7777/acev2_runtime',
        versions: [Version.getCurrentVersion()],
        description: 'AcFun Evolved Runtime V2.',
        createdAt: new Date('2024-08-09').getTime() + '',
        updatedAt: new Date().getTime() + '',
        author: 'wenzi7777',
        copyright: '(c)2024 wenzi7777, licensed under the MIT License.',
        requestedAPIs: [],
        website: 'https://acev2.1205.moe/',
        trigger: {
            receiveHandler: true,
            matches: ['*']
        },
        settings: []
    }
    public PUBLIC_KEY = `-----BEGIN PUBLIC KEY-----
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
    public PAGE_SIZE = 8

    private baseSelfRepoURL() {
        let source = Preferences.getPreference({category: 'general', k: 'source'})
        if(source === 'github') {
            return 'https://raw.githubusercontent.com/wenzi7777/AcFun-Evolved/main/'
        }else if(source === 'cloudflare') {
            return 'https://acev2.1205.moe'
        }else if(source === 'jsdelivr') {
            return 'https://cdn.jsdelivr.net/gh/wenzi7777/AcFun-Evolved/@main/'
        }else {
            ACEV2Toast.showToast({text: I18n.t({key: 'invalid-source-please-select-again'})})
        }
    }

    private basePluginRepoURL() {
        let source = Preferences.getPreference({category: 'general', k: 'source'})
        if(source === 'github') {
            return 'https://raw.githubusercontent.com/wenzi7777/acev2_plugins/main/'
        }else if(source === 'cloudflare') {
            return 'https://acev2-plugins.1205.moe'
        }else if(source === 'jsdelivr') {
            return 'https://cdn.jsdelivr.net/gh/wenzi7777/acev2_plugins/@main/'
        }else {
            ACEV2Toast.showToast({text: I18n.t({key: 'invalid-source-please-select-again'})})
        }
    }

    public bigManifestURL() {
        return this.basePluginRepoURL() + 'bigManifest.json'
    }

    public developerKitURL() {
        return this.basePluginRepoURL() + 'developer-kit.zip'
    }

    public pluginDownloadURL({manifest}: {manifest: manifest}) {
        return `${this.basePluginRepoURL()}${manifest.id}/${ReleaseTracker.getPluginLatestVersion({manifest})}/raw.json.tar.gz`
    }

    public getSelfLatestVersionManifestURL() {
        return this.baseSelfRepoURL() + 'version.json'
    }

    public getSelfLatestScriptURL() {
        return this.baseSelfRepoURL() + 'dist/acfun.evolved.bundle.min.user.js'
    }

}

export default new Variable()