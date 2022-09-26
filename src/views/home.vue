<template>
<div class='home'>
    <h1>vue3-star-ui</h1>
    <router-view></router-view>
</div>
</template>
<script setup name='home'>
import { reactive , onMounted } from 'vue'
const state = reactive({})
</script>
<style scoped lang='less'>
@deep: ~':deep()';
h1{
    text-align: center;
}
</style>