<template>
<div class=''>
    <h1>类型</h1>
    <h2>基础类型</h2>
    <star-input type="text" v-model="input1"/>
    <h2>数字类型</h2>
    <star-input type="number" v-model="input2" />
</div>
</template>
<script setup name=''>
import StarInput from "@/components/input/star-input.vue";
import { ref } from 'vue'
const input1 = ref('')
const input2 = ref('2')
</script>
<style scoped lang='less'>
@deep: ~':deep()';
</style>