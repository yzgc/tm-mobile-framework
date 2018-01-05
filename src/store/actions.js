/*
 * 提交mutations
 * */
import * as types from './mutations-type'
import { getUserInfo } from '../model/personal'

export default {
  setUserInfo ({commit}) {
    getUserInfo().then((res) => {
      console.log(res)
      if (res.code === 10000) {
        commit(types.SET_USER_INFO, res.result)
      }
    })
  }
}
