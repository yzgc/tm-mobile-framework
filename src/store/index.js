/*
 * vuex加载文件，本例暂不使用模块的形式
 * 本例初始化一个用户信息，并获取后端信息，完成在personal页的使用
 * 展现整个vuex的使用过程为目标
 * */

import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)

// 初始化一个全局状态的userinfo
const state = {
  userinfo: {
    name: 'yzgc',    // 用户昵称
    avatar: '暂无',      // 用户头像
    age: '20',       // 用户年龄
    userId: 0,       // 用户id
    company: 'tm',   // 用户标识
    gold: 0          // 用户奖牌数
  }
}
export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})

// end
