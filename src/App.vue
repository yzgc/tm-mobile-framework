<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  // css-reset
  import '../static/css/common.css'
  // 添加icon样式支持
  import '../static/icons/style.css'
  //  定义页面的font-size
  import flexBox from './util/flexbox'
  flexBox()
  // 页面缩放时
  window.onresize = flexBox
  export default {
    name: 'app'
  }
</script>

<style>
</style>
