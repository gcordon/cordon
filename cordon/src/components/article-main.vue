<template>
    <div id="article" class="container-article clearfix" >
        <!-- bootstrap 引入 -->
        <link href="https://cdn.bootcss.com/bootstrap/3.3.7/css/bootstrap.css" rel="stylesheet">
        <!--  -->
        <div class="article-content">
            <article>
                <hgroup>
                    <h2>
                        css垂直居中总结
                    </h2>
                    <p>
                        <span class="author">
                            by JhonXY
                        </span>
                            |
                        <span class="date">
                             2017-09-13 12:16:35
                        </span>
                    </p>
                </hgroup>
                <section v-html="compiledMarkdown">

                    </section>
            </article>
        </div>
    </div>
</template>
<script>
import marked from 'marked'
// jquery bootstrap 引入
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'


export default {
    data() {
        return {
            input: `> * 整理知识，学习笔记
> * 发布日记，杂文，所见所想
> * 撰写发布技术文稿（代码支持）
> * 撰写发布学术论文（LaTeX 公式支持）`
        }
    },
    mounted() {
        this.markdown()
    },
    computed: {
        compiledMarkdown: function () {
            console.log(marked(this.input, { sanitize: true }))
            return marked(this.input, { sanitize: true })
        }
    },
    methods: {
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
        }
    }
}
</script>
<style lang="less">
@import "../public/less/public.less";
@import '../public/css/style.css';
.container-article {
    width: 70%;
    margin: 0 auto;
    position: relative;
}
#cordon {
    left: 80px!important;
}
// 文章列表
#article .article-content {
    width: 100%;
    min-width: 70%;
    height: 100%;
    min-height: 500px;
    box-shadow: 1px 1px 2px rgba(0,0,0,.08);
    background-color: #fff;
    float: left;
    border-radius: 1%;
    z-index: 3;
    position: relative;
    top: -60px;
    padding: 20px 0;
}

// 文章主内容
#article .article-content article {
    width: 70%;
    margin: 0 auto;
}
#article .article-content article hgroup {
    padding: 30px 0;
}
#article .article-content article hgroup p {
    margin-top: 10px;
}
#article .article-content article hgroup h2 {
    height: 60px;
    font-size: 43px;
    line-height: 1;
    font-weight: normal;
    display: inline-block;
}
#article .article-content article hgroup span.author {
    color: #333;
    font-family: Arial, Helvetica, sans-serif;
}
</style>
