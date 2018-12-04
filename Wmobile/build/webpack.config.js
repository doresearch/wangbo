// 首先webpack.config.js有以下几个
'use strict'
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const path = require('path')
const glob = require('glob')
const config = require('./config')
let _entry = {}
let _plugin = []
let files = glob.sync('src/**/index.js')
// 这个是一个入口文件，然后根据入口文件生成
files.forEach((item, index) => {
  const filename = item.split('/')[1]
  _entry[filename] = './' + item
  _plugin[index] = new HtmlWebpackPlugin({
    filename: filename + '.html',
    template: item.replace('.js', '.html'),
    chunks: [filename]
  })
})
_plugin.push(new webpack.HotModuleReplacementPlugin())

function resolve(dir) {
  return path.join(__dirname, '..', dir)
}

console.log(
  `举例index文件夹：入口为index.js，模版为index.html，页面运行地址是：http://${config.host}:${
    config.port
  }/${config.publicPath}/index.html`
)

module.exports = {
  entry: _entry,
  output: {
    filename: '[name].js',
    path: __dirname + '/js'
  },
  module: {
    rules: [
      {
        test: /\.less/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'less-loader']
      },
      {
        test: /\.js/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('node_modules/webpack-dev-server/client')]
      }
    ]
  },
  plugins: _plugin,
  mode: 'development',
  devServer: {
    clientLogLevel: 'warning',
    hot: true,
    disableHostCheck: true,
    contentBase: false, // since we use CopyWebpackPlugin.
    compress: true,
    host: config.host,
    port: config.port,
    open: false,
    publicPath: config.publicPath,
    proxy: {
      '/user': {
        target: 'http://192.168.11.36:9010/',
        changeOrigin: true
      }
    },
    quiet: true
  }
}
