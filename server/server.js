/**
 *  模拟后端API
 *  使用 express-mockjs npm安装
 *  使用 nodemon监视自动重启服务 npm安装
 *  使用 express日志组件margan, 并打印到本地文件
 * **/

const path = require('path')
const express = require('express')
const morgan = require('morgan')
const fs = require('fs')
const mockjs = require('express-mockjs')

/* 设定端口为8001 */
const port = 8989
const app = express()

/* 请求日志 */
app.use(morgan('short'))
const accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), {flags: 'a'})
app.use(morgan('short', {stream: accessLogStream}))
app.use(function (req, res, next){
  // res.setHeader('Access-Control-Allow-Origin', '*') // 设置允许跨域
  // res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE') // 设置允许跨域
  next()
})

/* 自定义路径 */
app.use('/api', mockjs(path.join(__dirname, 'mocks')))

/* 绑定端口 */
app.listen(port, () => {
  console.log(`Mock server listening on port${port}`)
})
