<template>
  <router-view :key="route.fullPath" />
  <div class="copy" @click="openCopy">皖ICP备2022009994号-1</div>
</template>
<script setup name=''>
import { useRoute } from "vue-router";
const route = useRoute();
const openCopy = () => {
  window.open('https://beian.miit.gov.cn')
}
</script>
<style scoped lang='less'>
@deep: ~":deep()";
.copy {
  position: fixed;
  bottom: 10px;
  left: 50%;
  font-size: 14px;
  color: #333;
  cursor: pointer;
}
</style>