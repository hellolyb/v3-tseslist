import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/mani' // 路由重定向
  },
  {
    path: '/login',
    name: 'login',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/login/login.vue')
  },
  {
    path: '/mani',
    name: 'mani',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/mani/mani.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
