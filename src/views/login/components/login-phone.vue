<template>
  <div class="phone">
    <el-form
      ref="ruleFormRef"
      :model="ruleForm"
      label-width="60px"
      class="demo-ruleForm"
      status-icon
    >
      <el-form-item label="手机号">
        <el-input v-model="ruleForm.phone" />
      </el-form-item>
      <el-form-item label="验证码">
        <div class="codeBox">
          <el-input v-model="ruleForm.code" show-password />
          <el-button type="primary">发送验证码</el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
// defineProps父传子, defineEmits子传父, defineExpose组件中要暴露出去的属性 setup自带
import { ref, reactive, toRefs, watchEffect, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useStore } from 'vuex'
// vuex仓库
const store = useStore()
// 路由对象
const route = useRoute()
// 路由实例
const router = useRouter()
const ruleForm = reactive({
  code: '',
  phone: ''
})
// 方法部分
watchEffect(() => {})
// 使用toRefs解构
// let { } = { ...toRefs(data) }
</script>
<style scoped lang="scss">
.codeBox {
  width: 100%;
  display: flex;
  .el-input {
    flex: 1;
  }
  .el-button {
    margin-left: 10px;
  }
}
</style>
