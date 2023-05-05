<template>
  <div class="login">
    <LoginBox></LoginBox>
  </div>
</template>

<script lang="ts" setup>
// defineProps父传子, defineEmits子传父, defineExpose组件中要暴露出去的属性 setup自带
import { ref, reactive, toRefs, watchEffect, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import LoginBox from './components/loginBox.vue'
// 路由对象
const route = useRoute()
// 路由实例
const router = useRouter()
const data = reactive({})
// 方法部分
// watchEffect(() => {})
// 使用toRefs解构
// let { } = { ...toRefs(data) }
</script>
<style scoped lang="scss">
.login {
  width: 100%;
  height: 100%;
  background: url(../../assets/img/login-bg.svg);
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
