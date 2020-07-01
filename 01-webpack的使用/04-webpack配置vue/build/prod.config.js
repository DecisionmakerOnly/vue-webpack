const uglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin')
//导入webpack-merge对象
const webpackMerge=require("webpack-merge")
//导入base.config.js
const baseConfig=require("./base.config")
module.exports = {
    plugins:[
        new uglifyjsWebpackPlugin()
    ],
}
