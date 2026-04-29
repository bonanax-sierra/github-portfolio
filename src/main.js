import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

if (localStorage.theme === 'dark') {
  document.documentElement.classList.add('dark')
} else {
  document.documentElement.classList.remove('dark')
}

createApp(App).mount('#app')