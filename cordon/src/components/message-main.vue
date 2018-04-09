<template>
  <div id="message" class="container-article">
        <div class="message-form">
            <h2>Leave a Reply</h2>
            <textarea name="" ref="userContent" id="" cols="30" rows="10"></textarea>
            <p class="clearfix">
                <input type="text" ref="userName" placeholder="起个名吧！">
                <input type="text" ref="userEmail" placeholder="你的邮箱哦！">
            </p>
            <p>
                <button @click="ValidatorMessage()" >发布评论</button>
            </p>
            <p>
                <!-- 提示 -->
            </p>
        </div>
        <div class="message-content clearfix" >
            <ul v-if="messageData">
                <li v-for="item in messageData" :key="item.id" >
                    <figure>
                        <img src="../public/img/me.jpg" alt="">
                        <figcaption>
                            <h4>{{item.userName}}</h4>
                            <span>{{item.created_at}}</span>
                            <p>
                                {{item.userContent}}
                            </p>
                        </figcaption>
                    </figure>
                </li>
            </ul>
        </div>
  </div>
</template>
<script>
import axios from 'axios'
import validator from 'validator' // 验证
export default {
    name: 'message-main',
    data() {
        return {
            messageData: null
        }
    },
    mounted() {
        // 获取留言
        this.getMessage()
    },
    methods: {
        // 检测评论
        ValidatorMessage() {
            // 检测表单
            let refs = this.$refs
            let [c, u, e] = [refs.userContent.value, refs.userName.value, refs.userEmail.value]
            if (!validator.trim(c)) {
                this.alertMessage('内容 为空！┭┮﹏┭┮', 'warning')
                return false
            }
            if (!validator.trim(u)) {
                this.alertMessage('姓名 为空！┭┮﹏┭┮', 'warning')
                return false
            }
            if (!validator.trim(e)) {
                this.alertMessage('邮箱 为空！┭┮﹏┭┮', 'warning')
                return false
            }
            if (!validator.isEmail(e)) {
                this.alertMessage('邮箱 类型不对！(⊙o⊙)…', 'info')
                return false
            }
            let that = this
            // 提交留言
            axios.post('/api/message',{
                    userName: u,
                    userContent: c,
                    userEmail: e,
                })
                .then( (result)=> {
                    this.alertMessage('留言提交成功 ^_^ ~', 'success')
                })
                .catch( (err)=> {
                    console.error(`提交留言 Error: ${err}`)
                })
        },
        // elementUi 提示框
        alertMessage(ctx, type) {
            this.$message({
                message: `${ctx}`,
                type: type,
                showClose: true,
                duration: 1200
            })
        },
        // 获取留言
        getMessage() {
            let that = this
            axios.get('/api/message')
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
<style lang="less">
#cordon {
    left: 80px!important;
}
.container-article {
    width: 70%;
    margin: 0 auto;
    position: relative;
}
#message {
    padding: 34px 0;
}
// 评论表单
#message .message-form h2 {
    height: 50px;
    font-size: 20px;
}
#message .message-form > p > input,textarea{
    background-color: transparent;
    border: 1px solid #ddd;
}
#message .message-form textarea {
    width: 100%;
}
#message .message-form input {
    display: inline-block;
    width: 46%;
}
#message .message-form input:first-child {
    float: left;
}
#message .message-form input:last-child {
    float: right;
}
#message .message-form button {
    float: right;
    display: block;
    width: 100px;
    height: 40px;
    margin: 10px 0;
    font-size: 14px;
    background-color: #e91e63;
    color: #fff;
    border-radius: 8%;
}
// 评论内容
#message .message-content {
    width: 100%;
}
#message .message-content ul li {
    float: left;
    padding: 20px 0;
    width: 100%;
    border-bottom: 1px solid #ddd;
}
#message .message-content ul li figure {
    height: 80px;
}
#message .message-content ul li figure img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    float: left;
}
#message .message-content ul li figure figcaption {
    padding-left: 20px;
    width: 60%;
    float: left;
}
#message .message-content ul li figure figcaption h4 {
    font-size: 16px;
    color: #333;
}
#message .message-content ul li figure figcaption span {
    font-size: 12px;
    color: #cccccc;
}
</style>

