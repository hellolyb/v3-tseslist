import { App } from 'vue'
import globalbbs from './ELsubassembly'
// 挂载组件
export const subassembly = {
  install(app: App) {
    app.use(globalbbs)
  }
}
