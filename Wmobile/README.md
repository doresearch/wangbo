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

