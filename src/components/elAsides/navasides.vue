<!-- eslint-disable no-undef -->
<!-- eslint-disable no-undef -->
<template>
  <div class="navLeft">
    <el-col>
      <div class="logn">
        <img src="https://cn.vitejs.dev/logo-with-shadow.png" alt="" />
        <span v-show="!status">Vue3 + Ts</span>
      </div>
      <el-menu
        active-text-color="#3"
        background-color="#031527"
        :collapse="status"
        class="el-menu-vertical-demo"
        default-active="2"
        unique-opened
        text-color="#fff"
      >
        <template v-for="item in menuList" :key="item.id">
          <el-sub-menu :index="String(item.id)">
            <template #title>
              <el-icon><Link /></el-icon>
              <!-- <component :is="item.icon"></component> -->
              <span>{{ item.name }}</span>
            </template>
            <template v-for="ele in item.children" :key="ele.id">
              <el-menu-item :index="String(ele.id)" @click="Jump(ele)">{{
                ele.name
              }}</el-menu-item>
            </template>
          </el-sub-menu>
        </template>
      </el-menu>
    </el-col>
  </div>
</template>

<script lang="ts" setup>
// defineProps父传子, defineEmits子传父, defineExpose组件中要暴露出去的属性 setup自带
import { ref, reactive, toRefs, watchEffect, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useStore } from 'vuex'
// 仓库vuex
const store = useStore()
// 路由对象
const route = useRoute()
// 路由实例
const router = useRouter()
const data = reactive({})
const menuList = computed(() => store.state.loginModule.userMenu)
// eslint-disable-next-line no-undef
defineProps({
  status: {
    type: Boolean,
    default: false
  }
})
// 方法部分
const Jump = (vak: any) => {
  console.log(vak.url)
  router.push(vak.url)
}
watchEffect(() => {})
// 使用toRefs解构
// let { } = { ...toRefs(data) }
</script>
<style scoped lang="scss">
.logn {
  height: 60px;
  display: flex;
  align-items: center;
  font-size: 20px;
  img {
    width: 35px;
    height: 35px;
    margin: 0 10px;
  }
  span {
    transition: all 1 linear;
  }
}
.el-menu-vertical-demo {
  border: none;
}
.el-menu-item:hover {
  background: rgba($color: #45b39d, $alpha: 0.3);
}
</style>
