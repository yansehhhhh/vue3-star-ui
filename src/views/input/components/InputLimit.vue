<template>
    <div class=''>
        <h1>最值限制，type为number生效</h1>
        <h2>最小值min、最大值max</h2>
        <star-input type="number" v-model="input1" :min="1" :max="10"/>
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