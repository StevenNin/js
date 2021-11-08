<template>
  <el-row class="nav" :class="transParent?'transParent':''">
    <div @click="handleClose1" v-show="navshow" class="backCover"></div>
    <img @click="toTop" v-show="topShow" class="toTop" src="../assets/topLogo.png" alt="">
    <el-col class="wrapper">
      <el-col :span="4" >
        <img  @click="toindex" class="titleLogo" src="../assets/navLogo.png" alt="logo">
      </el-col>
      <el-col :span="20" style="position:relative;">
        <img @click=" handleOpen1"   class="titleToggle" src="../assets/navToggle.png" alt="logo">
        <div v-show="navshow">
          <el-menu
            :default-active="activeIndex"
            class="el-menuNav"
            @open="handleOpen"
            @close="handleClose"
            background-color="#005BAB"
            text-color="#fff"
            active-text-color="#ECAC2B"
            :collapse="navToggle"
          >
            <div style="font-size :15px; color: #80A5C5 ;height:50px; margin-right:20px;font-size:26px; align-items:center;display:flex; justify-content:flex-end;" @click="handleClose1"><i class="el-icon-close"></i></div>
            <el-menu-item index="11" @click="toindex"><span>首页</span></el-menu-item>
            <!-- <el-submenu index="1" :class='activeIndex=="1"?"is-active":""' >
              <template slot="title"><span slot="title" >品牌产品</span></template>
            </el-submenu> -->
            <el-submenu index="1" :class='activeIndex=="1"?"is-active":""' >
              <template slot="title"> <div class="arrowopen" ></div>  <div class="arrowclose" ></div> <span slot="title">品牌与产品</span></template>
              <el-menu-item style="margin:30px 10px" @click="topro" index="1-1">品牌价值</el-menu-item>
              <el-menu-item style="margin:30px 10px" index="1-2">产品信息</el-menu-item>
            </el-submenu>
            <el-submenu index="2" :class='activeIndex=="2"?"is-active":""'>
              <template slot="title"><div class="arrowopen" ></div>  <div class="arrowclose" ></div><span slot="title">新闻与动态</span></template>
              <el-menu-item style="margin:30px 10px" @click="tonews" index="2-1">新闻资讯</el-menu-item>
              <el-menu-item style="margin:30px 10px" index="2-2">热点活动</el-menu-item>
              <el-menu-item style="margin:30px 10px" index="2-3">广告欣赏</el-menu-item>
              <!-- <el-submenu index="2-4">
                <template slot="title">品牌与产品</template>
              </el-submenu> -->
            </el-submenu>
            <el-submenu index="3">
              <template slot="title"><div class="arrowopen" ></div>  <div class="arrowclose" ></div><span slot="title">投资者关系</span></template>
              <el-menu-item style="margin:30px 10px" index="3-1">投资者互动</el-menu-item>
              <el-menu-item style="margin:30px 10px" index="3-2">投资者关系</el-menu-item>
              <el-menu-item style="margin:30px 10px" index="3-3">公司公告</el-menu-item>
              <el-menu-item style="margin:30px 10px" index="3-4">集团财报</el-menu-item>
              <el-menu-item style="margin:30px 10px" index="3-5">信息披露</el-menu-item>
            </el-submenu>

            <el-submenu index="4">
              <template slot="title"><div class="arrowopen" ></div>  <div class="arrowclose" ></div><span slot="title">社会责任</span></template>
              <!-- <el-menu-item style="margin:30px 10px" index="4-1">抗敏感实验室</el-menu-item>
              <el-menu-item style="margin:30px 10px" index="4-2">口腔科普</el-menu-item>
              <el-menu-item style="margin:30px 10px" index="4-3">爱牙互动</el-menu-item> -->
            </el-submenu>
            <el-submenu index="5">
              <template slot="title"><div class="arrowopen" ></div>  <div class="arrowclose" ></div><span slot="title">关于登康</span></template>
              <el-menu-item style="margin:30px 10px" index="5-1">企业简介</el-menu-item>
              <el-menu-item style="margin:30px 10px" index="5-2">社会责任</el-menu-item>
              <el-menu-item style="margin:30px 10px" index="5-3">招贤纳士</el-menu-item>
            </el-submenu>
            <el-submenu index="6">
              <template slot="title"><div class="arrowopen" ></div>  <div class="arrowclose" ></div><span slot="title">党建工作</span></template>
              <el-menu-item style="margin:30px 10px" index="6-1">党建要闻</el-menu-item>
              <el-menu-item style="margin:30px 10px" index="6-2">党建常识</el-menu-item>
              <el-menu-item  style="margin:30px 10px" index="6-3">基层动态</el-menu-item>
            </el-submenu>
            <el-submenu index="7">
              <template slot="title"><div class="arrowopen" ></div>  <div class="arrowclose" ></div><span slot="title">关于我们</span></template>
              <el-menu-item @click="totest" style="margin:30px 10px" index="7-1">企业简介</el-menu-item>
              <el-menu-item style="margin:30px 10px" index="7-2">英才计划</el-menu-item>
              <el-menu-item style="margin:30px 10px" index="7-3">联系我们</el-menu-item>
            </el-submenu>
            <!-- <el-submenu index="8">
              <template slot="title">其他</template>
              <el-menu-item style="margin:30px 10px" index="8-1">员工通道</el-menu-item>
              <el-menu-item style="margin:30px 10px" index="8-2">友情链接</el-menu-item>
              <el-menu-item style="margin:30px 10px" index="8-3">网站地图</el-menu-item>
              <el-menu-item style="margin:30px 10px" index="8-4">电商链接</el-menu-item>
              <el-menu-item style="margin:30px 10px" index="8-5">公众号、微博、抖音等连接</el-menu-item>
            </el-submenu> -->
            <!-- <el-menu-item index="9"  ><div class="friend"> 友情链接</div> </el-menu-item>
            <el-menu-item index="10" > <div class="worker"> 员工通道</div> </el-menu-item> -->
          </el-menu>
        </div>
      </el-col>
    </el-col>
  </el-row>
</template>

<script>
// import {debounce } from
export default {
  name: "headerNav",
  data() {
    return {
      topShow:false,
      transParent:null,
      activeIndex: "11",
      activeIndex2: "1",
      friend: '../assets/friend.png',
      navToggle:true,
      navshow:false
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    topro(){
      this.$router.push('/product')
    },
    tonews(){
      this.$router.push('/news') 
    },
    toindex(){
      this.$router.push('/index') 
    },
    totest(){
      this.$router.push('/test') 
    },
    toTop() {
      setTimeout(()=>{
        window.scroll(0,0)
      },10)
    },
    handleOpen() {
      
    },
    handleClose(){

    },
    handleOpen1(){

      this.navToggle = false; 
      this.navshow= true
    },
    handleClose1() {
      this.navToggle= true;
      setTimeout(()=>{
        this.navshow = false;
      },250)
    },
    menu() {
        this.scroll = document.documentElement.scrollTop || document.body.scrollTop;
        // console.log(this.scroll)
        if(this.scroll<487 && this.activeIndex === '11'){
          this.transParent = true
        } else{
          this.transParent = false
        }
        if(this.scroll > 480) {
          this.topShow = true
        }else{
          this.topShow = false
        }
      },
  },
  mounted() {
    if(this.$route.path.includes('news')){
      this.activeIndex = '2'
    } else if(this.$route.path.includes('product')){
      this.activeIndex = '1'
    }else{
      this.transParent = true
    }
    window.addEventListener('scroll', this.menu)
  },
  destroyed() {
　　　　window.removeEventListener('scroll', this.menu); // 销毁监听
　},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  scoped >
.backCover{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
  background-color: rgb(0, 0, 0, .5);
}
.nav{
  position: fixed;
  display: flex;
  justify-content: space-between;
  background: #005BAB;
  padding: 0 5%;
  width: 100%;
  z-index: 50;
  top: 0;
}

.wrapper{
  position: relative;
  animation:fadeUp 2s linear 1 ;
  display: flex;
  align-items: center;
}
.titleLogo{
  width: 110pt;
  height: 32pt;
  cursor: pointer;
}
.titleToggle {
  width: 19.14pt;
  height: 13.17pt;
  cursor: pointer;
  position: absolute;
  right: 0;
  top: -8px;
}
.el-menuNav{
  position: absolute;
  top:-24px;
  right: -8%;
  background: transparent;
  z-index: 101;
}
.el-menu.el-menu--horizontal{
  border-bottom: solid 1px transparent;
  
}
.linkR {
  color: #FFF;
}
a:hover{
  color: #ECAC2B;
}
.transParent {
  background-color: transparent;
}
.friend {
  background-image: linear-gradient(to right, #007BE6, #489BE2 );
  border-radius: 27px;
  height: 30px;
  width: 100px;
  line-height: 30px;
  margin-top: 15px;
}
.worker{
  background-color:#ECAC2B;
  border-radius: 27px;
  height: 30px;
  width: 100px;
  line-height: 30px;
  margin-top: 15px;
  margin-left: -30px;
}

.friend:hover{
 color: #ECAC2B;
 background-image: linear-gradient(to right, #fff, #fff );
}

.arrowclose{
  height: 5px;
  width: 5px;
  background-image: url(../assets/openarrow.png);
  background-size: 100%;
  display: inline-block;
  background-repeat: no-repeat;
}
.arrowopen{
  display: none;
  height: 5px;
  width: 5px;
  background-image: url(../assets/closearrow.png);
  background-size: 100%;
  background-repeat: no-repeat;
}
.arrowopen,.arrowclose{
  /* position: relative;
  left: 0; */
  display: none;
}
.is-opened .arrowclose{
 display: none;
}
.is-opened .arrowopen{
 /* display: inline-block; */
}

.worker:hover {
 color: #ECAC2B;
 background-color: #fff;
}
.toTop{
  position: fixed;
  right: 3%;
  top:85%;
  width: 3rem;
}

@keyframes fadeUp {
  0%{
    top: 30px;
    opacity: 0;
  }
  50%{
    top: 20px;
    opacity: 0.3;
  }
  75%{
    top: 10px;
    opacity: 0.5;
  }
  100%{
    top: 0px;
    opacity: 1;
  }
}
</style>
