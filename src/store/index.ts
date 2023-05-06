import { createStore } from 'vuex'
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
