export default [
  // 个人中心
  {
    name: 'personal',
    path: '/tm/personal',
    component (resolve) {
      require.ensure(
        [],
        () => {
          resolve(require('../pages/personal/index.vue'))
        }
      )
    }
  }
]
