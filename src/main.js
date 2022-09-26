import { createApp } from 'vue'
import './style/index.less'
import './assets/icon/iconfont.css'
import App from './App.vue'
import router from "./router";


const app = createApp(App);
app.use(router);
app.mount('#app')