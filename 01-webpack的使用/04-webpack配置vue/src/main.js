import info from './js/info.js'
console.log(info.name);
console.log(info.age);
const {add,mul} =require('./js/mathUtils.js')
console.log(add(100, 22));
console.log(mul(100, 100));
// 依赖css文件
require ('./css/normal.css')
// 依赖less文件
require('./css/special.less')
// 向页面写入一些内容
// document.writeln("hello,zzz!")
// 使用vue开发
import Vue from 'vue'
// import App from './vue/app'
import App from './vue/App.vue'
new Vue({
    el:'#app',
    template:'<App/>',
    components:{
        App
    }
})
