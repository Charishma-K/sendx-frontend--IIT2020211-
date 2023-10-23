


import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router.js'  // Importing the router
import './assets/css/app.css';  // If you decide to use input.css

const app = createApp(App)
app.use(router);  // Using the router
app.mount('#app');
