export default [
  // demo页
  {
    name: 'demo',
    path: '/tm/demo',
    component (resolve) {
      require.ensure(
        [],
        () => {
          resolve(require('../pages/demo/demo.vue'))
        }
      )
    }
  }
]
