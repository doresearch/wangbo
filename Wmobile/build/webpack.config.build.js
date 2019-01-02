'use strict'
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const path = require('path')
const process = require('process')
const glob = require('glob')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HappyPack = require('happypack')
// const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const MinifyPlugin = require('babel-minify-webpack-plugin')

new HappyPack({
  id: 'css',
  loaders: ['style-loader', 'css-loader'],
  threads: 4, //代表开启几个子进程去处理这一类型的文件
  verbose: true //是否允许输出日子
})
let _entry = {}
let _plugin = []

let files = glob.sync('src/**/index.js')

files.forEach((item, index) => {
  const filename = item.split('/')[1]
  _entry[filename] = './' + item
  _plugin[index] = new HtmlWebpackPlugin({
    filename: filename + '.html',
    template: item.replace('.js', '.html'),
    chunks: [filename]
  })
})
_plugin.push(
  new MiniCssExtractPlugin({
    filename: '[name]/index.css',
    chunkFilename: '[id].css'
  })
)
_plugin.push(new MinifyPlugin({
  "deadcode": {
    "keepFnName": true
  }
}))


function resolve(dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  entry: _entry,
  output: {
    path: path.resolve(__dirname, '../dist_temp'),
    filename: '[name]/index.[contenthash].js',
    publicPath: '../'
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        loader: 'html-loader',
        query: {
          minimize: true
        }
      },
      {
        test: /\.less|\.css/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'less-loader']
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  plugins: _plugin,
  mode: 'production',
  // devtool: 'source-map'
}
