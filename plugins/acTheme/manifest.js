export const manifest = {
    name: 'AcTheme',
    description: '一款用于应用白天/黑夜主题的插件',
    version: '0.0.1',
    createdAt: '2024-02-16',
    updatedAt: '2024-02-16',
    iconName: 'pluginDefaultIcon',
    icon: '',
    copyrightCaption: '(c)2023-2024 Nick Hsu, Licensed under MPL-2.0',
    requestedAPIs: ['injectCss', 'removeCss', 'currentThemeClass'],
    matches: ['*'],
    author: 'Nick Hsu',
    id: '@wenzi7777/ac_theme',
    settings: [
        {
            'label': '主题',
            'type': 'select',
            'options': [
                {
                    'label': '跟随AcFun Evolved',
                    'value': 'hosted'
                },
                {
                    'label': '自动',
                    'value': 'auto'
                },
                {
                    'label': '白天',
                    'value': 'light'
                },
                {
                    'label': '黑夜',
                    'value': 'dark'
                }
            ]
        }
    ]
}