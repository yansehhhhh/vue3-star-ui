import { App } from 'vue'
import '@/style/index.less'
import '@/assets/icon/iconfont.css'
import StarInput from "@/components/input/star-input.vue";
const star = {
    install: (app) => {
        app.component('star-input', StarInput)
    }
}
export default star