const path=require('path')
const htmlWbepackPlugin = require('html-webpack-plugin')
//获取uglifyjs-webpack-plugin对象
const uglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin')
module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        // publicPath: 'dist/'
    },
    module: {
        rules: [
            {
                test:/\.css$/,//正则表达式匹配css文件
                //css-loader只负责css文件加载，不负责解析，要解析需要使用style-loader
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader'
                    }
                ]//使用loader
            },
            {
                test: /\.less$/,//正则表达式匹配css文件
                //css-loader只负责css文件加载，不负责解析，要解析需要使用style-loader
                use: [{
                    loader: 'style-loader'
                }, {
                    loader: 'css-loader'
                }, {
                    loader: 'less-loader'//less文件loader
                }]//使用loader
            },
            {
                test: /\.(png|jpg|gif)$/,//匹配png/jpg/gif格式图片
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 45056,//图片小于8KB时候将图片转成base64字符串，大于8KB需要使用file-loader
                            name: 'img/[name].[hash:8].[ext]'//img表示文件父目录，[name]表示文件名,[hash:8]表示将hash截取8位[ext]表示后缀
                        }
                    }
                ]
            },
            {
                test: /\.js$/,
                //排除node模块的js和bower的js
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        //如果要使用@babel/preset-env这里需要在根目录新建一个babel的文件
                        // presets: ['@babel/preset-env']
                        //这里直接使用指定
                        presets: ['es2015']
                    }
                }
            },
            {
                test:/.vue$/,
                use:['vue-loader']
            }

        ]
    },
    resolve:{
        alias:{
            'vue$':'vue/dist/vue.esm.js'
        }
    },
    plugins:[
        new htmlWbepackPlugin({
            template: 'index.html'
        }),
        new uglifyjsWebpackPlugin()
    ],
    devServer:{
        contentBase: './dist',//服务的文件夹
        port: 4000,
        inline: true//是否实时刷新
    }
}
