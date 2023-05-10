import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/main' // 路由重定向
  },
  {
    path: '/login',
    name: 'login',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/login/login.vue')
  },
  {
    path: '/main',
    name: 'main',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/main/main.vue')
  },

  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/views/main/NotFound/NotFound.vue')
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
