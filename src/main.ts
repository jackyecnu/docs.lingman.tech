import { createApp } from 'vue'

// 引入 unocss
import '@unocss/reset/tailwind.css'
import 'uno.css'
import './style.scss'

// 引入element-plus

import 'element-plus/dist/index.css'

import App from './App.vue'

const app = createApp(App)

app.mount('#app')

