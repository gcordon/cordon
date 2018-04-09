<template>
    <div id="adminArticle" style="text-indent:20px;">
        <div>
            <h3 class="title">标题</h3>
            <el-input placeholder="请输入内容" v-model="ArticleTitle" style="width:70%;"></el-input>
        </div>
        <div >
            <h3 class="title">类型</h3>
            <span>总类型：</span>
            <el-select v-model="CountTypeValue" placeholder="请选择文章类型" style="text-indent:0px;">
                <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                    select
                    >
                </el-option>
            </el-select>
            <span>类型</span>
            <el-input v-model="TypeValue" placeholder="类型(JS/PHP/HTML5)" style="width:150px;" >
            </el-input>
        </div>
        <div>
            <h3 class="title">内容</h3>
            <section class="editor" >
                <quill-editor   class="quill-editor" ref="myTextEditor" v-model="ArticleContent" :config="editorOption">

                </quill-editor>
            </section>
        </div>
        <div style="float:left;width:80%;margin-top:80px;text-align:center;">
           <el-row>
               <el-button type="primary" @click="onSubmit">立即创建</el-button>
            </el-row>
        </div>

    </div>
</template>
<script>
    import { quillEditor } from 'vue-quill-editor'
    import validator from 'validator'
    import axios from 'axios'
    export default {
        name:'UE',
        data () {
            return {
                ArticleTitle: '',  // 文章标题
                ArticleContent:'', // 文章内容
                CountTypeValue: '',  // 文章总类型
                TypeValue: '', // 文章类型
                // 文章累心帅选
                options: [
                    {
                        value: 'q',
                        label: '前端',
                    },
                    {
                        value: 'h',
                        label: '后端',
                    },
                    {
                        value: 'z',
                        label: '杂谈',
                    },
                ],
                editorOption: {

                },

            }
        },
        mounted() {

        },
        methods:{
            getUEContent() {
                return this.editor.getContent()
            },
            // 提交表单
            onSubmit() {
                var that = this
                if (
                    (!validator.trim(this.ArticleTitle) || !validator.trim(this.ArticleContent))
                    ||
                    (!validator.trim(this.CountTypeValue) || !validator.trim(this.TypeValue))
                ) {
                    this.$message({
                        showClose: true,
                        message: '标题或内容不能为空,类型和总类型！',
                        type: 'error'
                    });
                    return
                }
                // 开始发表文章  (添加一篇文章)
                axios.post('/api/article/addArticle',{
                        title : that.ArticleTitle,
                        content : that.ArticleContent,
                        countType : that.CountTypeValue,
                        type : that.TypeValue,
                    })
                    .then( result=> {
                        if (result.data.status == '0') {
                            this.$message({
                                showClose: true,
                                message: '发表成功',
                                type: 'success'
                            });
                            that.ArticleTitle = '',
                            that.ArticleContent = ''
                            that.CountTypeValue =  ''
                            that.TypeValue =  ''
                        } else {
                            throw new Error(`addArticle 发表文章出错`)
                        }
                    })
                    .catch(err => {
                        console.error('addArticle 发表文章出错',err)
                    })

            }
        },
        components:{
            quillEditor
        }
    }
</script>
<style>
.editor {
    height: 300px;
    float: left;
    width: 80%;
    margin-left: 10px;
}
.quill-editor {
    float: left;
    height: 305px;
}
.title {
    display: block;
    font-size: 20px;
    padding: 10px;
    font-weight: bolder;
}
</style>
