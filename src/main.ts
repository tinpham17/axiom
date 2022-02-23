import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

import 'normalize.css'
import '@/assets/styles/index.scss'

createApp(App).use(router).use(createPinia()).mount('#app')
