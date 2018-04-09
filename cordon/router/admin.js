// admin模型
const router = require('express').Router()
const adminModel = require('../models/admin')
// post /admin/login
router.post('/login', function(req, res, next) {
    console.log(req.body.adminPassword)

    adminModel.adminLogin({
        adminName: req.body.adminName,
        adminPassword: req.body.adminPassword
    })
        .then(result => {
            if (result) {
                res.json({
                    status: '0',
                    result: result,
                    ins: '后台登录',
                })
            } else {
                res.json({
                    status: '1',
                    result: result,
                    ins: 'error 后台登录',
                })
            }

        })
        .catch(next)
})

module.exports = router
