const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');

module.exports = {
    entry: path.resolve(__dirname, './index.js'),
    mode: 'development',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, './dist'),
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            "@babel/preset-env", ["@babel/preset-react", { "runtime": "automatic" }]
                        ]
                    },
                },
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './webpack/index.html'),
        }),
        new MiniCssExtractPlugin(),  // 플러그인 추가
        new webpack.HotModuleReplacementPlugin(),
    ],
    devServer: {
        allowedHosts: 'auto',
        hot: true
    },
};
