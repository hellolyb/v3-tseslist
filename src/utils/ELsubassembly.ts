import { App } from 'vue'
import { ElButton, ElTag } from 'element-plus' // 引入button组件
const components = [ElButton, ElTag]
export default function (app: App) {
  for (const component of components) {
    app.component(component.name, component)
  }
}
