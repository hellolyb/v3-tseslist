<template>
  <div class="heinfo">
    <el-avatar
      :size="30"
      shape="square"
      src="https://cn.vitejs.dev/logo-with-shadow.png"
    />
    <el-dropdown @command="handleCommand">
      <span class="el-dropdown-link">
        Dropdown List<el-icon class="el-icon--right"><arrow-down /></el-icon>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item command="Signout">退出登录</el-dropdown-item>
          <el-dropdown-item command="userPersonalInformation"
            >个人信息</el-dropdown-item
          >
          <el-dropdown-item command="Changethepassword"
            >修改密码</el-dropdown-item
          >
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script lang="ts" setup>
// defineProps父传子, defineEmits子传父, defineExpose组件中要暴露出去的属性 setup自带
import { ref, reactive, toRefs, watchEffect, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import loca from '@/utils/storage/loca'
// 路由对象
const route = useRoute()
// 路由实例
const router = useRouter()
const data = reactive({})
// 方法部分
const handleCommand = (val: string) => {
  if (val === 'Signout') {
    loca.delete('token')
    router.back()
  }
}
watchEffect(() => {})
// 使用toRefs解构
// let { } = { ...toRefs(data) }
</script>
<style scoped lang="scss">
.heinfo {
  width: 160px;
  justify-content: space-between;
  display: flex;
  align-items: center;
}
</style>
