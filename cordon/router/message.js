const router = require('express').Router()
const messageModel = require('../models/message')
// 提交留言
router.post('/', function (req, res, next) {
    const body = req.body
    messageModel.sendMessage({
        userName: body.userName,
        userContent: body.userContent,
        userEmail: body.userEmail,
    })
        .then( result => {
            if (!result) {
                res.json({
                    status: '1',
                    result: result,
                    ins: 'error 提交留言失败',
                })
            }
            res.json({
                status: '0',
                result: result,
                ins: '提交留言成功',
            })
        })
        .catch(next)
})
// 获取留言
router.get('/', function (req, res, next) {
    // 帅选指定留言数
    let limit = req.params.limit
    if (limit) {
        messageModel.getLimitMessage(limit)
            .then(result => {
                if (!result) {
                    res.json({
                        status: '1',
                        result: result,
                        ins: 'error 帅选指定留言数',
                    })
                }
                res.json({
                    status: '0',
                    result: result,
                    ins: '帅选指定留言数',
                })
            })
            .catch(next)
    }
    messageModel.getMessage()
        .then(result => {
            if (!result) {
                res.json({
                    status: '1',
                    result: result,
                    ins: 'error 获取留言失败',
                })
            }
            res.json({
                status: '0',
                result: result,
                ins: '获取留言成功',
            })
        })
        .catch(next)
})

module.exports = router
