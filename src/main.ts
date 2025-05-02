import './assets/main.css'

import '@fontsource/roboto-condensed'
import '@fontsource/rem' // Defaults to weight 400
import '@fontsource/poppins' // Defaults to weight 400
import '@fontsource/poppins/400.css'
import '@fontsource/inter' // Defaults to weight 400

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
