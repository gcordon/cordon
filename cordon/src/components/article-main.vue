<template>
    <div id="article" class="container-article clearfix" >
        <!-- bootstrap 引入 -->
        <link href="https://cdn.bootcss.com/bootstrap/3.3.7/css/bootstrap.css" rel="stylesheet">
        <!--  -->
        <vue-loading v-show="loading" type="bars" color="#d9544e" :size="{ width: '50px', height: '50px' }"></vue-loading>
        <div class="article-content" v-if="articleResult">
            <article>
                <hgroup>
                    <h2 v-text="articleResult.title">
                    </h2>
                    <p>
                        <span class="author">
                            {{articleResult.author}}
                        </span>
                            |
                        <span class="date">
                            {{articleResult.date}}
                        </span>
                        <span>
                            <i class="iconfont icon-zhiboguankanshu"></i>
                        </span>
                    </p>
                </hgroup>
                <section v-html="articleResult.content">

                </section>
            </article>
        </div>
    </div>
</template>
<script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"></script>
<script>
// jquery bootstrap 引入
import 'jquery/dist/jquery.min.js'
import marked from 'marked'
import axios from 'axios'
// jquery bootstrap 引入
import 'jquery/dist/jquery.min.js'
// loading template
import vueLoading from 'vue-loading-template'
export default {
    name: 'articleMain',
    data() {
        return {
            articleResult: null,
            loading: true, // loding效果的boolean
        }
    },
    components: {
        vueLoading,
    },
    mounted() {
        this.markdown()
        // 获取文章数据
        this.getArticleData()
    },
    computed: {
        // 解析markdown
        compiledMarkdown: function (data) {
            return marked(data, { sanitize: true })
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
        },
        getArticleData() {
            let that = this
            axios.get(`/api${this.$route.fullPath}`)
                .then(result=> {
                    if (result.data.status == '1') {
                        that.$router.redirect('/')
                    }
                    if (!result) {
                        throw new Error(`getArticleData Error: ${JSON.stringify(result)}`)
                    }
                    this.loading = false
                    var data = result.data.result
                    that.articleResult = data
                    that.articleResult.content = marked(that.articleResult.content)
                })
                .catch(err => {
                    console.log('getArticleData Error:',err)
                })
        },
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
#article .article-content p img {
    width: 100%;
}
</style>
