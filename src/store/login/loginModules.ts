import { Module } from 'vuex'
import { ILoginState, IRootState } from './type'
import { IAccount } from '@/api/loginApi/type'
import { getLoginApi, getUserInfoById, getUserMenu } from '@/api/loginApi/api'
import loca from '@/utils/storage/loca'
import router from '@/router'
const loginModule: Module<ILoginState, IRootState> = {
  namespaced: true,
  state: {
    token: loca.take('token') ?? '',
    userInfo: loca.take('userInfo') ?? {},
    userMenu: loca.take('userMenu') ?? []
  },
  getters: {},
  mutations: {
    getToken(state: ILoginState, token: string) {
      state.token = token
      loca.exist('token', token)
    },
    getdepartment(state: ILoginState, department) {
      state.userInfo = department
      loca.exist('userInfo', department)
    },
    UserMenu(state: ILoginState, userMenus) {
      state.userMenu = userMenus
      loca.exist('userMenu', userMenus)
    }
  },
  actions: {
    async gitUserInfo({ commit }, userval: IAccount) {
      try {
        // 登录接口的调用
        const userToken = await getLoginApi(userval)
        const { id, token } = userToken.data
        commit('getToken', token)
        // 用户信息的调用
        const userInfo = await getUserInfoById(id)
        commit('getdepartment', userInfo.data.role)
        // 用户菜单的调用
        const userMenus = await getUserMenu(id)
        commit('UserMenu', userMenus.data)
        // 跳转到首页
        router.push('/')
      } catch (e) {
        console.log(e)
      }
    }
  },
  modules: {}
}
export default loginModule
