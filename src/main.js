import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Vue3Lottie from 'vue3-lottie'

import App from './App.vue'
import router from './router'

const app = createApp(App)
createApp(App).use(Vue3Lottie).mount('#app')

app.use(createPinia())
app.use(router)

app.mount('#app')
