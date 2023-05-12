<template>
  <div class="pagesearch">
    <forms v-bind="userForm" v-model="userForms">
      <template #search>
        <div style="text-align: right; padding: 0 50px 0 0">
          <el-button :icon="Refresh">重置</el-button>
          <el-button type="primary" @click="ok">搜索</el-button>
        </div>
      </template>
    </forms>
  </div>
</template>

<script lang="ts" setup>
// defineProps父传子, defineEmits子传父, defineExpose组件中要暴露出去的属性 setup自带
import { ref, reactive, toRefs, watchEffect, computed, defineProps } from 'vue'
import forms from '@/baseUI/from/forms.vue'
import { useRoute, useRouter } from 'vue-router'
import { Refresh } from '@element-plus/icons-vue'
// 路由对象
const route = useRoute()
// 路由实例
const router = useRouter()
defineProps({
  userForm: {
    type: Object
  }
})
const userForms = ref({
  name: '',
  realname: '',
  cellphone: '',
  enable: '',
  createAt: ''
})
const ok = () => {
  console.log(userForms.value)
}
// 方法部分
watchEffect(() => {})
// 使用toRefs解构
// let { } = { ...toRefs(data) }
</script>
<style scoped lang="scss"></style>
