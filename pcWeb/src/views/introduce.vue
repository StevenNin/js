<template>

<div>   
    <headerNav></headerNav>
    <div class="swiperBox" style="display:none">
      <swiper class="swiper" :options="swiperOption">
      <swiper-slide>
        <img src="" alt="">
      </swiper-slide>
      <swiper-slide>
        <img src="" alt="">
      </swiper-slide>
      <swiper-slide>
        <img src="" alt="">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    </div>
    <div class="top">
      <ul>
        <li class="active">新闻资讯</li>
        <li>热点活动</li>
        <li>广告欣赏</li>
        <li><router-link to="/index" style="text-decoration:none; color:#fff">返回首页</router-link></li>
      </ul>
    </div>
    <div class="middle">
      <div class="video">
          <el-image
            class="show"
            style="width: 100%; height: 400px"
            :src="urlLShow"></el-image>
          <el-image
            class="hide"
            style="width: 100%; height: 400px"
            :src="urlLHide"></el-image>
      </div>
      <div class="video">
          <el-image
            class="show"
            style="width: 100%; height: 400px"
            :src="urlRShow"></el-image>
          <el-image
            class="hide"
            style="width: 100%; height: 400px"
            :src="urlRHide"></el-image>
      </div>
    </div>
    <div class="List">
      <div class="listItem"
       v-for="(item,i) in newsList"
       :key="i"
       v-show="item.active"
      >
        <div class="date">
          <p style="color:#1B1B1D; font-size:26px;font-family: OPPOSans;letter-spacing: 3px;font-weight: 400;">{{ item.day }}</p>
          <p style="margin-top:15px; font-size:16px;color:#999999">{{ item.year }}</p>
        </div>
        <div class="slide"></div>
        <div class="detail">
          <p style="font-size:18px; font-weight:400;">{{ item.title }}</p>
          <div style="max-width:80%;font-size:14px;margin-top:14px;color:#999999;" >{{ item.info }}</div>
        </div>
        <div class="icon"> <i class="el-icon-arrow-right"></i></div>
      </div>
      <div class="toTop" >
        <a  href="javascript::" @click="toTop">
          <div style="color:#646464; font-size:20px;">返回顶部</div>
          <img src="../assets/toTop.png" alt="">
        </a>
      </div>
    </div>
    <footerNav></footerNav>
</div>    
  
</template>

<script>
import headerNav from '@/components/header'

import footerNav from '@/components/footer'

export default {
  name: 'introducePage',
  showSlogan:false,
  components: {headerNav,footerNav},
  data () {
    return {
      scroll: '',
      swiperOption: {
        spaceBetween: 30,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      },
      urlLShow:require('@/assets/videoLShow.png'),
      urlLHide:require('@/assets/videoLHide.png'),
      urlRShow:require('@/assets/videoRShow.png'),
      urlRHide:require('@/assets/videoRHide.png'),
      newsList:[
        {
          active:null,
          day:'10/30',
          year:'2021',
          title:'江北区登康公司生产区域GMP改造项目-生产用家具及工器具采购中标公示',
          info:'由重庆登康口腔护理用品股份有限公司组织的江北区登康公司生产区域GMP改造项目-生产用家具及工器具采购项目招标工作，经评标小组按评标规则评审，招标人确认，中标候选人为天津市康洁制药设备有限公司，公示时间：2021年10月29日至2021年11月02日。招标人：重庆登康口…'
        },
        {
          active:null,
          day:'10/29',
          year:'2021',
          title:'江北区登康公司生产区域GMP改造项目-CIP/SIP(在线清洗消毒)系统采购中标公示',
          info:'由重庆登康口腔护理用品股份有限公司组织的江北区登康公司生产区域GMP改造项目-CIP/SIP(在线清洗消毒)系统采购项目招标工作，经评标小组按评标规则评审，招标人确认，中标第一候选人为上海诚兴机械电子有限公司，公示时间：2021年10月27日至2021年10月29日。招标人：重…'
        },
        {
          active:null,
          day:'10/28',
          year:'2021',
          title:'江北区登康公司生产区域GMP改造项目-工艺热水热源系统采购中标公示',
          info:'由重庆登康口腔护理用品股份有限公司组织的江北区登康公司生产区域GMP改造项目-工艺热水热源系统采购项目招标工作，经评标小组按评标规则评审，招标人确认，中标第一候选人为重庆君悦环保工程有限公司，公示时间：2021年10月27日至2021年10月29日。招标人：重庆登康口腔…'
        },
        {
          active:null,
          day:'10/27',
          year:'2021',
          title:'登康口腔生产车间办公区域及数字化消费者体验中心延展设计项目',
          info:'登康口腔生产车间办公区域及数字化消费者体验中心延展设计方案、设计思路、设计理念、设计效果图、3D全景动态效果图、 内容规划、数字化设备规划及相关参数、报批报建（施工许可证）及后续施工实施阶段所需的全套施工图纸、细化方案等。设计范围包括生产车间主通道入口…'
        },
        {
          active:null,
          day:'10/25',
          year:'2021',
          title:'登康公司智能制造改造项目-洁净升降平台采购中标公示',
          info:'由重庆登康口腔护理用品股份有限公司组织的登康公司智能制造改造项目-洁净升降平台采购项目招标工作，经评标小组按评标规则评审，招标人确认，中标候选人为南通新丰威机械科技有限公司，公示时间：2021年09月13日至2021年09月15日。招标人：重庆登康口腔护理用品股份有限…'
        },
        {
          active:null,
          day:'10/25',
          year:'2021',
          title:'登康公司智能制造改造项目-洁净升降平台采购中标公示',
          info:'由重庆登康口腔护理用品股份有限公司组织的登康公司智能制造改造项目-洁净升降平台采购项目招标工作，经评标小组按评标规则评审，招标人确认，中标候选人为南通新丰威机械科技有限公司，公示时间：2021年09月13日至2021年09月15日。招标人：重庆登康口腔护理用品股份有限…'
        },
        {
          active:null,
          day:'10/25',
          year:'2021',
          title:'登康公司智能制造改造项目-洁净升降平台采购中标公示',
          info:'由重庆登康口腔护理用品股份有限公司组织的登康公司智能制造改造项目-洁净升降平台采购项目招标工作，经评标小组按评标规则评审，招标人确认，中标候选人为南通新丰威机械科技有限公司，公示时间：2021年09月13日至2021年09月15日。招标人：重庆登康口腔护理用品股份有限…'
        },
        {
          active:null,
          day:'10/25',
          year:'2021',
          title:'登康公司智能制造改造项目-洁净升降平台采购中标公示',
          info:'由重庆登康口腔护理用品股份有限公司组织的登康公司智能制造改造项目-洁净升降平台采购项目招标工作，经评标小组按评标规则评审，招标人确认，中标候选人为南通新丰威机械科技有限公司，公示时间：2021年09月13日至2021年09月15日。招标人：重庆登康口腔护理用品股份有限…'
        },
        {
          active:null,
          day:'10/25',
          year:'2021',
          title:'登康公司智能制造改造项目-洁净升降平台采购中标公示',
          info:'由重庆登康口腔护理用品股份有限公司组织的登康公司智能制造改造项目-洁净升降平台采购项目招标工作，经评标小组按评标规则评审，招标人确认，中标候选人为南通新丰威机械科技有限公司，公示时间：2021年09月13日至2021年09月15日。招标人：重庆登康口腔护理用品股份有限…'
        },
      ]
    }
  },
  mounted() {
    window.scroll(0,0);
    window.addEventListener('scroll', this.menu)
  },
  destroyed() {
　　　　window.removeEventListener('scroll', this.menu); // 销毁监听
　},
  methods:{
    toTop(){
      window.scroll(0,0)
    },
    menu(){
      this.scroll = document.documentElement.scrollTop || document.body.scrollTop;
      console.log(this.scroll)
      if(this.scroll>300){
        let i  = Math.round((this.scroll - 300) / 200) 
        if( i < this.newsList.length){
          this.newsList[i].active = true;
        }
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  scoped >
.top{
  background-image: url('../assets/productSlogan.png');
  background-size: 100% 100%;
  height: 890px;
  width: 100%;
  position: relative;
}
ul{
  position: absolute;
  left: 0;
  bottom: 0;
  width: 50%;
  display: flex;
  cursor: pointer;
}
ul li{
  background-color: #005BAB;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  width: 25%;
}
ul li:hover{
  background-color: #ECAC2B;
}
ul .active{
  background-color: #ECAC2B;
}

.middle {
  display: flex;
}
.video{
  flex:1;
}
.hide{
  display: none;
}
.video:hover .show{
  display: none;
}

.video:hover .hide{
  display: block;
}

.listItem:nth-child(2n){
  background-color: #fff;
}
.slide{
  height: 65px;
  margin: 0 43px;
  width: 1px;
  background-color: #E0E0E0;
}
.listItem{
  height: 220px;
  display: flex;
  padding: 0 250px;
  justify-content: center;
  align-items: center;
  background-color: #F7F7F7;
  animation:wordfadein 1s linear 1;
}

.date{
  text-align: left;
}
.detail{
  text-align: left;
  
}
.icon{
  color: #999999;
  font-size: 25px;
}

.toTop{
  height: 100px ;
  padding: 0 250px;
  background-color: #F7F7F7;
  display: flex;
  align-items: center;
}
.toTop a{
  display: flex;
  align-items: center;
}
.toTop a img{
  width: 7px;
  height: 9px;
  margin-left: 9px;
}
.detail{
  cursor: pointer;
}

.detail p{
  color: #1B1B1D;
}
.detail:hover p{
  color: #005BAB;
}

@keyframes wordfadein {
  from {padding-top:220px;}
  to {padding-top:0px;}
}
</style>
