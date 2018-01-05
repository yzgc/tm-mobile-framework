<template>
  <div>
    <h4>{{msg}}</h4>
    <h4>测试使用mint-ui swipe</h4>
    <mt-swipe class="swipe" :auto="4000">
      <mt-swipe-item class="swipe__slide">1</mt-swipe-item>
      <mt-swipe-item class="swipe__slide">2</mt-swipe-item>
      <mt-swipe-item class="swipe__slide">3</mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
  import { Swipe, SwipeItem } from 'mint-ui'
  import Vue from 'vue'

  Vue.component('mt-swipe', Swipe)
  Vue.component('mt-swipe-item', SwipeItem)
  export default {
    data () {
      return {
        msg: '测试页面'
      }
    }
  }
</script>

<style lang="scss" scoped>
  .swipe {
    &__slide {
      height: 280px;
    }
  }
</style>
