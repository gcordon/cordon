//文章表
var article = require('../lib/mongoose').article

module.exports = {
    findArticle: function findArticle(SelectNumber = 2, countType) {
        // 帅选总类型[q:前端, h: 后端, z: 其他]
        if (countType == 'all') { // 帅选所有文章
            return article.find().limit(SelectNumber).exec()
        } else { // 帅选其他的文章
            return article.find({ 'countType': countType}).limit(SelectNumber).exec()
        }
    },
    // 按_id, 查询单个文章
    articleFindOne: function articleFindOne(_id) {
        return article.findById(_id).exec()
    },
    // 文章点击量+1
    articlePulsDev: function articlePulsDev(selectId) {
        return article.findByIdAndUpdate(selectId, { $inc: { "dev": +1 } })
        // return article.findById(selectId).update({ $inc: { "dev": +1 }})
    },
    // 添加一篇文章
    articleAddOne: function articleAddOne(dataObj) {
        return article.insertMany(dataObj)
    },
}
