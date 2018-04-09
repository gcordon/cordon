<template>
 <div id="blog">
    <link rel="stylesheet" href="http://at.alicdn.com/t/font_604071_dqkf3ecocfupu8fr.css">
    <!-- 头部导航 -->
    <blog-header @shareOne='shareOne'></blog-header>
    <!-- 主要 -->
    <div id="main">
        <link href="https://cdn.bootcss.com/bootstrap/3.3.7/css/bootstrap.css" rel="stylesheet">
        <div class="container">
            <!-- 文章 -->
            <div class="article-list" id="article">
                <article v-for="article in articleResult" :key="article.id">
                    <hgroup class="title">
                        <h2>
                            <a href="javascript:;" >
                                {{article.title}}
                            </a>
                        </h2>
                        <p>发布于 {{article.date}} <i class="iconfont icon-zhiboguankanshu"> {{article.dev}} </i></p>
                        <span class="type">
                            <a href="">
                                {{article.type}}
                            </a>
                        </span>
                    </hgroup>
                    <section v-html="article.content">
                    </section>
                    <button class="all">
                        <!-- <a :href="'./article?articleId='+article._id">阅读全文</a> -->
                        <a href="javascript:;"  @click="toArticleRouter(article._id)" >阅读全文</a>
                    </button>
                </article>

                <div class="flip">
                    <div class="getMore">
                    <vue-loading v-show="loading" type="bars" color="#d9544e" :size="{ width: '50px', height: '50px' }"></vue-loading>
                    <br>
                        <button @click="getMoreArticle">
                            加载更多
                        </button>
                    </div>
                </div>
            </div>
            <!-- 侧边： 个人-留言-标签 -->
            <div class="aside">
                <!-- 个人 -->
                <section class="personal">
                    <hgroup>
                        <h2>Cordon</h2>
                        <p>Hello Cordon</p>
                    </hgroup>
                    <figure class="clearfix">
                        <img src="../public/img/me.jpg" alt="">
                        <figcaption>
                            <hgroup>
                                <h2>Lin</h2>
                                <h3>2018</h3>
                            </hgroup>
                            <!-- <p>
                                <i class="iconfont icon-weibo" style="color:red;"></i>
                                <i class="iconfont icon-GitHub-copy" style="color:blue;"></i>
                                <i class="iconfont icon-Email" style="color:rgb(59, 89, 152)"></i>
                                <i class="iconfont icon-gerenjianli" style="color:rgb(128, 185, 83)"></i>
                            </p> -->
                            <p class="iconfont-show">
                                <a href="https://weibo.com/u/5442350083">
                                    <el-tooltip content=""  disabled="false" placement="bottom" effect="light" class="iconfont-show-webo">
                                            <el-button class="iconfont icon-weibo"></el-button>
                                    </el-tooltip>
                                </a>
                                <a href="https://github.com/gcordon">
                                    <el-tooltip content="" placement="bottom" disabled="false" effect="light" class="iconfont-show-github">
                                        <el-button class="iconfont icon-GitHub-copy"></el-button>
                                    </el-tooltip>
                                </a>
                                <a href="javascript:;">
                                    <el-tooltip content="邮箱: 1099065111@qq.com" placement="bottom" effect="light" class="iconfont-show-email">
                                        <el-button class="iconfont icon-Email"></el-button>
                                    </el-tooltip>
                                </a>
                                <a href="javascript:;">
                                <el-tooltip content="暂无简历" placement="bottom" effect="light" class="iconfont-show-jianli">
                                    <el-button class="iconfont icon-gerenjianli"></el-button>
                                </el-tooltip>
                                </a>
                            </p>
                        </figcaption>
                    </figure>
                </section>
                <!-- 留言 -->
                <!-- 这里只帅选10条数据 -->
                <section class="message">
                    <div class="message-title">
                        <h3>
                            留言
                        </h3>
                    </div>
                    <ul v-if="messageData" v-for="item in messageData" :key="item.id">
                        <li class="message-item" >
                                <div class="message-i-image">
                                    <img src="../public/img/me.jpg" alt="">
                                </div>
                                <div class="message-i-content">
                                    <p>
                                        <router-link :to="{path: '/message'}">
                                            {{item.userName}}
                                        </router-link>
                                    </p>
                                    <p>{{item.userContent}}</p>
                                </div>
                        </li>
                    </ul>
                </section>
                <!-- <section class="label">
                    <ul>
                        <li class="label-title">
                            <h3>标签</h3>
                        </li>
                        <li>
                            <span>
                                <a href="javascript:;">杂谈</a>
                            </span>
                            <span>
                                <a href="javascript:;">JS</a>
                            </span>
                            <span>
                                <a href="javascript:;">Node</a>
                            </span>
                            <span>
                                <a href="javascript:;">HTML5</a>
                            </span>
                        </li>
                    </ul>
                </section> -->
            </div>
        </div>
        <div class="clearfix">
        </div>
    </div>
    <!-- 主要 -->

    <!-- 底部版权 -->
    <blog-footer></blog-footer>
 </div>

</template>
<script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"></script>
<script>
import marked from 'marked'
import axios from 'axios'
import BlogHeader from '@/components/blog-header.vue'
import BlogFooter from '@/components/blog-footer.vue'
// jquery bootstrap 引入
import 'jquery/dist/jquery.min.js'
// loading template
import vueLoading from 'vue-loading-template'
export default {
    data() {
        return {
            articleResult: null, // 文章数据保存
            SelectNumber: 3, // 文章数据帅选
            loading: true, // loding效果的boolean
            countType: 'all', // 文章总类型帅选
            limit: 10, // 帅选指定留言数
        }
    },
    components: {
      vueLoading, //loading 模板
      BlogHeader, // header
      BlogFooter, // footer
    },
    mounted() {
        this.markdown()
        // 获取文章数据
        this.getArticleData()
        // 帅选指定留言数
        this.getMessage()
    },
    computed: {
        // 解析markdown
        // compiledMarkdown: function (data) {
        //     return marked(data, { sanitize: true })
        // }
    },
    methods: {
        // 跳转到文章页，
        toArticleRouter(_id) {
            // alert('点击了！')
            // 文章点击数+1
            axios.get('/api/article', {
                params: {
                    _id: _id,
                }
            })

                .then( result => {
                    if (!result) {
                        throw new Error('articlePulsDev result is Not Found')
                    }
                    if (result.data.status == '0') {
                        this.$router.push({name: 'article', query: {articleId: _id}})
                    } else if (result.data.status == '1') {
                        throw new Error('文章点击数+1 失败了', result)
                    }
                })
                .catch(err => {
                    console.log('getArticleData Error:',err)
                })
        },
        // 分类
        shareOne(shareOne) {
            this.countType = shareOne // 传递需要输出的类型, [q, h, z]
            this.getArticleData()
        },
        // 解析markdown
        markdown() {
            marked.setOptions({
                renderer: new marked.Renderer(),
                gfm: true,
                tables: true,
                breaks: false,
                pedantic: false,
                sanitize: false,
                smartLists: true,
                smartypants: false
            });
        },
        // 获取文章数据
        getArticleData() {
           let that = this
                axios.get('/api/article',{
                    params: {
                        SelectNumber: that.SelectNumber,
                        countType: that.countType,
                    }
                })
                .then(result=> {
                    that.loading = false
                    if (!result) {
                        throw new Error('getArticleData result is Not Found')
                    }
                    if (result.data.status == '0') {
                        var data = result.data.result
                        that.articleResult = data
                        for (const re of that.articleResult) {
                            re.content = marked(re.content)
                        }
                    } else {
                        throw new Error(`error ${result.data}`)
                    }
                })
                .catch(err => {
                    console.log('getArticleData Error:',err)
                })
        },
        getArticle() {
            // 显示loading按钮
            this.loading = true
            // 重新获取数据
            this.getArticleData()
        },
        // 加载更多文章数据
        getMoreArticle() {
            this.SelectNumber += 3
            this.getArticle()
        },
        // 帅选总类型[q:前端, h: 后端, z: 其他]  (默认为 'all')
        selectCountType(CountType) {
            alert(CountType)
            this.countType = CountType
            this.getArticle()
        },
        // 获取10条留言
        getMessage() {
            let that = this
            axios.get('/api/message',{
                    params: {
                        limit: that.limit
                    }
                })
                .then( result => {
                    that.messageData = result.data.result
                })
                .catch( err => {
                    console.error(err)
                })
        },
    }
}
</script>

<style>
@import "../public/less/public.less";
@import '../public/css/style.css';

#header header nav ul li a {
    color: #fff!important;
}
#header header nav ul li a:hover, #header header nav ul li a:active,#header header nav ul li a:visited
 {color:#fff!important;text-decoration: none!important;}
</style>

<style lang="less" scoped>
@import "../public/less/public.less";
@import '../public/css/style.css';
#main {

}
// 文章列表
#main .article-list {
    width: 70%;
    max-width: 70%;
    height: 100%;
    min-height: 500px;
    box-shadow: 0 16px 24px 1px rgba(0,0,0,.14), 0 6px 50px 1px rgba(0,0,0,.12), 0 6px 10px -5px rgba(0,0,0,.2);
    background-color: #fff;
    float: left;
    border-radius: 10px;
    z-index: 3;
    position: relative;
    top: -60px;
    padding: 20px 0;
}
#main .article-list article {
    width: 98%;
    margin: 0 auto 20px;
    padding: 5px;
    text-align: center;
    border-bottom: 1px solid #ddd;
    overflow: hidden;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
#main .article-list article hgroup {
    position: relative;
    top: 0;
    left: 0;
}
#main .article-list article hgroup h2 a {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 28px;
    height: 60px;
    line-height: 60px;
    color: #000;
}
#main .article-list article hgroup h2 a:hover {
    color: #ff3030;
}
#main .article-list article hgroup p {
    height: 20px;
    line-height: 20px;
}
#main .article-list article hgroup .type {
    display: inline-block;
    width: 100px;
    position: absolute;
    height: 40px;
    line-height: 40px;
    left: -25px;
    bottom: 0;
    background-color: #96e1fc;
}
#main .article-list article hgroup .type a {
    color: #fff;
    font-size: 18px;
    letter-spacing: 2px;
}
#main .article-list article section {
    padding: 30px;
}
#main .article-list article section > img {
    width: 100%;
}
#main .article-list article button.all,#main .article-list article button.all > a {
    background-color: #96e1fc;
    padding: 6px 12px;
    color: #ffffff;
    border-radius: 10%;
}
// 翻页
#main .article-list .flip {
    height: 40px;
    line-height: 40px;
    width: 98%;
}
.getMore {
    float: left;
    text-align: center;
    width: 100%;
    padding: 10px 5px;
}
.getMore button {
    background-color: #61bad4;
    display: inline-block;
    width: 120px;
    height: 40px;
    border-radius: 5px;
    font-weight: bolder;
    transition: all 0.8s ease-in-out;
    color: #fff;
}
.getMore button:hover {
    background-color: #2d7c94;
}

// aside侧边栏
#main .aside {
    width: 30%;
    height: 100%;
    max-width: 30%;
    // background: #fcfcfc;
    float: right;
    padding-left: 30px;
}
#main .aside section.personal {
    margin-top: 50px;
    cursor: pointer;
}
#main .aside section.personal hgroup {
    font-size: 13px;
    line-height: 1.5;
}
#main .aside section.personal figure {
    width: 100%;
    height: 90px;
    margin: 10px 0;
}
#main .aside section.personal figure img {
    border-radius: 5%;
    min-width: 28%;
    height: 100%;
    float: left;
}
#main .aside section.personal figure figcaption {
    float: left;
    padding-left: 16px;
    width: 60%;
    height: 100%;
    letter-spacing: 1px;
}
#main .aside section.personal figure figcaption hgroup > h2 {
    color: #3a8bbb;
    font-size: 15px;
}
#main .aside section.personal figure figcaption hgroup > h3 {
    font-size: 13px;
    color: #ccc;
}
// iconfont图标
#main .aside section.personal figure figcaption .iconfont-show   {
}
#main .aside section.personal figure figcaption .iconfont-show  button {
    margin: 5px;
    padding: 0;
    margin-left: 0;
    font-size: 32px;
    background-color: transparent;
    float: left;
}
#main .aside section.personal figure figcaption .iconfont-show .iconfont-show-webo{
    color: red;
}
#main .aside section.personal figure figcaption .iconfont-show .iconfont-show-github {
    color: rgb(85, 172, 238);
}
#main .aside section.personal figure figcaption .iconfont-show .iconfont-show-email {
    color: rgb(59, 89, 152);
}
#main .aside section.personal figure figcaption .iconfont-show .iconfont-show-jianli {
    color: rgb(128, 185, 83);
}
// 留言
#main .aside section.message {
    margin: 50px 0;
}
#main .aside section.message ul {

}
#main .aside section.message .message-title {
    height: 25px;
    border-bottom: 3px solid #ddd;
    margin-bottom: 10px;
}
#main .aside section.message .message-title h3 {
    font-size: 13px;
    color: #ccc;
}
#main .aside section.message ul li.message-item {
    border-bottom: 1px dashed #999;
    height: 40px;
    padding: 10px 0;
    box-sizing: content-box!important; // 让padding占距离
}
#main .aside section.message ul li.message-item a{
    color: #999;
}

// 留言者头像
#main .aside section.message ul li.message-item .message-i-image {
    height: 100%;
    width: 14%;
    float: left;
    margin-right: 10px;
}
#main .aside section.message ul li.message-item .message-i-image img {
    width: 100%;
    height: 100%;
    border-radius: 10%;
}
#main .aside section.message ul li.message-item .message-i-content {
    font-size: 12px;
}
#main .aside section.message ul li.message-item .message-i-content > p:first-child {
    color: #333;
    font-size: 14px;
    font-weight: bold;
}
// 标签
#main .aside section.label ul {

}
#main .aside section.label ul li.label-title {
    height: 25px;
    border-bottom: 3px solid #ddd;
    margin-bottom: 10px;
}
#main .aside section.label ul li.label-title h3 {
    font-size: 13px;
    color: #ccc;
}
#main .aside section.label ul span {
    display: inline-block;
    margin: 10px;
    border-radius: 50%;
    padding: 1px;
    font-size: 13px;
    background-color: #eee;
}
#main .aside section.label ul span > a {
    display: block;
    padding:5px 10px;
    color: #333;
    font-family: 'Times New Roman', Times, serif;
}
// 兼容手机，平板，电脑
@media screen and (max-width:480px) {
     #main .aside {
        display: none;
    }
    // 文章列表
    #main .article-list {
        width: 480px!important;
        max-width: 480px!important;
        border-radius: normal;
    }
    #main .aside {
        display: none;
    }
    .container {
        width: 100%!important;
        padding: 0;
        margin: 0;
    }
}
@media screen and (max-width:768px) {
     #main .aside {
        display: none;
    }
    // 文章列表
    #main .article-list {
        width: 750px;
        max-width: 750px!important;
        border-radius: normal;
    }
    #main .aside {
        display: none;
    }
    .container {
        width: 100%!important;
        padding: 0;
        margin: 0;
    }
}

</style>
