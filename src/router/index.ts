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
// 全局前置路由守卫
router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token')
  // 如果进入的是登录页面
  if (to.path === '/login') {
    // 如果token存在不允许跳转到登录页面
    if (token) {
      return next('/mani')
    } else {
      // 如果token不存在跳转到登录页面
      return next()
    }
  }
  // token存在放行
  if (token) {
    next()
  } else {
    // token不存在返回登录页面
    next('/login')
  }
})
export default router
