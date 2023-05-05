<template>
  <div class="Account">
    <el-form
      ref="ruleFormRef"
      :model="ruleForm"
      :rules="rules"
      label-width="60px"
      class="demo-ruleForm"
      status-icon
    >
      <el-form-item label="账号" prop="name">
        <el-input v-model="ruleForm.name" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="ruleForm.password" show-password />
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
// defineProps父传子, defineEmits子传父, defineExpose组件中要暴露出去的属性 setup自带
import { ref, reactive, toRefs, watchEffect, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { rules } from '../config/rules'
import type { ElForm } from 'element-plus'
import exist from '@/utils/storage/loca'
const ruleFormRef = ref<InstanceType<typeof ElForm>>()
// const formRef = ref<InstanceType<typeof ElForm>>()
// 路由对象
const route = useRoute()
// 路由实例
const router = useRouter()
const ruleForm = reactive({
  name: exist.take('name') ?? '', // 账号
  password: exist.take('password') ?? '' //密码
})
const submitForm = (st: boolean) => {
  ruleFormRef.value?.validate((valid) => {
    if (valid) {
      if (st) {
        exist.exist('name', ruleForm.name)
        exist.exist('password', ruleForm.password)
      } else {
        exist.delete('name')
        exist.delete('password')
      }
    } else {
      console.log('error submit!')
    }
  })
}
defineExpose({
  submitForm
})
// 方法部分
watchEffect(() => {})
// 使用toRefs解构
// let { } = { ...toRefs(data) }
</script>
<style scoped lang="scss"></style>
