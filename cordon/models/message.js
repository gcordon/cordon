// mongoose message表
var message = require('../lib/mongoose').message

module.exports = {
    // 提交留言
    sendMessage: function sendMessage(form) {
        return message.create(form)
    },
    // 展示留言
    getMessage: function getMessage() {
        return message.find({}).exec()
    },
    // 帅选指定留言数
    getLimitMessage: function getLimitMessage(limit) {
        return message.find().limit(limi).exec()
    }
}

