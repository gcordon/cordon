<template>
    <div id="main">
        <div class="container">
            <!-- 文章 -->
            <div class="article-list" id="article">
                <article>
                    <hgroup class="title">
                        <h2>
                            <a href="">jQuery源码分析</a>
                        </h2>
                        <p>发布于 2017-12-05 21:56:03</p>
                         <span class="type">
                             <a href="">JS</a>
                         </span>
                    </hgroup>
                    <section>
                        实现效果
                        页面单元素垂直居中，作为一个垂直居中的最外层容器（需要对html和body有所设置）。
                        子元素垂直居中的两种实现，效果叠加实现标签效果。
                        /* 垂直居中嵌套效果 */ html,...
                    </section>
                    <button class="all">
                        <a href="./article?articleId=111111111111">阅读全文</a>
                    </button>
                </article>

                <div class="flip">
                    <button class="f-upper">
                        <a href="javascript:;">上一页</a>
                    </button>
                    <button class="f-lower">
                        <a href="javascript:;">下一页</a>
                    </button>
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
                    <ul>
                        <li class="message-title">
                            <h3>留言</h3>
                        </li>
                        <li class="message-item">
                            <a href="javascript:;">
                                <div class="message-i-image">
                                    <img src="../public/img/me.jpg" alt="">
                                </div>
                                <div class="message-i-content">
                                    <p>Title</p>
                                    <p>Content</p>
                                </div>
                            </a>
                        </li>
                        <li class="message-item">
                            <a href="javascript:;">
                                <div class="message-i-image">
                                    <img src="../public/img/me.jpg" alt="">
                                </div>
                                <div class="message-i-content">
                                    <p>Title</p>
                                    <p>Content</p>
                                </div>
                            </a>
                        </li>
                        <li class="message-item">
                            <a href="javascript:;">
                                <div class="message-i-image">
                                    <img src="../public/img/me.jpg" alt="">
                                </div>
                                <div class="message-i-content">
                                    <p>Title</p>
                                    <p>Content</p>
                                </div>
                            </a>
                        </li>
                        <li class="message-item">
                            <a href="javascript:;">
                                <div class="message-i-image">
                                    <img src="../public/img/me.jpg" alt="">
                                </div>
                                <div class="message-i-content">
                                    <p>Title</p>
                                    <p>Content</p>
                                </div>
                            </a>
                        </li>
                    </ul>
                </section>
                <section class="label">
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
                </section>
            </div>
        </div>
         <div class="clearfix">
        </div>
    </div>

</template>
<script>
    export default {
        name: 'Main',
        data() {
            return {

            }
        }
    }
</script>
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
    border-radius: 2%;
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
    margin: 0 auto;
}
#main .article-list .flip button {
    margin: 0 30px;
    width: 60px;
    height: 40px;
    line-height: 40px;
    display: inline-block;
    background-color: #96e1fc;
    border-radius: 10%;
}

#main .article-list .flip button  a {
    display: block;
}
#main .article-list .flip button.f-upper {
    float:left;
}
#main .article-list .flip button.f-lower {
    float: right;
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
#main .aside section.message ul li.message-title {
    height: 25px;
    border-bottom: 3px solid #ddd;
    margin-bottom: 10px;
}
#main .aside section.message ul li.message-title h3 {
    font-size: 13px;
    color: #ccc;
}
#main .aside section.message ul li.message-item {
    border-bottom: 1px dashed #999;
    height: 40px;
    padding: 10px 0;
    box-sizing: content-box!important; // 让padding占距离
}
#main .aside section.message ul li.message-item > a{
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
    margin: 8px;
    border-radius: 40%;
    background-color: #eee;
}
#main .aside section.label ul span > a {
    display: block;
    padding:5px 20px;
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
        background-color: red;
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
        background-color: red;
        width: 100%!important;
        padding: 0;
        margin: 0;
    }
}

</style>
