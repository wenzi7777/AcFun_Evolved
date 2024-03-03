const webpack = require("webpack")
const {GitRevisionPlugin} = require('git-revision-webpack-plugin')
const TerserPlugin = require("terser-webpack-plugin");
const gitRevisionPlugin = new GitRevisionPlugin()

module.exports = {
    mode: 'production',
    entry: {
        AcFun_Evolved: './src/core/core.js'
    },
    output: {
        filename: `acfun.evolved.bundle.min.user.js`,
        publicPath: ''
    },
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                extractComments: false
            }),
        ],
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
                test: /\.css$/,
                type: 'asset/source',
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'url-loader',
                options: {
                    limit: 39277,
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
            },
        ],
    },
    plugins: [
        new webpack.DefinePlugin({
            ACFUN_EVOLVED_VERSION: `"${require('./package.json').version}"`,
            GIT_HASH: JSON.stringify(gitRevisionPlugin.version()),
        }),
        new webpack.optimize.LimitChunkCountPlugin({
            maxChunks: 1,
        }),
        new webpack.BannerPlugin({
            banner:
`// ==UserScript==
// @name            AcFun Evolved
// @description     一个强大的AcFun脚本管理器
// @version         ${require('./package.json').version + JSON.stringify(gitRevisionPlugin.version())}
// @author          Nick Hsu
// @copyright       2024, Nick Hsu(wenzi7777@1205.moe)
// @license         MPL 2.0
// @match           *://*.acfun.cn/*
// @run-at          document-start
// @grant           unsafeWindow
// @grant           GM_getValue
// @grant           GM_setValue
// @grant           GM_deleteValue
// @grant           GM_listValues
// @grant           GM_info
// @grant           GM_xmlhttpRequest
// @connect         raw.githubusercontent.com
// @connect         wenzi7777.github.io
// @connect         cdn.jsdelivr.net
// @connect         ace-plugins.1205.moe
// @connect         github.com
// @connect         localhost
// @connect         *
// @require         https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js
// ==/UserScript==`,
            raw: true,
            entryOnly: true,
        })
    ]
};