const log = console.log.bind(console)
const express = require('express')
// 配置文件
const config = require('config')
// req.body解析中间件
const bodyParser = require('body-parser')
// 后端路由
const router = require('./router/index')
const app = express()


// // req.body解析中间件
app.use(bodyParser.json())
// 静态文件地址 (这里设置了俩个静态地址)
app.use(express.static('public'))
app.use(express.static('src/public'))

// 路由 (传递app参数)
router(app)


// 服务器端口
const port = config.get('port')
app.listen(port, function() {
    log(`node listenning http://localhost:${port}`)
})

module.exports = app
