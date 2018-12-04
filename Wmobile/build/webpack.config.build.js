'use strict'
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const path = require('path')
const process = require('process')
const glob = require('glob')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

let _entry = {}
let _plugin = []

let files = glob.sync('src/**/index.js')

files.forEach((item, index) => {
  const filename = item.split('/')[1]
  _entry[filename] = path.resolve(__dirname, './' + item)
  _plugin[index] = new HtmlWebpackPlugin({
    filename: __dirname + '/dist/' + filename + '/' + 'index.html',
    template: item.replace('.js', '.html'),
    chunks: [filename]
  })
})
_plugin.push(new CleanWebpackPlugin(['dist']))

function resolve(dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  entry: _entry,
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name]/index.[contenthash].js',
    publicPath: '/'
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
        test: /\.less/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'less-loader']
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
  devtool: 'source-map'
}
