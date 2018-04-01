<template>
    <div id="blog">
        <link rel="stylesheet" href="http://at.alicdn.com/t/font_604071_dqkf3ecocfupu8fr.css">
        <!-- 头部导航 -->
        <blog-header></blog-header>
        <blog-main></blog-main>
        <!-- 底部版权 -->
        <blog-footer></blog-footer>
    </div>
</template>
<script>
import BlogHeader from './blog-header.vue'
import BlogFooter from './blog-footer.vue'
import BlogMain from './main.vue'
    export default {
        name: 'blog',
        data() {
            return {

            }
        },
        components: {
            BlogHeader,
            BlogFooter,
            BlogMain,
        }
    }
</script>
<style lang="less">
@import "../public/less/public.less";
@import '../public/css/style.css';

</style>

