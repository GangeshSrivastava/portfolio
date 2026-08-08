import { createApp } from 'vue'
import App from './App.vue'
import './assets/styles/main.css'

// Apply saved theme before mount to prevent flash
const saved = localStorage.getItem('portfolio-theme')
if (saved === 'light' || saved === 'dark') {
  document.documentElement.setAttribute('data-theme', saved)
}

createApp(App).mount('#app')
