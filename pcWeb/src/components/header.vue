<template>
  <el-row class="nav" :class="transParent?'transParent':''">
    <el-col class="wrapper">
      <el-col :span="4">
        <img @click="toindex" class="titleLogo" src="../assets/navLogo.png" alt="logo">
      </el-col>
      <el-col :span="20" style="position:relative;">
        <el-menu
          :default-active="activeIndex"
          class="el-menuNav"
          mode="horizontal"
          @select="handleSelect"
        >
          <el-menu-item index="11" ><router-link to="/index" style="text-decoration:none;">首页</router-link></el-menu-item>
          <el-submenu index="1" :class='activeIndex=="1"?"is-active":""' >
            <template slot="title">品牌与产品</template>
            <el-menu-item style="margin:30px 10px" @click="topro" index="1-1">品牌价值</el-menu-item>
            <el-menu-item style="margin:30px 10px" index="1-2">产品信息</el-menu-item>
          </el-submenu>
          <el-submenu index="2" :class='activeIndex=="2"?"is-active":""'>
            <template slot="title">新闻与动态</template>
            <el-menu-item style="margin:30px 10px" @click="tonews" index="2-1">新闻资讯</el-menu-item>
            <el-menu-item style="margin:30px 10px" index="2-2">热点活动</el-menu-item>
            <el-menu-item style="margin:30px 10px" index="2-3">广告欣赏</el-menu-item>
            <!-- <el-submenu index="2-4">
              <template slot="title">品牌与产品</template>
            </el-submenu> -->
          </el-submenu>

          <el-submenu index="3">
            <template slot="title">投资者关系</template>
            <el-menu-item style="margin:30px 10px" index="3-1">投资者互动</el-menu-item>
            <el-menu-item style="margin:30px 10px" index="3-2">投资者关系</el-menu-item>
            <el-menu-item style="margin:30px 10px" index="3-3">公司公告</el-menu-item>
            <el-menu-item style="margin:30px 10px" index="3-4">集团财报</el-menu-item>
            <el-menu-item style="margin:30px 10px" index="3-5">信息披露</el-menu-item>
          </el-submenu>

          <el-submenu index="4">
            <template slot="title">社会责任</template>
            <!-- <el-menu-item style="margin:30px 10px" index="4-1">抗敏感实验室</el-menu-item> -->
            <el-menu-item style="margin:30px 10px" index="4-2">社会责任</el-menu-item>
          </el-submenu>
          <el-submenu index="5">
            <template slot="title">关于登康</template>
            <el-menu-item style="margin:30px 10px" index="5-1">企业简介</el-menu-item>
            <el-menu-item style="margin:30px 10px" index="5-2">社会责任</el-menu-item>
            <el-menu-item style="margin:30px 10px" index="5-3">招贤纳士</el-menu-item>
          </el-submenu>
          <el-submenu index="6">
            <template slot="title">党建工作</template>
            <el-menu-item style="margin:30px 10px" index="6-1">党建要闻</el-menu-item>
            <el-menu-item style="margin:30px 10px" index="6-2">党建常识</el-menu-item>
            <el-menu-item  style="margin:30px 10px" index="6-3">基层动态</el-menu-item>
          </el-submenu>
          <el-submenu index="7">
            <template slot="title">关于我们</template>
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
          <el-menu-item index="9"  ><div class="friend"> 友情链接</div> </el-menu-item>
          <el-menu-item index="10" > <div class="worker"> 员工通道</div> </el-menu-item>
        </el-menu>
      </el-col>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: "headerNav",
  data() {
    return {
      transParent:null,
      activeIndex: "11",
      activeIndex2: "1",
      friend: '../assets/friend.png',

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
    menu() {
        this.scroll = document.documentElement.scrollTop || document.body.scrollTop;
        // console.log(this.scroll)
        if(this.scroll<900 && this.activeIndex === '11'){
          this.transParent = true
        } else{
          this.transParent = false
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
.nav{
  position: fixed;
  display: flex;
  justify-content: space-between;
  background: rgba(0, 91, 171, .85);
  padding: 0 5%;
  width: 100%;
  z-index: 100;
  /* animation:fadeUp 2s linear 1 ; */
}
.wrapper{
  position: relative;
  animation:fadeUp 2s linear 1 ;
}
.titleLogo{
  width: 204px;
  height: 64px;
  cursor: pointer;
}
.el-menuNav{
  position: absolute;
  right: 0;
  background: transparent;
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

.worker:hover {
 color: #ECAC2B;
 background-color: #fff;
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
