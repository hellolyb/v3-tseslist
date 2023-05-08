import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 初始化样式
import 'normalize.css'
import '@/assets/css/index.css'
// import { subassembly } from './utils/index'
// .use(subassembly)
// icon图标挂载
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.use(store).use(router).mount('#app')
