module.exports = function(app) {
    app.use('/article', require('./article.js'))
    app.use('/message', require('./message.js'))
    app.use('/admin', require('./admin.js'))
}
