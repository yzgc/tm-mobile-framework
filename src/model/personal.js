import ajax from '../http/http'
import { apiType, apiTypeArr } from '../config/apiConfig'
/*
* 例子
* pages/person/index中调用
* 本例模拟post请求
*/
export function postMockData () {
  const params = {
    page: 1,
    type: 1
  }
  return ajax({
    url: apiTypeArr[apiType].getMockData,
    method: 'post',
    data: params
  })
}

/*
* 例子
* /src/store/actions.js中调用
* 本例模拟获取用户信息
*/
export function getUserInfo () {
  return ajax({
    url: apiTypeArr[apiType].getUserInfo,
    method: 'get',
    params: ''
  })
}
