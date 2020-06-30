<template>
    <div>
        <h2 class="title">{{message}}</h2>
        <button @click='btnClick'>这是一个按钮</button>
        <h2>{{name}}</h2>
        <Cpn/>
    </div>
</template>

<script>
    import Cpn from './Cpn.vue'
    export default {
        name: "App",
        components: {Cpn},
        component:{
            Cpn
        },
        data() {
            return {
                message: "hello webpack and vue",
                name: '我在等你'
            }
        },
        methods: {
            btnClick(){
                console.log("按钮被点击了")
            }
        },
    }
</script>

<style scoped>
    .title{
        color: brown;
    }
</style>
