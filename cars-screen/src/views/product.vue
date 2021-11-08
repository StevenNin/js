<template>



<div>   
    <headerNav></headerNav>
    <!-- <span class="">产品页</span> -->
    <!-- <div class="main" >
      <ul style="position:absolute;left:0;bottom:0">
        <li class="active">品牌展示</li>
        <li>产品展示</li>
        <li><router-link to="/index" style="text-decoration:none; color:#fff">返回首页</router-link></li>
      </ul>
    </div> -->
    <!-- <div class="pinpai"> -->
      <div  class="height370 newsback1 " style="  margin-top: 10%;">
        <!-- <img class="bigger" style="width:100%;height:100%" src="../assets/pinpai.png" alt=""> -->
      </div>
      <div class="height370" style="background-color:#005BAB;position:relative">
        <div v-show="newsBack1" class="dencare" >
          <img style="width:266px; height:42px;" src="../assets/chanpin2.png" alt="">
          <img style="width:266px; height:66px; margin:39px 0 101px 0;" src="../assets/chanpin3.png" alt="">
          <p style="color:#fff; font-size:13px;">立足市场变化 <br>打造中国乃至亚洲最专业的健康管理公司</p>
        </div>
      </div>
      <!-- <div class="right"><img src="../assets/pinpaiLogo.png" alt="" style="position:absolute;top:225px; left:-170px"></div> -->
    <!-- </div> -->
    <!-- <div class="chanpin"> -->
      <!-- <div class="left"><img src="../assets/chanpinLogo.png" alt="" style="position:absolute;top:225px;right:-170px"></div> -->
      <div  class="height370 newsback2 ">
        <!-- <img class="bigger" style="width:100%;height:100%" src="../assets/chanpin.png" alt=""> -->
      </div>
      <div class="height370" style="background-color:#ECAC2B;position:relative">
        <div v-show="newsBack2" class="dencare2" >
          <img style="width:360px; height:42px;" src="../assets/chanpin5.png" alt="">
          <img style="width:273px; height:66px; margin:39px 0 101px 0;" src="../assets/chanpin6.png" alt="">

          <p style="color:#fff; font-size:13px;">畅享生活美食，身体全面健康 <br>解决牙齿敏感、增强牙齿对冷热酸甜的耐受力</p>
        </div>
      </div>
      
    <!-- </div> -->
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
      scroll:'',
      newsBack1:true,
      newsBack2:false,
    }
  },
  mounted(){
    setTimeout(()=>{
      window.scroll(0,0);
    },1)
     window.addEventListener('scroll', this.menu)
  },
  methods() {

  },
  destroyed() {
　　　　window.removeEventListener('scroll', this.menu); // 销毁监听
　},
  methods:{
    menu() {
            this.scroll = document.documentElement.scrollTop || document.body.scrollTop;
            // if(this.scroll > 200) {
            //   this.newsBack1 = true
            // }
            console.log(this.scroll)
            if(this.scroll>500 ){
              this.newsBack2 = true
            }
        },
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  scoped >
.height370{
  height: 370px;
}



.newsback1{
 background-image: url('../assets/chanpin1.png');
  background-size: 100% ;
}

.newsback2{
 background-image: url('../assets/chanpin4.png');
  background-size: 100% ;
}

.dencare{
  padding:0 5%; text-align:left; position:absolute; top:-21px;
  animation: fadein 2s linear 1;
}
.dencare2{
  padding:0 5%; text-align:left; position:absolute; top:-21px;
  animation: fadein 2s linear 1;
}

@keyframes fadein {
  from {top:30px; opacity: 0;}
  to {top: -21px; opacity: 1;}
}
</style>
