const path = require('path')
const WebpackUserscript = require('webpack-userscript')
const webpack = require('webpack')
const {GitRevisionPlugin} = require('git-revision-webpack-plugin');
const gitRevisionPlugin = new GitRevisionPlugin();
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin")

module.exports = {
    mode: 'development',
    entry: {
        core: './src/core/core.ts'
    },
    output: {
        publicPath: path.resolve(__dirname, 'dist'),
        path: path.resolve(__dirname, 'dist'),
        filename: `acfun-evolved.dev.user.js`
    },
    watchOptions: {
        ignored: /node_modules/,
    },
    performance: {
        hints: false,
    },
    resolve: {
        extensions: ['.ts', '.js'],
        fallback: {
            fs: false
        }
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
                // 'updateURL': 'https://github.com/wenzi7777/AcFun-Evolved/raw/main/dist/acfun-evolved.min.user.js',
                // 'downloadURL': 'https://github.com/wenzi7777/AcFun-Evolved/raw/main/dist/acfun-evolved.min.user.js',
                'version': `[version]-build.[buildNo]`,
                'author': 'Nick Hsu',
                'copyright': '(c) 2023 NickHsu[nickhsu@1205.moe], made with LOVE!',
                'license': 'MPL-2.0',
                'match': `*://*.acfun.cn/*`,
                'run-at': 'document-start',
                'grant': ['unsafeWindow', 'GM_getValue', 'GM_setValue', 'GM_deleteValue', 'GM_info', 'GM_xmlhttpRequest'],
                'connect': ['raw.githubusercontent.com', 'github.com', 'localhost', '*'],
                'icon': 'https://raw.githubusercontent.com/wenzi7777/AcFun-Evolved/main/src/assets/favicon.png',
                'icon64': 'https://raw.githubusercontent.com/wenzi7777/AcFun-Evolved/main/src/assets/favicon.png',
            },
            proxyScript: {
                baseUrl: 'http://127.0.0.1:2739',
                filename: 'acfun-evolved.dev.proxy.user.js',
                enable: true
            }
        }),
        new webpack.DefinePlugin({
            ACFUN_EVOLVED_VERSION: `"${require('./package.json').version}"`,
            GIT_HASH: JSON.stringify(gitRevisionPlugin.version()),
        }),
        new NodePolyfillPlugin()
    ]
}