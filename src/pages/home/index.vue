<template>
  <section>
    <h4 class="title">首页</h4>
    <ul class="content">
      <li class="content__list1">1<span class="icon-home"></span></li>
      <li class="content__list2">2<span class="icon-clock"></span></li>
      <li class="content__list3">3<span class="icon-mobile"></span></li>
    </ul>
  </section>
</template>

<script>
  import { getMockData } from '../../model/home'
  import { device } from '../../util/mall'
  export default {
    data () {
      return {
        device: device()
      }
    },
    mounted () {
      getMockData()
    }
  }
</script>

<style scoped lang="scss">
  h4 {
    color: red;
    font-size: 30px;/*px*/
  }
  .content {
    background-color: #f5f5f9;
    &__list1 {
      color: red;
    }
    &__list2 {
      color: pink;
    }
    &__list3 {
      color: blue;
    }
  }
</style>
