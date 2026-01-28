import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createI18n } from 'vue-i18n'
import App from './App.vue'
import router from './router'
import './style.css'
import en from './locales/en.json'
import zh from './locales/zh.json'

const app = createApp(App)

const i18n = createI18n({
  legacy: false, // use Composition API
  locale: 'zh', // default locale
  fallbackLocale: 'en',
  messages: {
    en,
    zh
  }
})

app.use(createPinia())
app.use(router)
app.use(i18n)

app.mount('#app')