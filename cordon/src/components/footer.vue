<template>

    <div id="footer" style="clear:both:" >
        <div class="clearfix"></div>
        <footer>
                <p>
                    已默默运行了 0 年 0 天 0 小时 0 分钟 0 秒  <i class="iconfont icon-weixiao"></i>
                </p>
                <p>
                    Copyright © 2018 cordon
                </p>
        </footer>
    </div>
</template>
<script>
    export default {
        name: 'Footer',
        data() {
            return {

            }
        }
    }
</script>
<style lang="less" scoped>
@import "../public/less/public.less";
@import '../public/css/style.css';
#footer {
    width: 100%;
    height: 100%;
    font-size: 13px;
    margin-top: 50px;
    text-align: center;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    background-color: rgba(0,0,0,0.8);
    color: @white;
}

</style>
