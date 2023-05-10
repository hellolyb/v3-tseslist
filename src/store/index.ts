import { createStore } from 'vuex'
// 登录业务
import loginModule from './login/loginModules'
const store = createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  // 业务拆分
  modules: {
    loginModule
  }
})
export default store
export function gituserdata() {
  store.dispatch('loginModule/gitUsermen')
}
