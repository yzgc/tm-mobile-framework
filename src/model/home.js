import ajax from '../http/http'
import { apiType, apiTypeArr } from '../config/apiConfig'
/*
* 例子
* pages/home/index中调用
* 本例模拟get请求
*/
export function getMockData () {
  const params = {
    page: 1
  }
  return ajax({
    url: apiTypeArr[apiType].getMockData,
    method: 'get',
    params
  })
}
