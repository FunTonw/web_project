import { createApp } from 'vue'

import '@/assets/scss/style.scss'

import App from './App.vue'
import router from './router'
import './assets/tailwind.css'

createApp(App).use(router).mount('#app')
