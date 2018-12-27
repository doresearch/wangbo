## Wmobile

### 基础说明

- 本项目是一个多入口，多出口的 webpack 项目

- 运行方式如下：

```
npm i
npm run dev // 运行在测试环境(本地开发)
npm run build // 打包到项目中
```

### 项目文件结构

- build
  防止配置文件
  TODO:js 需要设置忽略 node_modules 库中文件

- node_modules
  不需要管理的包安装文件
  .bin 下面是可以直接运行的文件

- src
  项目实际写的文件
  [filename]
  必须要： index.html index.js，打包后文件目录

- dist
  项目打包完成的位置
  [filename]
  打包完成后包含: index.html index.js

* 其中 css 如果想要单独分离出来，需要用 url-loader 和 file-loader 处理，图片也是

- .babelrc
  babel-loader 的配置文件，需要了解[更多](https://www.babeljs.cn/docs/usage/babelrc/)

- postcss.config.js
  postcss-loader 的配置文件，需要了解[更多](https://www.webpackjs.com/loaders/postcss-loader/#syntaxes)

- index.js
  这个包的main.js

### 方案

  目前使用css的loading的办法，采用css提交cdn的办法，配合rem的js提交cdn来适应
  - css
    http://rc1-10035116.file.myqcloud.com/fs/yummy/common/main.css

  - remJS
    http://rc1-10035116.file.myqcloud.com/fs/yummy/common/fsrem.js
    //接手rem数值
    function setHtmlRem(a, b, bool) {
      a = (typeof a).toLowerCase() == 'number' ? a : 960
      b = (typeof b).toLowerCase() == 'number' ? b : 20
      var win_width = document.documentElement.clientWidth
      // if (win_width > 414) win_width = 414
      var c = (win_width * b) / a,
        onOff = true

      document.getElementsByTagName('html')[0].style.fontSize = c + 'px'

      function resizeAuto() {
        if (onOff) {
          onOff = false
          setTimeout(function() {
            c = (win_width * b) / a
            document.getElementsByTagName('html')[0].style.fontSize = c + 'px'
            onOff = true
          }, 300)
        }
      }

      if (bool) {
        window.addEventListener('resize', resizeAuto)
      }
    }

    setHtmlRem(375, 16, false)
    使用


### typescript

如果使用了typescript还需要使用babel么？

typescript