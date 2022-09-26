<template>
    <div class=''>
        <h1>文本域</h1>
        <h2>添加type:textarea属性</h2>
        <star-input type="textarea" v-model="input1" size="small"/>
        <h2>autoSize:{min:4,max:8}最小/大行数高度</h2>
        <br/>
        <star-input type="textarea" v-model="input2" :autoSize="{min:4,max:8}"/>
        <br/>
        <star-input type="textarea" v-model="input3" size="large"/>
    </div>
    </template>
    <script setup name=''>
    import StarInput from "@/components/input/star-input.vue";
    import { ref } from 'vue'
    const input1 = ref('textarea')
    const input2 = ref('textarea')
    const input3 = ref('textarea')
    </script>
    <style scoped lang='less'>
    @deep: ~':deep()';
    </style>