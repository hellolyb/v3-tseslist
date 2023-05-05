import { App } from 'vue'
import globalbbs from './ELsubassembly'
export const subassembly = {
  install(app: App) {
    app.use(globalbbs)
  }
}
