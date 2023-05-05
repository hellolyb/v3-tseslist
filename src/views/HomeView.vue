<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
    <el-button type="primary">1111111111111</el-button>
    <el-tag>Tag 1</el-tag>
    <el-tag class="ml-2" type="success">Tag 2</el-tag>
    <el-tag class="ml-2" type="info">Tag 3</el-tag>
    <el-tag class="ml-2" type="warning">Tag 4</el-tag>
    <el-tag class="ml-2" type="danger">Tag 5</el-tag>
    <div>
      <el-link href="https://element-plus.org" target="_blank">default</el-link>
      <el-link type="primary">primary</el-link>
      <el-link type="success">success</el-link>
      <el-link type="warning">warning</el-link>
      <el-link type="danger">danger</el-link>
      <el-link type="info">info</el-link>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'HomeView',
  components: {}
})
</script>
