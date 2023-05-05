class name {
  // 本地存储
  exist(name: string, val: any) {
    localStorage.setItem(name, JSON.stringify(val))
  }
  // 读取本地数据
  take(name: string) {
    const arr = localStorage.getItem(name)
    if (arr) {
      return JSON.parse(arr)
    }
  }
  // 删除本地某一项
  delete(name: string) {
    localStorage.removeItem(name)
  }
  // 清理缓存
  remove() {
    localStorage.clear()
  }
}
export default new name()
