<template>
  <div class="mani">
    <el-container>
      <el-aside :width="status ? '60px' : '200px'"
        ><Navasides :status="status"></Navasides
      ></el-aside>
      <el-container>
        <el-header><Heaters @toggle="toggle"></Heaters></el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts" setup>
// defineProps父传子, defineEmits子传父, defineExpose组件中要暴露出去的属性 setup自带
import { ref, reactive, toRefs, watchEffect, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
// import Navasides from '@/components/elAsides/navasides.vue'
// import Heaters from '@/components/headers/heaters.vue'
// import MainBox from '@/components/mians/mainBox.vue'

// 路由对象
const route = useRoute()
// 路由实例
const router = useRouter()
const data = reactive({})
// 方法部分
const status = ref(false)
const toggle = (val: boolean) => {
  status.value = val
}
watchEffect(() => {})
// 使用toRefs解构
// let { } = { ...toRefs(data) }
</script>
<style scoped lang="scss">
.mani {
  width: 100%;
  height: 100%;
  .el-header {
    background-image: linear-gradient(135deg, #abdcff 10%, #0396ff 100%);
    height: 60px;
    color: #fff;
  }

  .el-aside {
    // background-color: #031527;
    background-image: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: #fff;
    transition: all 0.3s linear;
  }

  .el-main {
    background-image: linear-gradient(135deg, #3c8ce7 10%, #00eaff 100%);
    color: #fff;
  }

  .el-container {
    height: 100%;
  }
}
</style>
