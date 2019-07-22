#[演示webpack作用](https://www.webpackjs.com/guides/getting-started/)
#主要命令执行记录
##初始化项目并配置
先在webStorm下执行命令创建项目、初始化并添加依赖包
```
mkdir webpack-demo && cd webpack-demo
npm init -y
npm install webpack webpack-cli --save-dev
```
给本项目添加库
```npm install --save lodash```
在安装一个要打包到生产环境的安装包时，你应该使用 npm install --save，如果你在安装一个用于开发环境的安装包（例如，linter, 测试库等），你应该使用 npm install --save-dev。请在 npm 文档 中查找更多信息。

