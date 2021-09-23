import { createApp } from 'vue'
import HighchartsVue from 'highcharts-vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from './router'
import App from './App.vue'

createApp(App)
    .use(ElementPlus)
    .use(HighchartsVue)
    .use(router)
    .mount('#app')
