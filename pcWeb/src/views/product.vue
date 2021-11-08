<template>



<div>   
    <headerNav></headerNav>
    <!-- <span class="">产品页</span> -->
    <div class="main" >
      <ul style="position:absolute;left:0;bottom:0">
        <li class="active">品牌展示</li>
        <li>产品展示</li>
        <li><router-link to="/index" style="text-decoration:none; color:#fff">返回首页</router-link></li>
      </ul>
    </div>
    <div class="pinpai">
      <div class="left"><img class="bigger" style="width:100%;height:100%" src="../assets/pinpai.png" alt=""></div>
      <div class="right"><img src="../assets/pinpaiLogo.png" alt="" style="position:absolute;top:225px; left:-170px"></div>
    </div>
    <div class="chanpin">
      <div class="left"><img src="../assets/chanpinLogo.png" alt="" style="position:absolute;top:225px;right:-170px"></div>
      <div class="right"><img class="bigger" style="width:100%;height:100%" src="../assets/chanpin.png" alt=""></div>
    </div>
    <footerNav></footerNav>
</div>    
  
</template>

<script>
import headerNav from '@/components/header'

import footerNav from '@/components/footer'

export default {
  name: 'productPage',
  components: {headerNav,footerNav},
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted(){
    window.scroll(0,0);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  scoped >
.main{
  height: 890px;
  background-image: url('../assets/goodHand.png');
  background-size: 100% 100%;
  position: relative;
}
ul{
  display: flex;
  justify-content: center;
  cursor: pointer;
}
ul li {
  width: 240px;
  height: 100px;
  color: #fff;
  font-size: 20px;
  background-color: #005BAB;
  display: flex;
  justify-content: center;
  align-items: center;
}
ul li:hover{
  background-color: #ECAC2B;
}
.active{
  background-color: #ECAC2B;
}

.pinpai,.chanpin{
  display: flex;
}

img{
  width: 340px;
  height: 150px;
}

.pinpai .left{
  width: 75%;
  height: 600px;
  overflow: hidden;
  /* background-image: url('../assets/pinpai.png');
  background-size: 100% 100%; */
}
.pinpai .right{
  position: relative;
  width: 25%;
  height: 600px;
  z-index: 10;
  background-color: #005BAB;
}

.chanpin .right{
  /* background-image: url('../assets/chanpin.png');
  background-size: 100% 100%; */
  overflow: hidden;
  width: 75%;
  height: 600px;
}

.chanpin .left{
  position: relative;
  width: 25%;
  height: 600px;
  background-color: #ECAC2B;
  z-index: 10;
}

.bigger{
  transition: all 0.6s;
}

.bigger:hover{
  transform: scale(1.03);
}
</style>
