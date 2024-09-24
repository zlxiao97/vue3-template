import { createApp } from 'vue'
import App from './App.vue'
import router from './router'  // 引入路由

createApp(App)
  .use(router)  // 使用路由
  .mount('#app')
