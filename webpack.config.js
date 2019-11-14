const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin"); // 导入在内存中自动生成 index 页面的插件
// 创建一个插件实例
const htmlPlugin = new HtmlWebPackPlugin({
    template:path.join(__dirname,'./src/index.html'), // 源文件
    fileanme:"index.html" // 生成的内存中首页的名称
})
// 向外暴露一个打包的配置对象 ; 因为 webpack 是基于 node 构建的; 所以 webpack 支持所有 node api 和 语法
module.exports = {
    // mode:"development", // development production
    mode:"production", // development production
    // 在 webpack 4.x 中,有一个很大的特性, 就是 约定大于配置 , 默认的打包入口路径是 src->index.js

    plugins:[
        htmlPlugin
    ]
}