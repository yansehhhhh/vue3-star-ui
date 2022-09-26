<template>
    <div class=''>
        <h1>可清空的</h1>
        <h2>添加clearable属性</h2>
        <star-input type="text" clearable v-model="input1"/>
    </div>
    </template>
    <script setup name=''>
    import StarInput from "@/components/input/star-input.vue";
    import { ref } from 'vue'
    const input1 = ref('clearable')
    </script>
    <style scoped lang='less'>
    @deep: ~':deep()';
    </style>