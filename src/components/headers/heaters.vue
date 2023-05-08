<template>
  <div class="headers">
    <div>
      <el-icon size="28" @click="toggle"
        ><Fold v-if="!status" /> <Expand v-else
      /></el-icon>
    </div>
  </div>
</template>

<script lang="ts" setup>
// defineProps父传子, defineEmits子传父, defineExpose组件中要暴露出去的属性 setup自带
import { fa } from 'element-plus/es/locale'
import { ref, reactive, toRefs, watchEffect, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
// 路由对象
const route = useRoute()
// 路由实例
const router = useRouter()
const data = reactive({})
const status = ref<boolean>(false)

// 子传父方法注册
// eslint-disable-next-line no-undef
const emit = defineEmits(['toggle'])
const toggle = () => {
  status.value = !status.value
  emit('toggle', status.value)
}
// 方法部分
watchEffect(() => {})
// 使用toRefs解构
// let { } = { ...toRefs(data) }
</script>
<style scoped lang="scss">
.headers {
  height: 100%;
  display: flex;
  align-items: center;
}
</style>
