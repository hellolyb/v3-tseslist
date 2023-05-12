<template>
  <div class="role">
    <PageSearch :userForm="roleForm"></PageSearch>
  </div>
</template>

<script lang="ts" setup>
// defineProps父传子, defineEmits子传父, defineExpose组件中要暴露出去的属性 setup自带
import PageSearch from '@/components/page-search/src/page-search.vue'
import { ref, reactive, toRefs, watchEffect, computed } from 'vue'
import { roleForm } from './config/config'
import { useRoute, useRouter } from 'vue-router'
// 路由对象
const route = useRoute()
// 路由实例
const router = useRouter()
const data = reactive({})
// 方法部分
watchEffect(() => {})
// 使用toRefs解构
// let { } = { ...toRefs(data) }
</script>
<style scoped lang="scss"></style>
