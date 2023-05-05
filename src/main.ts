import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import axios from 'axios'
// import { subassembly } from './utils/index'
// .use(subassembly)
// axios.defaults.baseURL = process.env.VUE_APP_YYY_URL
createApp(App).use(store).use(router).mount('#app')
// axios.post('/member/list/search/1/20').then((res) => {
//   console.log(res)
// })
