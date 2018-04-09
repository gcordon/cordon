// 连接数据库
const mongoose  = require('mongoose')
const url = require('config').get('mongoose').url
mongoose.connect(url, function (err, db) {
    if (err) {
        console.error('mmongoose connect 连接失败，错误：',err)
        return
    } else {
        console.log('mongose   db 连接成功')
    }
 })

//  文章模型
const articleSchema = new mongoose.Schema({
    author: {type: String, default: 'admin'}, // 作者
    date: { type: Date, default: Date.now}, // 发布时间
    type: {type: String, required: true, }, // 类型
    countType: { type: String, required: true, }, // 总类型 [q:前端,h:后端,z:杂谈]
    title: { type: String, required: true, }, // 标题
    content: { type: String, required: true, }, // 内容
    dev: {type: Number, default: 1,}, // 点击数
    created_at: { type: Date, default: Date.now },
    update_at: { type: Date, default: Date.now },
})

exports.article = mongoose.model('article', articleSchema)
// 留言模型
const MessageSchema = new mongoose.Schema({
    userName: {type: String}, // 用户名
    userContent: {type: String}, // 内容
    userEmail: {type: String}, //邮箱
    avatar: {type: String, default: 'avatar.jpg'}, // 头像
    created_at: { type: Date, default: Date.now },
    update_at: { type: Date, default: Date.now },
})
exports.message = mongoose.model('message', MessageSchema)

// 后台管理员模型
const AdminSchema = new mongoose.Schema({
    adminName: { type: String, required: true, },  // 账号
    adminPassword: { type: String, required: true, }, // 密码
    avatar: { type: String, default: 'avatar.jpg' }, // 头像
})
exports.admin = mongoose.model('admin', AdminSchema )
