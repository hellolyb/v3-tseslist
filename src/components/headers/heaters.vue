<template>
  <div class="headers">
    <div
      style="
        display: flex;
        align-items: center;
        width: 90px;
        justify-content: space-between;
      "
    >
      <el-icon size="28" @click="toggle"
        ><Fold v-if="!status" /> <Expand v-else
      /></el-icon>
      <div>
        <div class="loader"></div>
      </div>
    </div>
    <div class="headersBox">
      <div style="margin-left: 20px">面包屑导航</div>
      <Heinfo></Heinfo>
    </div>
  </div>
</template>

<script lang="ts" setup>
// defineProps父传子, defineEmits子传父, defineExpose组件中要暴露出去的属性 setup自带
import { fa } from 'element-plus/es/locale'
import { ref, reactive, toRefs, watchEffect, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import Heinfo from './heinfo.vue'
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
  .headersBox {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .loader {
    width: 40px;
    height: 40px;
    margin: auto;
    position: relative;
  }

  .loader:before {
    content: '';
    width: 48px;
    height: 7px;
    background: #f0808050;
    position: absolute;
    top: 40px;
    left: 0;
    border-radius: 50%;
    -webkit-animation: shadow324 0.5s linear infinite;
    animation: shadow324 0.5s linear infinite;
  }

  .loader:after {
    content: '';
    width: 100%;
    height: 100%;
    background: #f08080;
    position: absolute;
    top: -10px;
    left: 0;
    border-radius: 4px;
    -webkit-animation: jump7456 0.5s linear infinite;
    animation: jump7456 0.5s linear infinite;
  }

  @-webkit-keyframes jump7456 {
    15% {
      border-bottom-right-radius: 3px;
    }

    25% {
      -webkit-transform: translateY(9px) rotate(22.5deg);
      transform: translateY(9px) rotate(22.5deg);
    }

    50% {
      -webkit-transform: translateY(18px) scale(1, 0.9) rotate(45deg);
      transform: translateY(18px) scale(1, 0.9) rotate(45deg);
      border-bottom-right-radius: 40px;
    }

    75% {
      -webkit-transform: translateY(9px) rotate(67.5deg);
      transform: translateY(9px) rotate(67.5deg);
    }

    100% {
      -webkit-transform: translateY(0) rotate(90deg);
      transform: translateY(0) rotate(90deg);
    }
  }

  @keyframes jump7456 {
    15% {
      border-bottom-right-radius: 3px;
    }

    25% {
      -webkit-transform: translateY(9px) rotate(22.5deg);
      transform: translateY(9px) rotate(22.5deg);
    }

    50% {
      -webkit-transform: translateY(18px) scale(1, 0.9) rotate(45deg);
      transform: translateY(18px) scale(1, 0.9) rotate(45deg);
      border-bottom-right-radius: 40px;
    }

    75% {
      -webkit-transform: translateY(9px) rotate(67.5deg);
      transform: translateY(9px) rotate(67.5deg);
    }

    100% {
      -webkit-transform: translateY(0) rotate(90deg);
      transform: translateY(0) rotate(90deg);
    }
  }

  @-webkit-keyframes shadow324 {
    0%,
    100% {
      -webkit-transform: scale(1, 1);
      transform: scale(1, 1);
    }

    50% {
      -webkit-transform: scale(1.2, 1);
      transform: scale(1.2, 1);
    }
  }

  @keyframes shadow324 {
    0%,
    100% {
      -webkit-transform: scale(1, 1);
      transform: scale(1, 1);
    }

    50% {
      -webkit-transform: scale(1.2, 1);
      transform: scale(1.2, 1);
    }
  }
}
</style>
