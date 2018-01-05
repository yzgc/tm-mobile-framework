<template>
  <div>
    <h4>个人中心</h4>
    <ul>
      <li>{{userinfo.name}}</li>
      <li>{{userinfo.avatar}}</li>
      <li>{{userinfo.age}}</li>
      <li>{{userinfo.userId}}</li>
      <li>{{userinfo.company}}</li>
      <li>{{userinfo.gold}}</li>
    </ul>
    <div class="div"></div>
  </div>
</template>
<script>
  import { mapActions } from 'vuex'
  import { postMockData } from '../../model/personal'

  export default {
    computed: {
      userinfo () {
        return this.$store.state.userinfo
      }
    },
    methods: {
      ...mapActions([
        'setUserInfo'
      ])
    },
    mounted () {
      postMockData()
      console.log(this.$store.getters.userinfo)
      this.setUserInfo().then(() => {
        console.log('success')
      })
      window.ws.set('login', '0', { exp: 100 })
    }
  }
</script>
<style scoped>
  h4 {
    font-size: 30px;/*px*/
  }
  .div {
    height: 128px;
    width: 128px;
    background-color: pink;
  }
</style>
