module.exports = {
  pages: {
    // index: {
    //   // page 的入口
    //   entry: 'src/main.ts',
    //   // 模板来源
    //   template: 'public/index.html',
    //   // 在 dist/index.html 的输出
    //   filename: 'index.html',
    //   // 当使用 title 选项时，
    //   // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
    //   title: 'Index Page',
    //   // 在这个页面中包含的块，默认情况下会包含
    //   // 提取出来的通用 chunk 和 vendor chunk。
    //   chunks: ['chunk-vendors', 'chunk-common', 'index']
    // },
    // 当使用只有入口的字符串格式时，
    // 模板会被推导为 `public/subpage.html`
    // 并且如果找不到的话，就回退到 `public/index.html`。
    // 输出文件名会被推导为 `subpage.html`。
    // 厉害了😁
    app1: 'src/main.ts',
    App2: 'src/main2.ts'
  },
  baseUrl: process.env.NODE_ENV === 'production' ? '/production-sub-path/' : '/',
  lintOnSave: process.env.NODE_ENV !== 'production',
  // 使用 chainWebpack 调整内联文件的大小限制
  chainWebpack: config => {
    config.module
      .rule('images')
      .use('url-loader')
      .loader('url-loader')
      .tap(options => Object.assign(options, { limit: 10240 }))
  },
  configureWebpack: config => {
    console.log('【configureWebpack】', process.env.NODE_ENV)
  }
}
