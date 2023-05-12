<template>
  <div class="breadcrumb">
    <div style="margin-left: 20px">
      <el-breadcrumb :separator-icon="ArrowRight">
        <el-breadcrumb-item :to="{ path: '/main' }"
          >homepage</el-breadcrumb-item
        >
        <el-breadcrumb-item>{{ data.name }}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
  </div>
</template>

<script lang="ts" setup>
// defineProps父传子, defineEmits子传父, defineExpose组件中要暴露出去的属性 setup自带
import { ref, reactive, toRefs, watchEffect, computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { ArrowRight } from '@element-plus/icons-vue'
import locat from '@/utils/storage/loca'
import { useStore } from 'vuex'
// 仓库
const store = useStore()
// 路由对象
const route = useRoute()
// 路由实例
const router = useRouter()
const data = reactive({
  name: locat.take('maxname') ?? ''
})
const userMenu = computed(() => store.state.loginModule.userMenu)
router.beforeEach((to) => {
  userMenu.value.forEach((val: any) => {
    if (val.children) {
      val.children.forEach((ele: any) => {
        if (to.path === ele.url) {
          data.name = ele.name
          locat.exist('maxname', data.name)
        }
      })
    }
  })
})

// 方法部分
watchEffect(() => {})
// 使用toRefs解构
// let { } = { ...toRefs(data) }
</script>
<style></style>
