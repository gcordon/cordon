// 管理员模型
var admin = require('../lib/mongoose').admin
module.exports = {
    // 登录后台
    adminLogin: function adminLogin(login) {
        return admin.findOne(login).exec()
    },
}


