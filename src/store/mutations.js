/*
 * 方法改变状态，通过提交修改
 * actions里面提交
 * 第一参数state
 * 第二参数 载荷
 * */
import * as types from './mutations-type'

export default {
  [types.SET_USER_INFO] (state, data) {
    state.userinfo = data
  }
}
// end
