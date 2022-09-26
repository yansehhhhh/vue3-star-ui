<template>
  <div class="install">
    <h1>安装</h1>
    <h2>npm install vue3-star-ui</h2>
    <h2>yarn add vue3-star-ui</h2>
    <h1>引用</h1>
    <h2>入口文件main.js:</h2>
    <h2>import 'vue3-star-ui/dist/style.css'</h2>
    <h2>import starComponent from 'vue3-star-ui'</h2>
    <h2>const app = createApp(App)</h2>
    <h2>app.use(starComponent)</h2>
    <h2>app.mount('#app')</h2>
    <h1>开始愉快地使用组件吧</h1>
    <h2>
        &lt;star-input v-model="val"/&gt;
    </h2>
  </div>
</template>
  <script setup name='install'>
import { reactive, onMounted } from "vue";
const state = reactive({});
</script>
  <style scoped lang='less'>
@deep: ~":deep()";
.install {
  padding: 20px;
}
</style>