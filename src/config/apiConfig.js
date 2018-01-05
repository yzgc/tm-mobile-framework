/* 本地接口数据和后端数据分开，都采用对象的方式，方便管理 */
/* 接口名，接口地址为键值对的形式 */
/* 模拟地址 */
const test = {
  getMockData: '/api/getMockData',
  getUserInfo: '/api/getUserInfo'
}
/* 后端地址 */
const prduction = {
  getMockData: '/API/MY/IS/MOCK',
  getUserInfo: '/API/GET/USR/INFO'
}
export const apiType = 0 // 用于确定当前环境
export const apiTypeArr = [test, prduction, prduction, prduction] // 数字对应的请求地址
export const TEST_URL = `http://${location.hostname}:8989` // 模拟环境域名和端口（locahost || ip）
export const PRODUCTION_URL = 'http://production.tm.com' // 生产环境实际域名
export const RELEASE_URL = 'http://release.tm.com' // 测试环境域名
export const PRE_URL = 'http://pre.tm.com' // 预发布环境域名
export const Handle = false // 测试环境的url  手机上访问不到loclhost路径

/* 确定当前使用的环境 */
function getRunningUrl () {
  let url = ''
  switch (apiType) {
    case 0:
      url = TEST_URL
      break
    case 1:
      url = PRODUCTION_URL
      break
    case 2:
      url = RELEASE_URL
      break
    case 3:
      url = PRE_URL
      break
    default:
      url = PRODUCTION_URL
      break
  }
  if (Handle) {
    url = ''
  }
  return url
}

export const RUNNING_URL = getRunningUrl() // 导出真正运行的url
