import Preferences from "./Preferences";

class I18n {

    translations: any = {
        'english': {
            'preferences': 'Preferences',
            'general': 'General',
            'plugin-load-order': 'Plugin Load Order',
            'when-head-loaded': 'When head loaded',
            'when-body-loaded': 'When body loaded',
            'after-all': 'After all',
            'source': 'Source',
            'github': 'Github',
            'cloudflare': 'Cloudflare',
            'jsdelivr': 'JSDelivr',
            'update-runtime-when': 'Update Runtime When',
            'update-plugins-when': 'Update Plugins When',
            'startup': 'Startup',
            'daily': 'Daily',
            'weekly': 'Weekly',
            'monthly': 'Monthly',
            'update-runtime-to': 'Update Runtime To',
            'stable': 'Stable',
            'beta': 'Beta',
            'visual': 'Visual',
            'theme': 'Theme',
            'auto': 'Auto',
            'light': 'Light',
            'dark': 'Dark',
            'language': 'Language',
            'english': 'English',
            'japanese': 'Japanese',
            'simplified-chinese': 'Simplified Chinese',
            'traditional-chinese': 'Traditional Chinese (Taiwan)',
            'developer': 'Developer',
            'psv': 'Plugin Signature Verification',
            'full': 'Full',
            'half': 'Half',
            'none': 'None',
            'ipc': 'Inter-Plugin Communication',
            'enabled': 'Enabled',
            'disabled': 'Disabled',
            'log-level': 'Log Level',
            'error': 'Error',
            'warn': 'Warn',
            'info': 'Info',
            'debug': 'Debug',
            'ok': 'OK',
            'cancel': 'Cancel',
            'close': 'Close',
            'launchpad': 'Launchpad'
        },
        'simplified-chinese': {
            'preferences': '偏好设置',
            'general': '通用',
            'plugin-load-order': '插件加载顺序',
            'when-head-loaded': 'head 加载后',
            'when-body-loaded': 'body 加载后',
            'after-all': '全部加载后',
            'source': '来源',
            'github': 'Github',
            'cloudflare': 'Cloudflare',
            'jsdelivr': 'JSDelivr',
            'update-runtime-when': '运行时更新时间',
            'update-plugins-when': '插件更新时间',
            'startup': '启动时',
            'daily': '每天',
            'weekly': '每周',
            'monthly': '每月',
            'update-runtime-to': '运行时更新至',
            'stable': '稳定版',
            'beta': '测试版',
            'visual': '视觉',
            'theme': '主题',
            'auto': '自动',
            'light': '浅色',
            'dark': '深色',
            'language': '语言',
            'english': '英语',
            'japanese': '日语',
            'simplified-chinese': '简体中文',
            'traditional-chinese': '繁体中文（台湾）',
            'developer': '开发者',
            'psv': '插件签名验证 (PSV)',
            'full': '严格 (Full)',
            'half': '简化 (Half)',
            'none': '不验证 (None)',
            'ipc': '插件间通信 (IPC)',
            'enabled': '已启用',
            'disabled': '已禁用',
            'log-level': '日志级别',
            'error': '错误',
            'warn': '警告',
            'info': '信息',
            'debug': '调试',
            'ok': '好',
            'cancel': '取消'
        },
        'traditional-chinese': {
            'preferences': '偏好設置',
            'general': '一般',
            'plugin-load-order': '插件載入順序',
            'when-head-loaded': '在 head 載入后',
            'when-body-loaded': '在 body 載入后',
            'after-all': '全部載入後',
            'source': '來源',
            'github': 'Github',
            'cloudflare': 'Cloudflare',
            'jsdelivr': 'JSDelivr',
            'update-runtime-when': '更新運行時機制',
            'update-plugins-when': '更新插件時機制',
            'startup': '啟動時',
            'daily': '每日',
            'weekly': '每週',
            'monthly': '每月',
            'update-runtime-to': '更新運行時至',
            'stable': '穩定版',
            'beta': '測試版',
            'visual': '視覺',
            'theme': '主題',
            'auto': '自動',
            'light': '亮色',
            'dark': '暗色',
            'language': '語言',
            'english': '英語',
            'japanese': '日語',
            'simplified-chinese': '簡體中文',
            'traditional-chinese': '繁體中文（台灣）',
            'developer': '開發者',
            'psv': '插件簽名驗證',
            'full': '完整',
            'half': '半個',
            'none': '無',
            'ipc': '插件間通訊',
            'enabled': '已啟用',
            'disabled': '已停用',
            'log-level': '日誌級別',
            'error': '錯誤',
            'warn': '警告',
            'info': '信息',
            'debug': '調試',
            'ok': '確定',
            'cancel': '取消'
        },
        'japanese': {
            'preferences': '設定',
            'general': '一般',
            'plugin-load-order': 'プラグイン読み込み順序',
            'when-head-loaded': 'ヘッダー読み込み時',
            'when-body-loaded': 'ボディ読み込み時',
            'after-all': '全ての読み込み後',
            'source': 'ソース',
            'github': 'Github',
            'cloudflare': 'Cloudflare',
            'jsdelivr': 'JSDelivr',
            'update-runtime-when': 'ランタイム更新タイミング',
            'update-plugins-when': 'プラグイン更新タイミング',
            'startup': '起動時',
            'daily': '毎日',
            'weekly': '毎週',
            'monthly': '毎月',
            'update-runtime-to': 'ランタイム更新先',
            'stable': '安定版',
            'beta': 'ベータ版',
            'visual': 'ビジュアル',
            'theme': 'テーマ',
            'auto': '自動',
            'light': 'ライト',
            'dark': 'ダーク',
            'language': '言語',
            'english': '英語',
            'japanese': '日本語',
            'simplified-chinese': '簡体字中国語',
            'traditional-chinese': '繁体字中国語（台湾）',
            'developer': '開発者',
            'psv': 'プラグイン署名検証',
            'full': '完全',
            'half': '半分',
            'none': 'なし',
            'ipc': 'プラグイン間通信',
            'enabled': '有効',
            'disabled': '無効',
            'log-level': 'ログレベル',
            'error': 'エラー',
            'warn': '警告',
            'info': '情報',
            'debug': 'デバッグ',
            'ok': 'OK',
            'cancel': 'キャンセル'
        }
    }

    public t({key}: { key: string }): string {
        return this.translations[this.getCurrentLanguage()][key] || key
    }

    public reverseT({value}: { value: string }): string {
        return Object.keys(this.translations[this.getCurrentLanguage()]).find(key => this.translations[this.getCurrentLanguage()][key] === value) || value
    }

    private getCurrentLanguage(): string {
        if (Preferences.getPreference({category: 'visual', k: 'language'}) === 'auto') {
            return this.autoLanguage()
        } else {
            return Preferences.getPreference({category: 'visual', k: 'language'}) || 'english'
        }
    }

    private autoLanguage(): string {
        let language = navigator.language
        if (language.includes('zh')) {
            if (language.includes('Hans')) {
                return 'simplified-chinese'
            } else if (language.includes('Hant')) {
                return 'traditional-chinese'
            } else {
                return 'simplified-chinese'
            }
        } else if (language.includes('ja')) {
            return 'japanese'
        } else {
            return 'english'
        }
    }

    public getLocate(): string {
        return navigator.language
    }

}

export default new I18n();