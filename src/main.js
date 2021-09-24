import { createApp } from 'vue'
import HighchartsVue from 'highcharts-vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from './router'
import App from './App.vue'

createApp(App)
    // ElementPlus UI library
    .use(ElementPlus)
    // HighchartsVue vue
    .use(HighchartsVue)
    .use(router)
    // Mount the app
    .mount('#app')
