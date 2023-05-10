import { Module } from 'vuex'
import { ILoginState, IRootState } from './type'
import { IAccount } from '@/api/loginApi/type'
import { getLoginApi, getUserInfoById, getUserMenu } from '@/api/loginApi/api'
import loca from '@/utils/storage/loca'
import router from '@/router'
import { mapMenuToRoutes } from '@/utils/routers/routers'
const loginModule: Module<ILoginState, IRootState> = {
  namespaced: true,
  state: {
    // token: loca.take('token') ?? '',
    // userInfo: loca.take('userInfo') ?? {},
    // userMenu: loca.take('userMenu') ?? []
    token: '',
    userInfo: {},
    userMenu: []
  },
  getters: {},
  mutations: {
    getToken(state: ILoginState, token: string) {
      state.token = token
    },
    getuserInfo(state: ILoginState, department) {
      state.userInfo = department
    },
    getUserMenu(state: ILoginState, userMenus) {
      state.userMenu = userMenus
      const routes = mapMenuToRoutes(userMenus)
      console.log(routes)
      routes.forEach((route) => {
        // debugger
        router.addRoute('main', route)
        // debugger
      })
    }
  },
  actions: {
    async gitUserInfo({ commit }, userval: IAccount) {
      try {
        // 登录接口的调用
        const userToken = await getLoginApi(userval)
        const { id, token } = userToken.data
        commit('getToken', token)
        loca.exist('token', token)
        // 用户信息的调用
        const userInfo = await getUserInfoById(id)
        console.log(userInfo)
        commit('getuserInfo', userInfo.data.role)
        loca.exist('userInfo', userInfo.data.role)
        // 用户菜单的调用
        const userMenus = await getUserMenu(userInfo.data.role.id)
        commit('getUserMenu', userMenus.data)
        loca.exist('userMenu', userMenus.data)
        // 跳转到首页
        router.push('/')
      } catch (e) {
        console.log(e)
      }
    },
    gitUsermen({ commit }) {
      const token = loca.take('token')
      if (token) {
        commit('getToken', token)
      }
      const userInfo = loca.take('userInfo')
      if (userInfo) {
        commit('getuserInfo', userInfo)
      }
      const userMenus = loca.take('userMenu')
      if (userMenus) {
        commit('getUserMenu', userMenus)
      }
    }
  },
  modules: {}
}
export default loginModule
