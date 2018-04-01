const router = require('express').Router()
const articleModel = require('../models/article')
router.get('/', function(req, res, next) {
    // 按_id, 查询单个文章
    let articleId = req.query.articleId
    if (articleId) {
        articleModel.articleFindOne(articleId)
            .then(result => {
                res.json({
                    status: '0',
                    result: result,
                    ins: '按_id, 查询单个文章',
                })
            })
            .catch(err => {
                res.json({
                    status: '1',
                    result: '',
                    ins: 'error 按_id, 查询单个文章',
                })
            })
    }
    // 查询所有文章
    let SelectNumber = parseInt(req.query.SelectNumber) // 每次数据帅选条数
    let countType = req.query.countType // 文章总类型帅选
    if (SelectNumber) {
        articleModel.findArticle(SelectNumber, countType)
            .then(result => {
                res.json({
                    status: '0',
                    result: result,
                    ins: '查询所有文章',
                })
            })
            .catch(err => {
                res.json({
                    status: '1',
                    result: '',
                    ins: 'error 查询所有文章',
                })
            })
    }

})

module.exports = router
