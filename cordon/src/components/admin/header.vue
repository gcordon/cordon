<template>
    <div id="adminHeader" class="clearfix">
        <div class="cms">
            <h2>后台管理系统</h2>
        </div>
        <div class="logout">
            <el-dropdown trigger="click">
              <img src="../../public/img/background_2.jpg" alt="">
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item @click="logoutAdmin">退出</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
    </div>
</template>
<script>
 export default {
    name: 'admin-header',
        data () {
            return {

            }
        },
        methods: {
            // 退出登录
            logoutAdmin() {

            }
        }
    }
</script>
<style lang="less">
#adminHeader {
    background-color:#2e363f;
        .cms {
            float: left;
        }
        .cms h2 {
            color: #fff;
            font-size: 18px;
            padding: 20px;
            text-indent: 20px;
            letter-spacing: 2px;
        }
        .logout {
            width: 30px;
            height: 30px;
            float: right;
            margin: 20px 50px;
            cursor: pointer;
        }
        .logout img {
            width: 100%;
            height: 100%;
            border-radius: 50%;
        }
}
</style>
