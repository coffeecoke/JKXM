#项目结构
 前端页面

---
## gulp.js
gulp中配置less编译和监控less文件变化自动编译
## 1，base-less
基础样式组件，入口文件是main.less ,最终打包dist/base-css文件夹中，
生成的main.css是每个页面必须要引入的
## 2，bootstrap
项目中使用bootstrap,但有些bootstrap样式我们需要自定义，直接修改less文件中对应组件来修改；
## 3，common.js
里面引入了项目中可能用到小插件

## 4，commonents
里面放入了第三方组件（例如奥森字体），或者是自己开发的组件
## 5，dist
打包生成的静态文件
## 6，pages
项目静态页面
## 7，plugins
项目中用到的插件

### package.json
gulp所依赖包信息

