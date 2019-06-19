### 安装

npm i babel-core babel-preset-es2015 babel-preset-latest

### 配置

.babelrc


{
  "preset":["es2015","latest"],
  "plugin":[]
}


### babel-preset-env

现在一般用env比较多，可以配置编译后的es版本兼容到哪一个浏览器

### 在webpack中使用

babel-loader

### rollup

npm i rollup rollup-plugin-node-resolve rollup-plugin-babel babel-plugin-exteral-helpers
bebel-preset-latest -s -d