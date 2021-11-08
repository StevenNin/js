<template>

<div>   
    <headerNav></headerNav>
    <div class="swiper1">
      
      <div v-show ='wordShow' class="wordBox" style="position:absolute">
        <div class="wordFadein" style="font-size:13px; color:#EEEEEE;">DENCARE'S CORPORATE VISION</div>
        <div class="wordFadein" style="font-size:19px; color:#FFFFFF; margin-top:10px ">成为世界一流口腔护理产品专家</div>
        <div class="wordFadein" style="font-size:16px;color:#fff;font-weight:bold; margin-top:10px">为消费者带来自信健康的笑容</div>
        <img class="wordFadein" src="../assets/indexpic.png"  style="width:280px;height:33px;margin-top:10px">
      </div>
      <div v-show="tagShow" class="box1">
        <img src="../assets/box1Logo.png" style="height:63px;width:120px;" alt="">
        <!-- <img class="rightArrow" src="../assets/right.png" style="width:60px" height="60px" alt=""> -->
      </div>
      <div v-show="tagShow" class="box2">
        <img src="../assets/box2Logo.png" style="height:63px;width:120px;" alt="">
        <!-- <img class="rightArrow" src="../assets/right2.png" style="width:60px" height="60px" alt=""> -->
      </div>
    </div>
    <div class="companySlogan" ref="Slogan">
      <div class="mainSlogan" v-show="showSlogan">
        <div class="little" style="color:#FFFFFF; font-size:16px;font-weight:bold;">
          关于登康
        <img style="height:3px;width:36px; margin-bottom:3px" src="../assets/bottomBarWhite.png" alt="">
        </div>
        <div class="title">
          重庆登康口腔护理用品股份有限公司（以下简称登康口腔）是中国极具影响力的专业口腔护理用品公司，是中国较早的四大牙膏生产企业
        </div>
        <div class="tagRight">
          <div class="tagItem ">
            <img class="shake" src="../assets/tag1.png" alt="">
            <p>发展观</p>
          </div>
          
          <div class="slideCol"></div>

          <div class="tagItem">
            <img class="shake" src="../assets/tag2.png" alt="">
            <p>价值观</p>
          </div>
          
          <div class="slideCol"></div>

          <div class="tagItem">
            <img class="shake" src="../assets/tag3.png" alt="">
            <p>人才观</p>
          </div>
        </div>
        
        
      </div>
    </div>
    <!-- <div class="tagBox">
      <div class="tagLeft"  >
        <div v-show="yellowLeft" class="yellowLeft" style="font-size:26px;">基业长青·百年登康</div>
        <div  v-show="yellowLeft" class="yellowLeft" style="font-size:20px;">立足市场变化，整合全球资源<br/>打造中国乃至亚洲最专业的口腔健康管理公司</div>
      </div>
      <div class="tagRight">
        <div class="tagItem"  v-for="(item,i) in tags" :key="i" @mouseover="selectStyle(item,i)" @mouseout="outStyle(item,i)" :ref="i">

            <div class="icon hide" ><el-image
              style="width: 52.5px; height: 52.5px"
              :src="item.activeUrl"
              ></el-image></div>
            <div class="icon show" ><el-image
              style="width: 52.5px; height: 52.5px"
              :src="item.url"
              ></el-image></div>
            <div style="font-size:26px; padding-top:30px; "  :class="{'active':item.active}" > {{ item.value }}</div>
            <div class="info" style="color:#9B9B9B;padding-top:19px">{{ item.info }}</div>

        </div>
      </div>
    </div> -->
    <div class="news">
      <nav>
        <div style="font-size:18px;">新闻动态</div>
        <img style="height:3px;width:36px;margin-bottom:3px" src="../assets/bottomBarBlue.png" alt="">
        <ul>
            <li v-for="(item,i) in news" :key="i" :class="{'second':i>1}">
                <div style="color:; font-size:;" class="newstitle">{{ item.title }}</div>
                <div style="color:#B5B5B5;font-size:10px;margin-top:5px" class="date">{{item.date}}</div>
                <div style="color:#666666;font-size:12px;margin-top:5px" class="newsInfo">{{ item.info }}</div>
            </li>
          </ul>
      </nav>
      <div class="newDetail">
        <!-- <div class="detailL"  style="width: 510px; height: 395px">
          <swiper class="swiper" :options="swiperOption">
            <swiper-slide>
              <img style="width:510px" src="../assets/slide1.png" alt="">
            </swiper-slide>
            <swiper-slide>
              <img style="width:510px" src="../assets/slide2.png" alt="">
            </swiper-slide>
            <swiper-slide>
              <img style="width:510px" src="../assets/slide3.png" alt="">
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
          </swiper>
        </div> -->
      </div>
    </div>
    <div class="turnOver">
      <div style="font-size:18px;">研发与创新</div>
      <img style="height:3px;width:36px;margin-bottom:3px " src="../assets/bottomBarBlue.png" alt="">
       <div class="detailL"  style="width: 100%; height: 50px;margin: 20px 0 20px 0;">
          <swiper class="swiper" :options="swiperOption">
            <swiper-slide>
              <img style="width:196px;height:235px;" src="../assets/slide4.png" alt="">
            </swiper-slide>
            <swiper-slide>
              <img style="width:196px;height:235px;" src="../assets/slide5.png" alt="">
            </swiper-slide>
            <swiper-slide>
              <img style="width:196px;height:235px;" src="../assets/slide6.png" alt="">
            </swiper-slide>
            <!-- <div class="swiper-pagination" slot="pagination"></div> -->
          </swiper>
        </div>
    </div>
    <div class="story">
      <div class="storyTop" style="display:flex; justify-content:space-between; align-items:center">
        <img v-show="picWall" class="picWall" style="width:24px;height:107px;" src="../assets/wordTop.png" alt="">
        <img v-show="picWall" class="picWall" style="width:287px; height:222px" src="../assets/story3.png" alt="">
      </div>
      <div class="storyB" style="display:flex; justify-content:space-between;z-index:10;margin-top:-10%;position:relative;">
        <img v-show="picWall" class="picWall" style="width:167px; height:255px" src="../assets/wordTop3.png" alt="">
        <img v-show="picWall"  class="picWall" style="width:195px; height:148px; margin-right:-12%;"  src="../assets/story1.png" alt="">

        <img v-show="picWall" class="picWall" style="width:75px; height:82px;position:absolute; bottom:0;right:80px"  src="../assets/smile.png" alt="">
        <img v-show="picWall" class="picWall" style="width:9px; height:115px;position:absolute; bottom:0;right:0"  src="../assets/wordTop2.png" alt="">
        
      </div>
      <!-- <img src="../assets/storyWord.png" style=" z-index:20;;height:28.5625rem; position:absolute;left:15%;top:10%;"> -->
      <!-- <div class="inline"><img style=" height: 17rem;" src="../assets/story1.png" alt=""></div>
      <div class="inline" style="align-self: center;"><img style="height: 30rem; margin-left:45px;" src="../assets/story2.png" alt=""></div>
      <div class="inline" style="align-self: flex-start;"><img style=" margin-top:80px;margin-left:13px; height: 14.0625rem;align-self: flex-start;" src="../assets/story3.png" alt=""></div> -->
    </div>
    <div class="contactUs" style="position:relative">
      <div style="font-size:18px;">联系我们</div>
      <img style="height:3px;width:36px;margin-bottom:3px" src="../assets/bottomBarBlue.png" alt="">
      <!-- <div class="email">
        <div>咨询热线：400 023 7766</div>
        <div>电子邮箱：master@dencare.com.cn</div>
        <div>邮政编码：400025</div>
        <div>公司地址：重庆市江北区海尔路389号</div>
      </div> -->
      <div class="inputBOx">
          <el-input class="inputItem" placeholder="您的姓名"></el-input>
          <el-input class="inputItem"  placeholder="您的邮箱"></el-input>
          <el-input class="inputItem"  placeholder="您的电话"></el-input>
          <el-input  class="inputItem" placeholder="公司名称"></el-input>
          <el-input  class="inputItem" type="textarea" :rows="4" placeholder="填写内容"></el-input>
      </div>
      <el-button class="sendNow" type="primary">立即发送</el-button>
    </div>
    <footerNav></footerNav>
</div>    
  
</template>

<script>
import headerNav from '@/components/header'
import footerNav from '@/components/footer'
import 'swiper/dist/css/swiper.css'

export default {
  name: 'index',
  components: {headerNav,footerNav},
  data () {
    return {
      wordShow:false,
      tagShow:false,
      yellowLeft:false,
      scroll:'',
      picWall:false,
      showSlogan: false,
      swiperOption: {
        // effect : 'coverflow',
        slidesPerView : 2,
        spaceBetween: 3,
        // autoplay: {
        //   delay: 2500,
        //   disableOnInteraction: false,
        // },
        // pagination: {
        //   el: '.swiper-pagination',
        //   clickable: true,
        // },
      },
      newsUrl:require('@/assets/newsTag.png'),
      // tags:[
      //   {
      //     url:require('@/assets/tag1.png'),
      //     activeUrl:require('@/assets/tag1Active.png'),
      //     value:'价值观',
      //     info:'变革创新，诚信实干，至善关爱，大同和谐'
      //   },
      //   {
      //     url:require('@/assets/tag2.png'),
      //     activeUrl:require('@/assets/tag2Active.png'),
      //     value:'发展观',
      //     info:'汇聚英才，创造精品'
      //   },
      //   {
      //     url:require('@/assets/tag3.png'),
      //     activeUrl:require('@/assets/tag3Active.png'),
      //     value:'人才观',
      //     info:'德才兼备，任人为贤'
      //   }
      // ],
      news:[
        {
          day: "10/26",
          date:'2021-10-26',
          title:'江北区登康公司生产区域GMP改造项目',
          info:'由重庆登康口腔护理用品股份有限公司组织的江北区登康公司生产区域GMP改造项目-CIP/SIP(在线清洗…'
        },
        {
          day: "10/26",
          date:'2021-10-26',
          title:'江北区登康公司生产区域GMP改造项目',
          info:'由重庆登康口腔护理用品股份有限公司组织的江北区登康公司生产区域GMP改造项目-工艺热水热源系统…'
        },
        {
          day: "10/11",
          date:'2021-10-11',
          title:'登康口腔生产车间办公区域',
          info:'登康口腔生产车间办公区域及数字化消费者体验中心延展设计方案、设计思路、设计理念、设计效果图…'
        },
        {
          day: "09/13",
          date:'2021-09-13',
          title:'登康公司智能制造改造项目',
          info:'由重庆登康口腔护理用品股份有限公司组织的登康公司智能制造改造项目-洁净升降平台采购项目招标工…'
        },
      ],
      turnImages:[
        {
          urlShow:require('@/assets/show1.png'),
          urlHide:require('@/assets/hide1.png')
        },
        {
          urlShow:require('@/assets/show2.png'),
          urlHide:require('@/assets/hide2.png')
        },
        {
          urlShow:require('@/assets/show3.png'),
          urlHide:require('@/assets/hide3.png')
        },
        {
          urlShow:require('@/assets/show4.png'),
          urlHide:require('@/assets/hide4.png')
        }
      ]
    }
  },
  mounted() {
    setTimeout(()=>{
      window.scroll(0,0);
    },1)
    window.addEventListener('scroll', this.menu)
    setTimeout(()=>{
      this.wordShow = true
    },2000)
    setTimeout(()=>{
      this.tagShow = true
    },3000)
  },
  destroyed() {
　　　　window.removeEventListener('scroll', this.menu); // 销毁监听
　},
  methods:{
      menu() {
          this.scroll = document.documentElement.scrollTop || document.body.scrollTop;
          if(this.scroll > 1200) {
            this.picWall = true
          }
          if(this.scroll>200 && this.scroll <600){
            this.showSlogan = true
          } else{
            // this.showSlogan = false
          }
      },
     selectStyle(item,j) {
        var _this=this;
        this.$nextTick(function () {
          this.tags.forEach(function (i) {
            _this.$set(i,'active',false);
          });
          this.$set(item,'active',true);
          console.log(this.$refs[j][0].classList)
          this.$refs[j][0].classList.add('itemActive')
        });
      },
      outStyle(i,j) {
        this.$set(i,'active',false);
        this.$refs[j][0].classList.remove('itemActive')
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  scoped >

.swiper1{
  height: 526pt;
  background-image: url('../assets/swiper.png');
  background-size: 100% ;
  position: relative;
  width: 100%;
  /* display: flex;
  align-items: flex-end;
  justify-content: flex-end; */
}
.tagBox {
  height: 214pt;
  display: flex;
  background-image: url('../assets/newsBack.png');
  background-size: 100% 100%;
}
.tagLeft{
 width:100%;
 height: 214pt;
 /* background-color: #ECAC2B; */
 color: #fff;
 text-align: left;
 padding-left: 146px;
 box-sizing: border-box;
}
.tagRight{
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
}
.yellowLeft{
  animation:wordfadein 2s linear 1;
}
.wordBox {
  padding-top: 40px;
  left:20px;
  top:57px;
  text-align:left;
}
.wordFadein{
  animation:wordfadein 1s linear 1;
}
.box1,.box2{
  width: 100%;
  height: 70pt;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  padding-left: 10px;
}
.box1{
  background-color: #005BAB;
  /* right: 640px; */
  position: absolute;
  animation:fadein2 1s linear 1;
  bottom: 70pt;
}
.box2{
  background-color: #ECAC2B;
  position: absolute;
  /* right: 0px; */
  animation:fadein 1.5s linear 1;
  bottom: 0;
}

.companySlogan {
  height: 184pt;
  background-image: url('../assets/newsBack.png');
  background-size: 100% 100%;
  position: relative;
  padding: 0 10%;
}
.little{
  padding-top:40px ;
  /* background-image: url('../assets/bottomBanner.png');
  background-size: 100%;
  background-repeat:no-repeat ;
  background-position: bottom; */
  margin: 0 auto;
  width: 70px;
  padding-bottom: 11px;
}
.companySlogan .title {
  font-size: 12px;
  font-weight: 500;
  color: #FFFFFF;
  /* letter-spacing: 20px; */
  /* padding-top: 15px;tagRight */
}

.companySlogan .info{
  width: 675px;
  color: #fff;
  margin: 33px auto;
}


.picWall{
  animation:wordfadein 2s linear 1;
}
.tagItem{
  /* padding-top: 98px; */
  /* width: 33.333%; */
  /* background-color: #F8F8F8; */
}
.tagItem p{
  color: #fff;
  font-size: 10px;
}
.tagItem img{
  width: 19px;
  height: 15px;
}


.tagItem:hover {
  
}




/* .detailL:hover {
  box-shadow:  0 0 30px;
} */
.news{
  height: 590px;
  /* padding-top: 100px; */
  /* box-sizing: border-box; */
  padding: 0 5%;
  /* background-image: url('../assets/newsBack.png');
  background-size: 100% 100%; */
}


.news nav{
  padding-top: 20px;
  color: #000;
  /* border-bottom: 1px solid #EEEEEE; */
  height: 50px;
  position: relative;
}
.news ul {
  /* display: flex; */
  width: 100%;
  /* justify-content: space-between; */
}
.news ul li {
  /* width: 50px; */
  /* min-height: 100px; */
  border-bottom: 1px solid #EEEEEE;
  text-align: left;
  padding: 20px 0;
}
.news ul li:last-child{
  border-bottom:none;
}
.slide{ 
    background: #B6BAC9;
    height: 1px;
    width: 69px;
    margin-top: 50px;
}

.news ul li a{
  text-decoration: none;
  color: #fff;
}


.turnOver{
  height: 390px;
  padding: 30px 0;
  box-sizing: border-box;
  /* display: flex; */
  background-image: url('../assets/yanfa.png');
  background-size: 100%;
}
.swiper-wrapper {
  margin-top:20px;
}
.turnItem{
  width: 25%;
}

.tuenItem{
  flex:1
}

.hide{
  display: none;
  opacity: 0.5;
}

.tuenItem:hover .show{
  display: none;
}

.tuenItem:hover .hide{
  display: block;
  animation:Slowhide 1s linear 1;
  opacity: 1;
}


.newDetail {
  display: flex;
  padding-top: 86px;
}
.detailR{
  flex: 1;
}
.detailR ul {
  width: 100%;
  flex-wrap: wrap;
  display: flex;
  justify-content: space-between;
}
.detailR ul li {
  width: 510px;
  min-height: 100px;
}


.story{
  height: 460px;
  background-image: linear-gradient(to top, #007BE6, #489BE2 );
  padding:15% 5%;
  position: relative;
  overflow: hidden;
}

.inline{
  display: inline-block;
}

.inline img {
  transition: all 0.6s;
  
}

.inline img:hover {
  transform: scale(1.05);
  animation: swim 10s linear infinite ;
  box-shadow: 0 0 10px rgba(111, 116, 120, 0.34);
}

.inputItem{
  margin-top: 10px;
}
.contactUs{
  height: 423px;
  padding: 10% 5%;
  background-image: url('../assets/contactBack.png');
  background-size: 100%;
  /* background-color: #ECAC2B;
  padding: 0 15%;
  display: flex;
  justify-content: space-between;
  align-items: center; */
}

.newstitle {
  font-size: 16px ;
  cursor: pointer;
}
.newsInfo{
  font-size: 14px;
}
.newstitle:hover {
  color: #ECAC2B;
}
.news ul  .active {
 border-bottom: 2px solid #ECAC2B;
}
.active {
  color: #005BAB;
}
.detailR .second {
  margin-top: 120px;
}
.detailL{
  margin-top:20px;
}

.itemActive {
 background-color:#FFFFFF ;
 z-index: 20;
 box-shadow : 0px 0px 10px rgba(111, 116, 120, 0.34) ;
}
/* video{
    position: absolute;
    right: 0;
    bottom: 0;
    min-width: 100%;
    min-height: 100%; 
    width: auto;
    height: auto; 
    z-index: -100; 
} */
.slideCol {
  background-color: #5CAEF5;
  width: 1px;
  height: 25px;
}
.rightArrow{
 transition: all .6s;
}
.rightArrow:hover {
  /* animation:turnOver .6s linear 1; */
  transform:scale(1.1) ;
}
.swiper-pagination {
  /* margin-left: 220px; */
}

.sendNow{
  width:100%;
  background-image: linear-gradient(to right, #005bab, #489be2);
  font-size:16px;
  margin-top: 20px;
}

.mainSlogan{
   animation:wordfadein 2s linear 1;
}
.shake:hover{
  animation: shake .5s linear 3;
}
@keyframes fadein
{
  from {bottom:-120px;opacity: 0;}
  to {bottom:0;opacity: 1;}
}
@keyframes fadein2
{
  from {bottom:0px;opacity: 0;}
  to {bottom:70pt;opacity: 1;}
}
@keyframes wordfadein
{
  from {padding-top:50px;opacity: 0;}
  to {padding-top:0;opacity: 1;}
}
@keyframes showSlogan {
  from {padding-top: 80px;}
  to {padding-top: 0px;}
}
@keyframes down {
  from {height: 0px;}
  to {height: 43px;}
}
@keyframes Slowhide{
  from {opacity: 0.5;}
  to {opacity: 1;}
}
@keyframes swim {
  0% {
    transform:translate(0px,0px) rotate(0deg) 
  }
  25% {
    transform:translate(10px,20px) rotate(-3deg)
  }
  75% {
    transform:translate(-6px,-2px) rotate(2deg)
  }
  100% {
    transform:translate(0px,0px) rotate(0deg)
  }
}
@keyframes turnOver {
  from {transform:rotate(0deg)}
  to {transform:rotate(360deg)}
}

@keyframes shake{
  from {transform:translate(-3px,0px) rotate(-1deg)}
  to {transform:translate(3px,0px) rotate(1deg)}
}
</style>
