export default [
  // 首页重定向
  {
    path: '/',
    redirect: '/tm/home'
  },
  // 首页
  {
    name: 'home',
    path: '/tm/home',
    component (resolve) {
      require.ensure(
        [],
        () => {
          resolve(require('../pages/home/index.vue'))
        }
      )
    }
  }
]
