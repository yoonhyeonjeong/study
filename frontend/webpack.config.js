const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')


module.exports = {
  entry: './index.js',
  mode: 'development',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, './dist'),
  }
}
