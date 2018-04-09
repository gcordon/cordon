<template>
    <div id="admin">
        <admin-header class="clearfix">
        </admin-header>
        <div id="slider" class="clearfix">
            <admin-slider >
            </admin-slider>
        </div>
         <div id="content" class="clearfix">
            <transition name="fade" mode="out-in"><router-view></router-view></transition>
        </div>
    </div>
</template>

<script>
    import adminHeader from './header'
    import adminSlider from './slider'
    export default {
        name: 'admin',
            data () {
                return {

                }
            },
            methods: {
                handleOpen(key, keyPath) {
                    console.log(key, keyPath);
                },
                handleClose(key, keyPath) {
                    console.log(key, keyPath);
                }
            },
            components: {
                adminHeader,
                adminSlider,
            }
        }
</script>
<style lang="less">
.clearfix:after,.clearfix:after{content:".";display:block;height:0;clear:both;visibility:hidden}
body,h1,h2,h3,h4,p,h5 {
    margin: 0;
    padding: 0;
}
body {
    // background-color: #324157;
}
html {
    font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
}

</style>
