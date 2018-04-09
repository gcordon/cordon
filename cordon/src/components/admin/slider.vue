<template>
    <div id="slider">
        <el-row class="tac">
            <el-col >
                <el-menu
                default-active="2"
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose"
                background-color="#324157"
                text-color="#fff"
                active-text-color="#ffd04b">
                    <el-submenu index="1">
                        <template slot="title">
                            <i class="el-icon-document"></i>
                            <span>文章导航</span>
                        </template>
                        <el-menu-item-group>
                            <template slot="title">文章</template>
                            <el-menu-item index="1-1" @click="routerTo('addArticle')">添加文章</el-menu-item>
                            <el-menu-item index="1-2" @click="routerTo('showArticle')">全部文章</el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                    <el-menu-item index="2">
                        <i class="el-icon-menu"></i>
                        <span slot="title">留言导航</span>
                    </el-menu-item>
                    <el-menu-item index="3" >
                        <i class="el-icon-document"></i>
                        <span slot="title">关于我</span>
                    </el-menu-item>
                </el-menu>
            </el-col>
        </el-row>
    </div>
</template>
<script>
    export default {
        name: 'slider',
            data () {
                return {

                }
            },
            methods: {
                routerTo(url) {
                    this.$router.push({name:`${url}`})
                },
                handleClose() {

                },
                handleOpen() {

                }
            }
        }
</script>
<style lang="less">
#slider {
    float: left;
    width: 250px;
    height: 700px;
    background: #2e363f;
}
.el-submenu .el-menu-item {
    background: #1f2d3d;
}
</style>

