// 连接数据库
const mongoose  = require('mongoose')
const url = require('config').get('mongoose').url
mongoose.connect(url, function (err, db) {
    if (err) {
        console.error(err)
        return
    } else {
        console.log('mongose   db 连接成功')
    }
 })


//  文章模型
const articleScheme = new mongoose.Schema({
    author: String, // 作者
    date: String, // 发布时间
    type: String, // 类型
    countType: String, // 总类型 [q:前端,h:后端,z:杂谈]
    title: String, // 标题
    content: String, // 内容
    dev: Number, // 点击数
    created_at: { type: Date, default: Date.now },
    update_at: { type: Date, default: Date.now },
})
exports.article = mongoose.model('article', articleScheme)

