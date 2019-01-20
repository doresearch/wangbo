### HTML 和静态资源

#### index 文件

html-webpack-plugin 处理。在构建回城中，资源链接会被自动注入。另外，VUE CLI 也会自动注入 resource hint（preload/prefech）、manifest 和图标链接（当用到 PWA 插件的时候）以及构建过程中处理的 JS 和 CSS 文件的资源链接

#### 插值

（暂时没有试过）

#### Preload

  <link rel="preload">是一种resource hint，用来指定页面加载后很快会被用到的资源，所以在页面加载的过程中，我们希望在浏览器开始主体渲染之前尽早preload

默认情况下，一个 Vue CLI 应用汇为所有初始化渲染需要的文件自动生成 preload 提示。

这些提示会被 @vue/preload-webpack-plugin 注入，并且可以通过 chainWebpack 的 config.plugin('preload')进行修改和删除。

#### Prefetch

  <link rel="prefetch">是一种resourc hint, 用来告诉浏览器在页面加载完成后，利用空闲时间提前获取用户未来可能访问的内容。

默认情况下，一个 VUE CLI 应用会为所有作为 async chunk 生成的 JavaScript 文件(通过动态 import()按需 code splitting 的产物) 自动生成 prefetch 提示。

这些提示会被 @vue/preload-webpack-plugin 注入，并且可以通过 chainWebpack 的 config.plugin('prefetch')进行修改和删除。

      // vue.config.js
      module.exports = {
        chainWebpack: config => {
          // 移除 prefetch 插件
          config.plugin.delete('prefetch')
          // 或者
          // 修改它的选项
          config.plugin('prefetch').tap(options=>{
            options[0].fileBlacklist = options[0].fileBlacklist || []
            options[0].fileBlacklist.push(/myasyncRoute(.)+?\.js$/)
            return options
          })
        }
      }

当 prefetch 插件被禁用时，你可以通过 webpack 的内联注释手动选定要提前获取的代码区块：

      import(/* webpackPrefetch: true */ './someAsyncComponent.vue')

webpack 的运行时会在父级区块被加载之后注入 prefetch 链接

> Prefetch 链接将会消耗带宽。如果你的应用很大且有很多 async chunk，而用户主要使用的是对带宽较敏感的移动端，那么你可能需要关掉 prefetch 链接并手动选择要提前获取的代码区块。



#### 不生成 index

当基于已有的后端使用 VUE CLI 时，你可能不需要生成 index.html, 这样生成的资源可以用于一个服务端渲染的页面。这时可以向 vue.config.js 加入下列代码：

      // vue.config.js
      module.exports = {
        filenameHashing:false.
        chainWebpack: config => {
          config.plugins.delete('html')
          config.plugins.delete('preload')
          config.plugins.delete('prefetch')
        }
      }

然而这样做并不是很推荐，因为：

- 硬编码的文件名不利于实现高效率的缓存控制。
- 硬编码的文件名也无法很好的进行 code-splitting (代码分段)，因为无法用变化的文件名生成额外的 JavaScript 文件。
- 硬编码的文件名无法在现代模式下工作。

你应该考虑换用 indexPath 选项将生成的 HTML 用作一个服务端框架的视图模板。

### 构建一个多页应用

不是每个应用都需要是一个单页应用。Vue CLI 支持使用 vue.config.js 中的 pages 选项构建一个多页面的应用。构建好的应用将会在不同的入口之间高效共享通用的 chunk 以获得最佳的加载性能。

      // vue.config.js
      module.exports = {
        pages: {
          index: {
            // page 的入口
            entry: 'src/index/main.js',
            // 模板来源
            template: 'public/index.html',
            // 在 dist/index.html 的输出
            filename: 'index.html',
            // 当使用 title 选项时，
            // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
            title: 'Index Page',
            // 在这个页面中包含的块，默认情况下会包含
            // 提取出来的通用 chunk 和 vendor chunk。
            chunks: ['chunk-vendors', 'chunk-common', 'index']
          },
          // 当使用只有入口的字符串格式时，
          // 模板会被推导为 `public/subpage.html`
          // 并且如果找不到的话，就回退到 `public/index.html`。
          // 输出文件名会被推导为 `subpage.html`。
          subpage: 'src/subpage/main.js'
        }
      }

> 提示
> 当在 multi-page 模式下构建时，webpack 配置会包含不一样的插件 (这时会存在多个 html-webpack-plugin 和 preload-webpack-plugin 的实例)。如果你试图修改这些插件的选项，请确认运行 vue inspect。


### public文件夹 
  
  任何放置在public文件夹的静态资源都会被简单的复制，而不经过webpack。你需要通过绝对路径来引用他们。

> 注意我们推荐将资源作为你的模块依赖图的一部分导入，这样它们会通过 webpack 的处理并获得如下好处：

> * 脚本和样式表会被压缩且打包在一起，从而避免额外的网络请求。
> * 文件丢失会直接在编译时报错，而不是到了用户端才产生 404 错误。
> * 最终生成的文件名包含了内容哈希，因此你不必担心浏览器会缓存它们的老版本。
