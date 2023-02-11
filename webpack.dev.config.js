const path = require('path')
const WebpackUserscript = require('webpack-userscript')

module.exports = {
    mode: 'development',
    entry: {
        AcFunEvolved: './src/core/AcFunEvolved.ts'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: `acfun-evolved.dev.user.js`
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    devtool: 'eval-source-map',
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist')
        },
        port: 2739
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            cacheDirectory: true,
                            presets: ['@babel/preset-env'],
                        },
                    },
                ],
            },
            {
                test: /\.ts$/,
                loader: 'ts-loader'
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'url-loader',
                options: {
                    limit: 40000,
                },
            },
            {
                test: /\.svg$/,
                loader: 'svg-inline-loader',
            },
            {
                test: /\.ejs$/,
                use: [
                    {
                        loader: 'ejs-loader',
                        options: {
                            esModule: false,
                            variable: 'data'
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new WebpackUserscript({
            headers: {
                'name': 'AcFun Evolved',
                'description': '一个强大的AcFun增强脚本！',
                // 'updateURL': '',
                // 'downloadURL': '',
                'version': `[version]-build.[buildNo]`,
                'author': 'Nick Hsu',
                'copyright': '(c) 2023 NickHsu[nickhsu@1205.moe], made with LOVE!',
                'license': 'MPL-2.0',
                'match': `*://*.acfun.cn/*`,
                'run-at': 'document-start',
                'grant': 'unsafeWindow',
                'grant': 'GM_getValue',
                'grant': 'GM_setValue',
                'grant': 'GM_deleteValue',
                'grant': 'GM_info',
                'grant': 'GM_xmlhttpRequest',
                'connect': 'raw.githubusercontent.com',
                'connect': 'github.com',
                'connect': 'cn.bing.com',
                'connect': 'www.bing.com',
                'connect': 'translate.google.cn',
                'connect': 'translate.google.com',
                'connect': 'localhost',
                'connect': '*',
                'icon': 'https://raw.gith',
                'icon64': 'https://raw.githubusercontent.com/the1812/Bilibili-Evolved/preview/images/logo.png',
            },
            proxyScript: {
                baseUrl: 'http://127.0.0.1:2739',
                filename: 'acfun-evolved.dev.proxy.user.js',
                enable: true
            }
        })
    ]
}