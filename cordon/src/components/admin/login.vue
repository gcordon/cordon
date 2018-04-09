<template>
    <!-- rules是表单验证规则 -->
    <el-form :model="LoginForm" :rules="rule" ref="LoginForm" id="login" label-position="left" label-width="0px"  class="demo-ruleForm login-container">
        <h3 class="title">系统登录</h3>
        <!-- 账号 -->
      <!-- prop 是必填的，，，表单域 model 字段，在使用 validate、resetFields 方法的情况下，该属性是必填的	 -->
      <el-form-item prop="adminName">
        <el-input type="text" v-model="LoginForm.adminName" auto-complete="off" placeholder="账号"></el-input>
      </el-form-item>
      <!-- 密码 -->
      <!-- prop 是必填的，，，表单域 model 字段，在使用 validate、resetFields 方法的情况下，该属性是必填的	 -->
      <el-form-item prop="adminPassword">
          <el-input type="password" v-model="LoginForm.adminPassword" auto-complete="off" placeholder="密码"></el-input>
      </el-form-item>
      <!-- 记住密码 -->
      <el-checkbox v-model="checked" checked class="remember">记住密码</el-checkbox>
      <!-- 登录 -->
      <el-form-item size="large">
            <el-button type="primary" style="width:100%;" @click.native.prevent="handlerSubmit" :logining="logining">登录</el-button>
      </el-form-item>
    </el-form>
</template>
<script>
import axios from 'axios'
// md5加密
import crypto from 'crypto'
const log = console.log.bind(console)
export default {
    name: 'login',
    data() {
        return {
            // 表单模型
            LoginForm: {
                adminName: '',
                adminPassword: '',
            },
            // rules是表单验证规则
            rule: {
                adminName: [
                    { required: true, message: '请输入账号', trigger: 'blur' }
                ],
                adminPassword: [
                    { required: true, message: '请输入密码', trigger: 'blur' }
                ]
            },
            // 记住密码
            checked: true,
            // 全部验证一下
            logining: false,
        }
    },
    mounted() {

    },
    methods: {
        // 提交node数据
        handlerSubmit() {
            var that = this
            // 提交数据前验证HTML表单是否正确
            this.$refs.LoginForm.validate( (valid)=> {
                if (valid) {
                    that.logining = true
                    // 检测登录
                    let login = {
                        adminName: this.LoginForm.adminName,
                        adminPassword: this.LoginForm.adminPassword,
                    }
                    // MD5加密
                        var md5 = crypto.createHash("md5");
                        md5.update(login.adminPassword);
                        login.adminPassword = md5.digest('hex');
                    // MD5
                    axios.post('/api/admin/login',login)
                        .then(result=> {
                            if (!result) {
                                throw new Error('adminLogin result is Not Found')
                            }
                            // 写入Session本地储存
                            /*
                                session用户后台路由的判断使用
                             */
                            window.sessionStorage.setItem('admin', that.LoginForm.adminName)
                            // 跳转到后台界面
                            that.$router.push({path: '/admin'})
                        })
                        .catch(err => {
                            console.log('adminLogin Error:',err)
                        })
                    //
                }
            })
        }
    }
}
</script>
<style lang="less" scoped>
@import "../../public/less/public.less";
@import '../../public/css/style.css';
  .login-container {
    /*box-shadow: 0 0px 8px 0 rgba(0, 0, 0, 0.06), 0 1px 0px 0 rgba(0, 0, 0, 0.02);*/
    -webkit-border-radius: 5px;
    border-radius: 5px;
    -moz-border-radius: 5px;
    background-clip: padding-box;
    margin: 180px auto;
    width: 350px;
    padding: 35px 35px 15px 35px;
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
}
.title {
    margin: 0px auto 40px auto;
    text-align: center;
    color: #505458;
    font-size: 16px;
    font-weight: bold;
    letter-spacing: 2px;
}
.remember {
    margin: 0px 0px 35px 0px;
}
</style>

