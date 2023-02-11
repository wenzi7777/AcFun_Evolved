const path = require('path')
const WebpackUserscript = require('webpack-userscript')

module.exports = {
    mode: 'production',
    entry: {
        AcFunEvolved: './src/core/AcFunEvolved.ts'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: `acfun-evolved.min.user.js`
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    devtool: 'source-map',
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
                version: `[version]`
            }
        })
    ]
}