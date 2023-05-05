<template>
  <div class="loginBox">
    <div class="zuida">
      <h3 style="margin-bottom: 10px">后台管理系统</h3>
      <el-tabs type="border-card" stretch class="demo-tabs">
        <el-tab-pane>
          <template #label>
            <span class="custom-tabs-label">
              <el-icon><UserFilled /></el-icon>
              <span>账号登录</span>
            </span>
          </template>
          <LoginAccount ref="reference"></LoginAccount>
        </el-tab-pane>
        <el-tab-pane>
          <template #label>
            <span class="custom-tabs-label">
              <el-icon><Iphone /></el-icon>
              <span>手机登录</span>
            </span>
          </template>
          Route
        </el-tab-pane>
      </el-tabs>
      <div style="display: flex; justify-content: space-between">
        <el-checkbox v-model="status" label="复选框 A">记住密码</el-checkbox>
        <el-link href="####" type="primary">忘记密码</el-link>
      </div>
      <div>
        <el-button
          @click="logon"
          style="width: 100%; padding: 17px 0"
          type="primary"
          >登录</el-button
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
// defineProps父传子, defineEmits子传父, defineExpose组件中要暴露出去的属性 setup自带
import { ref, reactive, toRefs, watchEffect, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import LoginAccount from './login-Account.vue'
const reference = ref<InstanceType<typeof LoginAccount>>()
// 路由对象
const route = useRoute()
// 路由实例
const router = useRouter()
const data = reactive({})
const status = ref<boolean>(true)
// 方法部分
const logon = () => {
  reference.value?.submitForm(status.value)
}
watchEffect(() => {})
// 使用toRefs解构
// let { } = { ...toRefs(data) }
</script>
<style scoped lang="scss">
.zuida {
  width: 400px;
  text-align: center;
}
.demo-tabs .custom-tabs-label .el-icon {
  vertical-align: middle;
}
.demo-tabs .custom-tabs-label span {
  vertical-align: middle;
  margin-left: 4px;
}
</style>
