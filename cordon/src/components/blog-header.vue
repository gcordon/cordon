<template>
    <div id="header" class="clearfix">
        <header class="headerShow headerHeightShow ">
            <nav class="container">
                <ul>
                    <li>
                        <router-link to="/blog">
                            <i class="iconfont icon-shouye1-copy"></i>
                            首页
                        </router-link>
                    </li>
                    <li>
                        <a href="javascript:;" @click="goBlog" id="classification" @mouseenter="HoverClassification" @mouseleave="tHoverClassification">
                            <i class="iconfont icon-shezhi-tianchong"></i>
                            分类
                            <ul v-show="is_classification">
                                 <li>
                                    <a href="javascript:;" @click="getOne('all')">所 有</a>
                                </li>
                                <li>
                                    <a href="javascript:;" @click="getOne('q')">前 端</a>
                                </li>
                                <li>
                                    <a href="javascript:;" @click="getOne('h')">后 端</a>
                                </li>
                                <li>
                                     <a href="javascript:;" @click="getOne('z')">杂 谈</a>
                                </li>
                            </ul>
                        </a>
                    </li>
                    <li>
                        <router-link to="/message">
                            <i class="iconfont icon-message"></i>
                            留言
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/about">
                            <i class="iconfont icon-guanyuwomen"></i>
                            关于我
                        </router-link>
                    </li>
                </ul>
            </nav>
        </header>
        <h1 id="cordon" class="container">Cordon</h1>
    </div>
</template>
<script>
    export default {
        name: 'Header',
        data() {
            return {
                is_classification: false, // 分类显示
            }
        },
        methods: {
            HoverClassification() {
                this.is_classification = true
            },
            tHoverClassification() {
                this.is_classification = false
            },
            //获取当前样式
            getStyle(element, att) {
                //特性侦测
                if(window.getComputedStyle){
                    //优先使用W3C规范
                    return window.getComputedStyle(element)[att];
                }else{
                    //针对IE9以下兼容
                    return element.currentStyle[att];
                }
            },
            init() {

            },
            getOne(tag) { // 分类 父子传递，blog.vue 使用 blog-header,然后接受这个getOne的传递再次从数据库里拿取需要的类型
                this.$emit('shareOne', tag)
                this.$router.push({path: '/blog'})
            },
            // 跳转到blog
            goBlog() {
                this.$router.push({path: '/blog'})
            }
        },
        mounted() {
        }
    }
</script>
<style lang="less" scoped>
@import "../public/less/public.less";
@import '../public/css/style.css';
// h1标签
#cordon {
    font-family:Georgia, 'Times New Roman', Times, serif;
    margin-top: 50px;
    color: #fff;
    left: 30px;
    letter-spacing: 4px;
    font-size: 80px;
    background: transparent;
}


#header {
    width: 100%;
    height: 280px;
    background: url('../public/img/background_4.jpg') no-repeat;
    overflow: hidden;
    background-size:cover;
}
#header header {
    max-height: 100px;
    background-color: rgba(0, 0, 0, 0.2);
}
#header header nav ul li {
    width: 80px;
    line-height: 36px;
    height: 36px;
    display: inline-block;
    text-align: center;
}
#header header nav ul li a {
    display: block;
    cursor: pointer;
}
#classification {
    position: relative;
}
#classification > ul {
    position: absolute;
    top: 36px;
    left: 0;
    z-index: 100;
    opacity: 1;
    animation: classificationAnimation 1.8s ease;
}
@keyframes classificationAnimation {
    0%{
        opacity: 0.2;
    }
    100% {
        opacity: 1;
    }
}
#classification > ul li {
    width: 180%!important;
    height: 20px;
    background-color:rgba(0,0,0,0.4);
}
#classification > ul li a {
    display: block;
    font-weight: bold;

}
#classification > ul li a:hover {
      color: #333!important;
    background-color: #fff!important;
}
#header header nav ul li a:hover  {
    color: #fff;
    background-color: rgba(255,255,255, 0.2);
}

</style>
