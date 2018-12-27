'use strict'
const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

function resolve(dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  entry: path.resolve(__dirname, 'src/class.ts'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/index.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  mode: 'development',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/index.html',
    })
  ],
  devServer: {
    clientLogLevel: 'warning',
    hot: true,
    disableHostCheck: true,
    contentBase: false, // since we use CopyWebpackPlugin.
    compress: true,
    host: 'localhost',
    port: '8001',
    open: true,
    publicPath: '/',
    proxy: {
      '/user': {
        target: 'http://192.168.11.36:9010/',
        changeOrigin: true
      }
    },
    quiet: true
  }
}
