<template>
    <div id="blog">
        <link rel="stylesheet" href="http://at.alicdn.com/t/font_604071_m8m5gwomj3v7vi.css">
        <!-- 头部导航 -->
        <blog-header></blog-header>
        <!-- 文章详情 -->
        <article-main></article-main>
        <!-- 底部版权 -->
        <blog-footer></blog-footer>
    </div>
</template>
<script>
import BlogHeader from './header.vue'
import BlogFooter from './footer.vue'
import ArticleMain from './article-main.vue'
    export default {
        name: 'blog',
        data() {
            return {

            }
        },
        components: {
            BlogHeader,
            BlogFooter,
            ArticleMain,
        }
    }
</script>
<style lang="less">
@import "../public/less/public.less";
@import '../public/css/style.css';

</style>

