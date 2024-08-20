const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        AcFun_Evolved: './src/index.tsx'
    },
    output: {
        filename: 'acfun.evolved.bundle.dev.beta.user.js',
        path: path.resolve(__dirname, 'dist')
    },
    devtool: 'eval-source-map',
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
                use: ['style-loader', 'css-loader']
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
                use: ['@svgr/webpack', 'url-loader']
            },
        ]
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        compress: true,
        port: 2739,
        hot: true,
        devMiddleware: {
            writeToDisk: true,
        },
    },
};