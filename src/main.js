

import { createApp } from 'vue'
import { plugin, defaultConfig } from '@formkit/vue'
import config from './formkit.config'



import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'


import './assets/main.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(plugin, defaultConfig(config))
app.mount('#app')
