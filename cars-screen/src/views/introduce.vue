<template>
  <div>
    <headerNav></headerNav>
    <div style="padding-top: 40px"></div>
    <img src="../assets/newsba.png" style="width: 100%; height: 10rem" alt="" srcset="" />

    <div class="newnav">
      <div class="navbox">
        <ul ref="nav">
          <li v-for="(item, inx) in nav" :key="item" @click="navfunc(inx)" :class="{ padd0: inx === 0 }">
            <span class="wl" :class="{ ss: inx === index }">{{ item }}</span>
          </li>
        </ul>
      </div>
    </div>

    <div class="news">
      <nav>
        <ul>
          <li v-for="(item, i) in news" :key="i" :class="{ second: i > 1 }" class="scale-in-ver-top">
            <div style="color: ; font-size: " class="newstitle">{{ item.title }}</div>
            <div style="color: #b5b5b5; font-size: 10px; margin-top: 5px" class="date">{{ item.date }}</div>
            <div style="color: #666666; font-size: 12px; margin-top: 5px" class="newsInfo">{{ item.info }}</div>
          </li>
        </ul>
      </nav>
    </div>
    <footerNav></footerNav>
  </div>
</template>

<script>
import headerNav from '@/components/header';

import footerNav from '@/components/footer';

export default {
  name: 'introducePage',
  showSlogan: false,
  components: { headerNav, footerNav },
  data() {
    return {
      nav: ['新闻资讯', '热点活动', '广告欣赏'],
      index: 0,
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
      news: [
        {
          day: '10/26',
          date: '2021-10-26',
          title: '江北区登康公司生产区域GMP改造项目',
          info: '由重庆登康口腔护理用品股份有限公司组织的江北区登康公司生产区域GMP改造项目-CIP/SIP(在线清洗…',
        },
        {
          day: '10/26',
          date: '2021-10-26',
          title: '江北区登康公司生产区域GMP改造项目',
          info: '由重庆登康口腔护理用品股份有限公司组织的江北区登康公司生产区域GMP改造项目-工艺热水热源系统…',
        },
        {
          day: '10/11',
          date: '2021-10-11',
          title: '登康口腔生产车间办公区域',
          info: '登康口腔生产车间办公区域及数字化消费者体验中心延展设计方案、设计思路、设计理念、设计效果图…',
        },
        {
          day: '09/13',
          date: '2021-09-13',
          title: '登康公司智能制造改造项目',
          info: '由重庆登康口腔护理用品股份有限公司组织的登康公司智能制造改造项目-洁净升降平台采购项目招标工…',
        },
      ],
      // urlLShow: require('@/assets/videoLShow.png'),
      // urlLHide: require('@/assets/videoLHide.png'),
      // urlRShow: require('@/assets/videoRShow.png'),
      // urlRHide: require('@/assets/videoRHide.png'),
      newsList: [
        {
          active: null,
          day: '10/30',
          year: '2021',
          title: '江北区登康公司生产区域GMP改造项目-生产用家具及工器具采购中标公示',
          info: '由重庆登康口腔护理用品股份有限公司组织的江北区登康公司生产区域GMP改造项目-生产用家具及工器具采购项目招标工作，经评标小组按评标规则评审，招标人确认，中标候选人为天津市康洁制药设备有限公司，公示时间：2021年10月29日至2021年11月02日。招标人：重庆登康口…',
        },
        {
          active: null,
          day: '10/29',
          year: '2021',
          title: '江北区登康公司生产区域GMP改造项目-CIP/SIP(在线清洗消毒)系统采购中标公示',
          info: '由重庆登康口腔护理用品股份有限公司组织的江北区登康公司生产区域GMP改造项目-CIP/SIP(在线清洗消毒)系统采购项目招标工作，经评标小组按评标规则评审，招标人确认，中标第一候选人为上海诚兴机械电子有限公司，公示时间：2021年10月27日至2021年10月29日。招标人：重…',
        },
        {
          active: null,
          day: '10/28',
          year: '2021',
          title: '江北区登康公司生产区域GMP改造项目-工艺热水热源系统采购中标公示',
          info: '由重庆登康口腔护理用品股份有限公司组织的江北区登康公司生产区域GMP改造项目-工艺热水热源系统采购项目招标工作，经评标小组按评标规则评审，招标人确认，中标第一候选人为重庆君悦环保工程有限公司，公示时间：2021年10月27日至2021年10月29日。招标人：重庆登康口腔…',
        },
        {
          active: null,
          day: '10/27',
          year: '2021',
          title: '登康口腔生产车间办公区域及数字化消费者体验中心延展设计项目',
          info: '登康口腔生产车间办公区域及数字化消费者体验中心延展设计方案、设计思路、设计理念、设计效果图、3D全景动态效果图、 内容规划、数字化设备规划及相关参数、报批报建（施工许可证）及后续施工实施阶段所需的全套施工图纸、细化方案等。设计范围包括生产车间主通道入口…',
        },
        {
          active: null,
          day: '10/25',
          year: '2021',
          title: '登康公司智能制造改造项目-洁净升降平台采购中标公示',
          info: '由重庆登康口腔护理用品股份有限公司组织的登康公司智能制造改造项目-洁净升降平台采购项目招标工作，经评标小组按评标规则评审，招标人确认，中标候选人为南通新丰威机械科技有限公司，公示时间：2021年09月13日至2021年09月15日。招标人：重庆登康口腔护理用品股份有限…',
        },
        {
          active: null,
          day: '10/25',
          year: '2021',
          title: '登康公司智能制造改造项目-洁净升降平台采购中标公示',
          info: '由重庆登康口腔护理用品股份有限公司组织的登康公司智能制造改造项目-洁净升降平台采购项目招标工作，经评标小组按评标规则评审，招标人确认，中标候选人为南通新丰威机械科技有限公司，公示时间：2021年09月13日至2021年09月15日。招标人：重庆登康口腔护理用品股份有限…',
        },
      ],
    };
  },
  mounted() {
    window.scroll(0, 0);
    window.addEventListener('scroll', this.menu);
  },
  destroyed() {
    window.removeEventListener('scroll', this.menu); // 销毁监听
  },
  methods: {
    navfunc(inx) {
      sessionStorage.setItem('nav', inx || 0);
      let to = inx === 1 ? 'news' : inx === 2 ? 'product' : '/';
      this.index = parseInt(sessionStorage.getItem('nav'));
      // to && this.$router.push(to);
    },
    toTop() {
      window.scroll(0, 0);
    },
    menu() {
      this.scroll = document.documentElement.scrollTop || document.body.scrollTop;
      console.log(this.scroll);
      if (this.scroll > 300) {
        let i = Math.round((this.scroll - 300) / 200);
        if (i < this.newsList.length) {
          this.newsList[i].active = true;
        }
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.padd0 {
  padding-left: 0rem !important;
}
.newlistBox {
  width: 90%;
  text-align: start;
  .title {
    font-size: 26px;
    font-family: Source Han Sans CN;
    font-weight: 400;
    line-height: 30px;
    color: #000000;
    letter-spacing: 2px;
  }
}

.news {
  height: 540px;
  /* padding-top: 100px; */
  /* box-sizing: border-box; */
  padding: 0 5%;
  /* background-image: url('../assets/newsBack.png');
  background-size: 100% 100%; */
}

.news nav {
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
  border-bottom: 1px solid #eeeeee;
  text-align: left;
  padding: 20px 0;
}
.news ul li:last-child {
  border-bottom: none;
}
.slide {
  background: #b6bac9;
  height: 1px;
  width: 69px;
  margin-top: 50px;
}

.news ul li a {
  text-decoration: none;
  color: #fff;
}

.jianto {
  width: 100%;
  text-align: center;
  img {
    width: 2rem;
    padding-bottom: 2rem;
  }
}

.navbox {
  width: 100%;

  ul,
  li {
    padding: 0;
    margin: 0;
    list-style: none;
  }

  ul {
    height: 100%;
    align-items: center;
    align-content: center;
    display: flex;
    justify-content: center;
    li {
      cursor: pointer;
      float: left;
      margin: 0 1rem;
      p {
        width: 100%;
        height: 2px;
      }
    }
    li:hover {
      color: #005bab;
    }
  }

  li:hover.end： {
    width: 100%;
    height: 2px;
    background: rgb(124, 122, 121);
  }
  ul .ss {
    color: #005bab;
    display: block;
    margin-top: 13px;
  }
  ul .ss::after {
    content: ' ';
    width: 100%;
    display: block;
    background: #005bab;
    height: 2px;
    margin-top: 13px;
  }

  .newsbg {
    width: 100%;
    height: 10rem;
    display: table;
    background-size: cover;
    -webkit-background-size: cover;
    -o-background-size: cover;
    background-position: center 0;
  }
}

.align_div {
  line-height: 5vh;
}

// .modmsg:hover .jianto {
//   content: url(../assets/image/lanse.png);
// }

.pages {
  width: 100%;
  height: 100px;
  .pageitem {
    width: 40%;
    height: 100%;
    margin: auto;
  }
}

.moduleCar {
  display: flex;
  flex-wrap: wrap;
  width: 90%;
  margin: auto;
  justify-content: space-between;
  .lslnewTime {
    display: flex;
    justify-content: space-between;
    padding-top: 2vh;
    padding-bottom: 20px;
    margin: 1vh 1vw;
  }
}

.modmsg:hover {
  color: #005bab;
  cursor: pointer;
  box-shadow: 6px -5px 11px 0px #e9e9e9, -6px 9px 14px 0px #e9e9e9;
}

.modmsg {
  width: 100%;
  background: #fff;
  position: relative;
  border: 1px solid #f7ecec;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
  .car {
    width: 100%;
    height: 12rem;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }
  .msg-title {
    font-size: 18px;
    font-family: Source Han Sans CN;
    font-weight: 500;
    padding: 1rem 1vw;
    height: 3vh;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .msg-msg {
    font-size: 14px;
    font-family: Source Han Sans CN;
    font-weight: 400;
    // padding-top: 2vh;
    margin: 1vh 1vw;
    line-height: 28px;
    height: 6vh;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
  }
}

.newban {
  width: 100%;
  height: 438px;
}
.newnav {
  width: 100%;
  height: 3rem;
  align-items: center;
  align-content: center;
  display: flex;
  border-bottom: 1px solid #e1e1e1;
  .box-nav {
    width: 50%;
    margin: auto;
    display: flex;
    justify-content: space-between;
    font-size: 16px;
    font-family: Source Han Sans CN;
    font-weight: 400;
    color: #333333;
    cursor: pointer;

    .newz {
      width: 40%;
      text-align: center;
      border-left: 1px solid #ccc;
      border-right: 1px solid #ccc;
    }
  }

  // .box-nav div:hover .rd {
  //   color: #005bab;
  //   // content: url(../assets/image/hd1.png);
  // }
  // .box-nav div:hover {
  //   color: #005bab;
  // }
  // .box-nav div:hover .adc {
  //   color: #005bab;
  //   // content: url(../assets/image/sp1.png);
  // }
  .acctit {
    color: #005bab;
  }
}

.scale-in-ver-top {
  -webkit-animation: scale-in-ver-top 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  animation: scale-in-ver-top 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}

@-webkit-keyframes scale-in-ver-top {
  0% {
    -webkit-transform: scaleY(0);
    transform: scaleY(0);
    -webkit-transform-origin: 100% 0;
    transform-origin: 100% 0;
    opacity: 1;
  }
  100% {
    -webkit-transform: scaleY(1);
    transform: scaleY(1);
    -webkit-transform-origin: 100% 0;
    transform-origin: 100% 0;
    opacity: 1;
  }
}
@keyframes scale-in-ver-top {
  0% {
    -webkit-transform: scaleY(0);
    transform: scaleY(0);
    -webkit-transform-origin: 100% 0;
    transform-origin: 100% 0;
    opacity: 1;
  }
  100% {
    -webkit-transform: scaleY(1);
    transform: scaleY(1);
    -webkit-transform-origin: 100% 0;
    transform-origin: 100% 0;
    opacity: 1;
  }
}
</style>
