import { ElLoading } from 'element-plus'
import type { LoadingInstance } from 'element-plus/es/components/loading/src/loading'
export const loading = {
  loadingInstance: null as LoadingInstance | null,
  open() {
    if (this.loadingInstance === null) {
      this.loadingInstance = ElLoading.service({
        text: '拼命加载中',
        background: 'rgba(255, 51, 102,0.5)'
      })
    }
  },
  close() {
    if (this.loadingInstance !== null) {
      this.loadingInstance.close()
      this.loadingInstance = null
    }
  }
}
export const loadingStatus = true
