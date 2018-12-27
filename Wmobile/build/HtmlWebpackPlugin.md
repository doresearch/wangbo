### html-webpack-plugin配置项

    this.options = _.extend({
      template: path.join(__dirname, 'default_index.ejs'),
      filename: 'index.html',
      hash: false,
      inject: true,
      compile: true,
      favicon: false,
      minify: false,
      cache: true,
      showErrors: true,
      chunks: 'all',
      excludeChunks: [],
      title: 'Webpack App',
      xhtml: false
    }, options);

##### title

生成的html文档的标题，配置该项，它并不会替换指定模板文件中的title元素的内容，除非html模板文件中使用了模板引擎语法来获取该配置项值，如下ejs模板语法形式：

    <title>{%= o.htmlWebpackPlugin.options.title %}</title>

##### filename

输出文件的文件名称，默认为index.html，不配置就是该文件名；此外，还可以为输出文件指定目录位置（例如'html/index.html'）

    

#### template

本地模板文件的位置，支持加载器(如handlebars、ejs、undersore、html等)，如比如 

    handlebars!src/index.hbs

**关于template补充几点：**

  1、template配置项在html文件使用file-loader时，其所指定的位置找不到，导致生成的html文件内容不是期望的内容。

  2、为template指定的模板文件没有指定任何loader的话，默认使用ejs-loader。如template: './index.html'，若没有为.html指定任何loader就使用ejs-loader


####  templateContent

string|function，可以指定模板的内容，不能与template共存。配置值为function时，可以直接返回html字符串，也可以异步调用返回html字符串。

#### inject

向template或者templateContent中注入所有静态资源，不同的配置值注入的位置不经相同。