<template>
    <div class=''>
        <h1>password</h1>
        <h2>添加password属性，您将会得到一个可切换密码显示隐藏的眼睛图标</h2>
        <star-input type="password" v-model="input1"/>
        <br/>
        <star-input type="password" v-model="input1" password/>
    </div>
    </template>
    <script setup name=''>
    import StarInput from "@/components/input/star-input.vue";
    import { ref } from 'vue'
    const input1 = ref('')
    </script>
    <style scoped lang='less'>
    @deep: ~':deep()';
    </style>