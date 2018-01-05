import Vue from 'vue'
import HelloWorld from '../../../src/pages/home/index'

describe('HelloWorld.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(HelloWorld)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.title').textContent)
      .to.equal('首页')
  })
})
