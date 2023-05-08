import { createStore } from 'vuex'
// 登录业务
import loginModule from './login/loginModules'
export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  // 业务拆分
  modules: {
    loginModule
  }
})
