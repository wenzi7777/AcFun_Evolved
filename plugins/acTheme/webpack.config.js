const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: "production",
    entry: './index.js', // 插件的入口文件
    output: {
        path: path.resolve(__dirname, 'dist'), // 输出目录
        filename: 'entry.js', // 输出文件名
        library: 'plugin', // 全局变量名，插件的函数将绑定在它上面
        libraryExport: 'default',
        libraryTarget: 'umd', // 输出格式
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader'], // 使用MiniCssExtractPlugin提取CSS
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'entry.js', // 将CSS注入到同一个entry.js文件中
        }),
    ],
};
