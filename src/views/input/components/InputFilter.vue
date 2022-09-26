<template>
    <div class=''>
        <h1>过滤</h1>
        <h2>int:整数</h2>
        <star-input type="text" v-model="input1" filter="int"/>
        <h2>symbol:特殊符号</h2>
        <star-input type="text" v-model="input2" filter="symbol"/>
    </div>
    </template>
    <script setup name=''>
    import StarInput from "@/components/input/star-input.vue";
    import { ref } from 'vue'
    const input1 = ref('')
    const input2 = ref('')
    </script>
    <style scoped lang='less'>
    @deep: ~':deep()';
    </style>