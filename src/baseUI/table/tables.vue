<template>
  <div class="tables">
    <el-table :data="UsersList" border style="width: 100%">
      <el-table-column v-for="(item, index) in list" :key="index" v-bind="item">
        <template #default="scope">
          <slot :name="item.slotName" :datas="scope.row">{{
            scope.row[item.prop]
          }}</slot>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script lang="ts" setup>
// defineProps父传子, defineEmits子传父, defineExpose组件中要暴露出去的属性 setup自带
import { ref, reactive, toRefs, watchEffect, computed, defineProps } from 'vue'
import { useRoute, useRouter } from 'vue-router'
// 路由对象
const route = useRoute()
// 路由实例
const router = useRouter()
const tableData = ref([])
const data = reactive({})
defineProps({
  list: {
    type: Array,
    default: () => []
  },
  UsersList: {
    type: Array,
    required: true
  }
})
// 方法部分
watchEffect(() => {})
// 使用toRefs解构
// let { } = { ...toRefs(data) }
</script>
<style scoped lang="scss">
.tables {
  border-top: 20px solid #eafaf1;
}
</style>
