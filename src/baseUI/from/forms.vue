<template>
  <div class="forms">
    <el-form :label-width="labelWidth">
      <el-row :gutter="20">
        <el-col v-bind="colLayout" v-for="item in usetrForm" :key="item.id">
          <el-form-item
            :prop="item.field"
            :label="item.label"
            :style="itemStyle"
            ><template v-if="item.type === 'input'">
              <el-input
                v-model="form[item.field]"
                :type="item.type"
                :placeholder="item.placeholder"
              />
            </template>
            <template v-else-if="item.type === 'select'">
              <el-select
                v-model="form[item.field]"
                style="width: 100%"
                :placeholder="item.placeholder"
              >
                <el-option
                  v-for="(ele, index) in item.options"
                  :key="index"
                  :label="ele.label"
                  :value="ele.value"
                />
              </el-select>
            </template>
            <template v-else-if="item.type === 'datepicker'">
              <el-date-picker
                v-model="form[item.field]"
                style="width: 100%"
                :value-format="item['value-format']"
                type="daterange"
                v-bind="item.otherOptions"
              ></el-date-picker>
            </template>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <div>
      <slot name="search"></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
// defineProps父传子, defineEmits子传父, defineExpose组件中要暴露出去的属性 setup自带
import {
  ref,
  reactive,
  toRefs,
  watchEffect,
  computed,
  PropType,
  watch,
  defineEmits
} from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { Forms } from '@/baseUI/from/types/formType'
// 路由对象
const route = useRoute()
// 路由实例
const router = useRouter()

// eslint-disable-next-line no-undef
const prop = defineProps({
  labelWidth: {
    type: String,
    default: () => '90px'
  },
  colLayout: {
    type: Object,
    default: () => ({
      xl: 4,
      lg: 6,
      md: 8,
      sm: 12,
      xs: 24
    })
  },
  usetrForm: {
    type: Array as PropType<Forms[]>,
    default: () => []
  },
  itemStyle: {
    type: Object,
    default: () => ({ padding: '0 0' })
  },
  modelValue: {
    type: Object,
    required: true
  }
})
const form = reactive({ ...prop.modelValue })
const emits = defineEmits(['update:modelValue'])
// 方法部分
watchEffect(() => {
  emits('update:modelValue', form)
})

// 使用toRefs解构
// let { } = { ...toRefs(data) }
</script>
<style scoped lang="scss">
.forms {
  background-color: #fff;
  padding: 30px 0;
  box-sizing: border-box;
}
</style>
