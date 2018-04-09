<template>
  <div id="start">
    <div id="start-bg">
    </div>
    <div class="start-top">
      <h2>
        Hello, I'm cordon, and this is my blog
      </h2>
    </div>
     <div class="start-bottom">
       <div class="start-b-box">
        <button class="start-b-github">
          <a href="https://github.com/gcordon">GitHub</a>
        </button>
        <button class="start-b-blog">
            <router-link to="/blog">Blog</router-link>
        </button>
        <button class="start-b-weibo">
          <a href="https://weibo.com/u/5442350083">WeiBo</a>
        </button>
       </div>
    </div>
  </div>
</template>
<script>
export default {
    name: 'start',
    data() {
        return {

        }
    },
    mounted() {
    },
    methods: {

    }
}
window.onload = function() {
    const log = console.log.bind(console)
    const e = el => document.querySelector(el)
    const randomBetween = (start, end) => {
        let n = Math.random() * (end - start + 1)
        return Math.floor(n + start)
    }

}

</script>
<style lang="less" scoped>
@import "../public/less/public.less";
body {
    margin: 0!important;
    padding: 0!important;
    background: red!important;
    background-size:100% 120%;
}
#start {
  position: relative;
  top: 0;
  left: 0;
  color: #fff;
  min-height: 740px;
  background:url('../public/img/background_2.jpg');
}
#start #start-bg {
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    opacity: 1;
    // background: url('../public/img/background_2.jpg') no-repeat;
    // background-size:100% 100%;
    // background-attachment:fixed;
    // overflow: hidden;
    // animation: startAnimation 1s ease-in;
    //   -webkit-filter: blur(5px); /* Chrome, Opera */
    //        -moz-filter: blur(5px);
    //         -ms-filter: blur(5px);
    //             filter: blur(5px);
}
#start .start-top {
  position: absolute;
  top: 200px;
  left: 0;
  z-index: 2;
  width: 100%;
  height: 200px;
  animation: StartTopAnimation 0.8s linear;
}
@keyframes StartTopAnimation {
  0%{
    top: 150px;
  }
  100%{
    top: 200px;
  }
}
#start .start-top h2 {
  padding: 10px;
  width: 480px;
  text-align: center;
  margin: 0 auto;
  font-weight: bolder;
  font-size: 34px;
  font-family: "Hiragino Sans GB";
}
#start .start-bottom {
  position: absolute;
  top: 400px;
  left: 0;
  z-index: 2;
  width: 100%;
  height: 200px;
  animation: StartBottomAnimation 0.8s linear;
}
@keyframes StartBottomAnimation {
  0%{
    top: 530px;
  }
  100%{
    top: 400px;
  }
}
#start .start-bottom .start-b-box {
  width: 680px;
  margin: 0 auto;
  text-align: center;
}
#start .start-bottom button {
  cursor: pointer;
  display: inline-block;
  margin: 0 10px;
  width: 160px;
  height: 60px;
  font-size: 18px;
  border: none;
  background: transparent;
  color: #fff;
  font-family: "Hiragino Sans GB";
  border: 1px solid #fafafa;
  transition: all 0.5s linear;
}
#start .start-bottom button a{
    display: block;
}
#start .start-bottom button a:hover{
    color: #fff!important;
}
#start .start-bottom button:hover {
  border: 1px solid #fff;
  box-shadow: 0px 2px 20px 3px #fafafa;
}
.perspectiveAnimation {
  transform: perspective(0) rotateY(0);
  animation: transforms 1.5s linear;
}
@keyframes startAnimation {
  0% {
   opacity: 0.3;
  }
  100% {
   opacity: 1;
  }
}
@keyframes transforms {
  0%{
    transform: perspective(0) rotateY(0);
  }
  100%{
    transform: perspective(1000px) rotateY(45deg);
  }
}

</style>

