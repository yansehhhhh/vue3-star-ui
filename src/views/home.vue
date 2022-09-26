<template>
  <div class="home">
    <h1>vue3-star-ui</h1>
    <div class="main">
      <ul class="nav">
        <li class="nav-item" @click="handleNav('/install')">安装</li>
        <li class="nav-item" @click="handleNav('/input')">input</li>
      </ul>
      <div class="content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script setup name='home'>
import { reactive, onMounted } from "vue";
import { useRouter } from "vue-router";
const router = useRouter()
const state = reactive({});
const handleNav = path => {
    router.push(path)
}
</script>
<style scoped lang='less'>
@deep: ~":deep()";
h1 {
  text-align: center;
}
.home {
  padding: 20px;
}
.main{
    display: flex;
}
.nav {
    width: 200px;
    .nav-item{
        cursor: pointer;
        padding:10px 0;
    }
}
</style>