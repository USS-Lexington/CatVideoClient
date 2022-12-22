import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus';
import axios from 'axios'
import VueAxios from 'vue-axios'
import 'element-plus/dist/index.css'

const app = createApp(App).use(VueAxios, axios);

app.use(router)

app.mount('#app')

app.provide('axios', app.config.globalProperties.axios) 