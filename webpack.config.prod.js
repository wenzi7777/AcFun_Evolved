const path = require('path');
const webpack = require('webpack');
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
    mode: 'production',
    entry: {
        AcFun_Evolved: './src/index.tsx'
    },
    output: {
        filename: 'acfun.evolved.bundle.min.user.js',
        path: path.resolve(__dirname, 'dist')
    },
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                terserOptions: {
                    output: {
                        comments: /==\/?UserScript==|^[ ]?@|eslint-disable|spell-checker/i,
                    },
                },
                extractComments: false,
            }),
        ],
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.css', '.png', '.jpg', '.jpeg', '.svg'],
        alias: {
            'react': 'preact/compat',
            'react-dom': 'preact/compat'
        }
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
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'], // 使用 style-loader 和 css-loader 来处理 CSS 文件
            },
            {
                test: /\.(png|jpg|jpeg)$/,
                loader: 'url-loader',
                options: {
                    limit: 40000,
                },
            },
            {
                test: /\.svg$/,
                use: [
                    {
                        loader: '@svgr/webpack',
                        options: {
                            ref: true,
                            memo: true,
                            jsx: {
                                pragma: 'h',
                                pragmaFrag: 'Fragment'
                            }
                        }
                    },
                    {
                        loader: 'url-loader'
                    }
                ]
            },
        ]
    },
    plugins: [
        new webpack.optimize.LimitChunkCountPlugin({
            maxChunks: 1,
        }),
        new webpack.BannerPlugin({
            banner:
                `// ==UserScript==
// @name            AcFun Evolved
// @description     一个强大的AcFun脚本管理器
// @version         ${require('./package.json').version}
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
// @connect         ace.1205.moe
// @connect         github.com
// @connect         localhost
// @connect         *
// ==/UserScript==`,
            raw: true,
            entryOnly: true,
        })
    ]
};
