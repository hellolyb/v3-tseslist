<template>
  <div class="user">
    <PageSearch :userForm="userForm"></PageSearch>
    <Tables :list="list" :UsersList="UsersList">
      <template #enable="scope">
        <el-button :type="scope.datas.enable ? 'success' : 'danger'" plain>{{
          scope.datas.enable ? '激活' : '停用'
        }}</el-button>
      </template>
      <template #createAt="scope">
        <span>{{ scope.datas.createAt }}</span>
      </template>
      <template #updateAt="scope">
        <span>{{ scope.datas.updateAt }}</span>
      </template>
    </Tables>
  </div>
</template>

<script lang="ts" setup>
// defineProps父传子, defineEmits子传父, defineExpose组件中要暴露出去的属性 setup自带
import { ref, reactive, toRefs, watchEffect, computed } from 'vue'
import { userForm } from './config/config'
import { useRoute, useRouter } from 'vue-router'
import PageSearch from '@/components/page-search/src/page-search.vue'
import Tables from '@/baseUI/table/tables.vue'
import { getUsersListApi } from '@/api/main/system/api'
// 路由对象
const route = useRoute()
// 路由实例
const router = useRouter()
const data = reactive({})
const querys = {
  url: '/users/list',
  pageinfo: {
    offset: 0,
    size: 10
  }
}
const list = [
  {
    label: '用户名',
    prop: 'name',
    width: '120',
    align: 'center'
  },
  {
    label: '真实名',
    prop: 'realname',
    width: '120',
    align: 'center'
  },
  {
    label: '手机号码',
    prop: 'cellphone',
    width: '130',
    align: 'center'
  },
  {
    label: '状态',
    prop: 'enable',
    width: '100',
    align: 'center',
    slotName: 'enable'
  },
  {
    label: '创建时间',
    prop: 'createAt',
    width: '220',
    align: 'center',
    slotName: 'createAt'
  },
  {
    label: '更新时间',
    prop: 'updateAt',
    width: '220',
    align: 'center',
    slotName: 'updateAt'
  }
]
const UsersList = ref<any>([])
const getUsersList = async () => {
  try {
    const Usersdata: any = await getUsersListApi(querys.url, querys.pageinfo)
    UsersList.value = Usersdata.data.list
  } catch (e) {
    console.log(e)
  }
}
getUsersList()
// 方法部分
watchEffect(() => {})
// 使用toRefs解构
// let { } = { ...toRefs(data) }
</script>
<style scoped lang="scss">
.user {
  width: 100%;
  height: 150%;
  background-color: #d6eaf8;
}
</style>
