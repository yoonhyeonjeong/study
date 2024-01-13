const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');

module.exports = {
  entry: './index.js',
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
              "@babel/preset-env", ["@babel/preset-react", {"runtime": "automatic"}]
            ]
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './webpack/index.html',  // HTML 템플릿 경로 지정
    }),
    new MiniCssExtractPlugin(),  // 플러그인 추가
    new webpack.HotModuleReplacementPlugin(),
  ],
  devServer: {
    allowedHosts: 'auto',
    hot: true,
  },
};