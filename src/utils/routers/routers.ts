import { RouteRecordRaw } from 'vue-router'

export function mapMenuToRoutes(userMenus: RouteRecordRaw[]): RouteRecordRaw[] {
  console.log(userMenus)
  const files = require.context('/src/router/main', true, /\.ts/)
  // 保存匹配出的路由
  const routesAll: RouteRecordRaw[] = []
  const allRoutes = files.keys().map((key) => {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const page = require('/src/router/main' + key.replace('.', ''))
    return page.default
  })
  function _recurseGetRoute(userMenus?: any) {
    for (const menu of userMenus) {
      if (menu.type === 1) {
        _recurseGetRoute(menu.children)
      } else {
        const route = allRoutes.find((route) => route.path == menu.url)
        if (route) {
          routesAll.push(route)
        }
      }
    }
  }
  _recurseGetRoute(userMenus)
  return routesAll
}
