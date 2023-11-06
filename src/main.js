import './assets/main.css';
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import Vue3Lottie from 'vue3-lottie';
import { createI18n, useI18n } from 'vue-i18n';
import { languages } from './I18n';
import { defaultLocale } from './I18n';
import App from './App.vue';
import router from './router';

const localStoragLang = localStorage.getItem("lang")

const messages = Object.assign(languages)
const i18n = createI18n({
   legacy: false,
   locale: localStoragLang || defaultLocale,
   fallbackLocale: 'en',
   messages,
})
const app = createApp(App);

app.use(i18n)

app.use(createPinia())
app.use(router)
app.use(Vue3Lottie)

app.mount('#app')
