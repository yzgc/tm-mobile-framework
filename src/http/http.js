// 编写http请求相关配置，使用axios
import axios from 'axios'
import { RUNNING_URL } from '../config/apiConfig'

// 为请求添加一个域名，它会自动添加到url前面，除非url为绝对路径
axios.defaults.baseURL = RUNNING_URL

// 并且封装一层ajax，方便替换
// option配置参数，等同axios的api
function ajax (option) {
  return axios(option).then((data) => {
    return data
  }).catch((data) => {
    return data
  })
}

// 添加请求拦截器
// ToDO

// 添加响应拦截器
axios.interceptors.response.use(
  (response) => {
    // 对返回的数据做一些处理，譬如直接返回data
    if (typeof (response.data) === 'string') {
      try {
        response.data = JSON.parse(response.data)
      } catch (e) {
        response.data = {
          code: '20001',
          msg: '接口出错'
        }
      }
    }
    return response.data
  },
  (error) => {
    // 非正常返回处理
    console.log(error)
  }
)
export default ajax
