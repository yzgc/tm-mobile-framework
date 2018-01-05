// 引入fastclick.js
import FastClick from 'fastclick'
if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', function () {
    FastClick.attach(document.body)
  }, false)
}

// 《淘宝flexible.js漏洞修补》http://www.jianshu.com/p/7064613bf9f8
function modifileRootRem () {
  const root = window.document.documentElement
  const fontSize = parseFloat(root.style.fontSize)
  const finalFontSize = parseFloat(window.getComputedStyle(root).getPropertyValue('font-size'))
  if (finalFontSize === fontSize) return
  root.style.fontSize = `${fontSize + (fontSize - finalFontSize)}px`
}

// 获取窗口的宽度
function screenWidth () {
  return window.innerWidth || document.body.clientWidth || document.documentElement.clientWidth
}

// 计算根的font-size
const flexBox = () => {
  // 先获取浏览器窗口宽度
  const width = screenWidth()
  // 按照750设计稿，比例为100
  let fontSize = width / 7.5
  // pc端不缩放
  if (width >= 640) {
    fontSize = 50
  }
  document.documentElement.style.fontSize = `${fontSize}px`
  modifileRootRem()
}

// 导出flexBox
export default flexBox
