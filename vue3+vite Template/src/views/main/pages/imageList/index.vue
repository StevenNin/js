<template>
  <div class="amplification" v-show="pageConfig.isShow">
    <img :src="pageConfig.ThisImage" alt="" class="img_wrap" srcset="" />
  </div>
  <!-- <container>

  </container> -->

  <div class="risk">
    <div class="Breadcrumb">
      <el-breadcrumb :separator-icon="ArrowRight">
        <el-breadcrumb-item :to="{ path: '/' }">
          <el-icon><home-filled /></el-icon>11
        </el-breadcrumb-item>
        <el-breadcrumb-item>promotion management</el-breadcrumb-item>
        <el-breadcrumb-item>promotion list</el-breadcrumb-item>
        <el-breadcrumb-item>promotion detail</el-breadcrumb-item>
      </el-breadcrumb>
    </div>

    <div
      :style="{ backgroundImage: 'url(' + pageConfig.ThisImage + ')' }"
      class="bnt"
    >
      <div class="pagesele">
        <div
          :class="{ boxactive: index === pageConfig.tag }"
          :key="index"
          class="box"
          v-for="(item, index) in navList"
        >
          <img :src="item.img || item" alt="" srcset="" />
        </div>
      </div>
    </div>
  </div>
  <funcBtns
    @downDo="downDo"
    @leftDo="leftDo"
    @okDo="okDo"
    @rightDo="rightDo"
    @upDo="upDo"
  />
</template>

<script>
import container from "@/components/container/index.vue";
import { ref, reactive } from "vue";
import { getArticleDetail } from "@/api/article.js";
import { useRoute } from "vue-router";
export default {
  components: {
    container,
  },
  setup() {
    const navList = ref([
      {
        name: "你相信有灵魂伴侣吗",
        img: "http://img.kaiyanapp.com/945fa937f0955b31224314a4eeef59b8.jpeg?imageMogr2/quality/100",
        video:
          "https://baobab.kaiyanapp.com/api/v1/playUrl?vid=5544&resourceType=video&editionType=default&source=aliyun&playUrlType=url_oss&ptl=true",
        videoId: "1",
      },
      {
        name: "2020 奥斯卡提名动画短片：「勿忘我」",
        img: "http://img.kaiyanapp.com/4bb009bdb0518331f05195e1c3b8dd2d.jpeg?imageMogr2/quality/60/format/jpg",
        video:
          "https://baobab.kaiyanapp.com/api/v1/playUrl?vid=184884&resourceType=video&editionType=default&source=aliyun&playUrlType=url_oss&ptl=true",
        videoId: "2",
      },
      {
        name: "2020 奥斯卡最佳动画短片提名：「女儿」",
        img: "http://img.kaiyanapp.com/e573ac166b01c8e33f1756f542004e8e.png?imageMogr2/quality/60/format/jpg",
        video:
          "https://baobab.kaiyanapp.com/api/v1/playUrl?vid=186094&resourceType=video&editionType=default&source=aliyun&playUrlType=url_oss&ptl=true",
        videoId: "3",
      },
      {
        name: "获奖搞笑恐怖动画短片：「死神来了蜗牛版」",
        img: "http://img.kaiyanapp.com/52ef4e573ed5d4189413ebeeab9ae7f2.png?imageMogr2/quality/60/format/jpg",
        video:
          "https://baobab.kaiyanapp.com/api/v1/playUrl?vid=189046&resourceType=video&editionType=default&source=aliyun&playUrlType=url_oss&ptl=true",
        videoId: "4",
      },
      {
        name: "科比 NBA 职业生涯的 40 个好球！",
        img: "http://img.kaiyanapp.com/ad8bd426e87829e0ba1f480f003da216.jpeg?imageMogr2/quality/60/format/jpg",
        video:
          "https://baobab.kaiyanapp.com/api/v1/playUrl?vid=185895&resourceType=video&editionType=default&source=aliyun&playUrlType=url_oss&ptl=true",
        videoId: "5",
      },
      {
        name: "高燃女性群像混剪：The Lady「平权之声」",
        img: "http://img.kaiyanapp.com/ccbc65d60ad0af98b8b40dd8842068d8.png?imageMogr2/quality/60/format/jpg",
        video:
          "https://baobab.kaiyanapp.com/api/v1/playUrl?vid=190478&resourceType=video&editionType=default&source=aliyun&playUrlType=url_oss&ptl=true",
        videoId: "6",
      },
      {
        name: "战斗女神踩点混剪：性感女神，在线揍人",
        img: "http://img.kaiyanapp.com/51ed6d181e19d635ff56528762f4f6b6.jpeg?imageMogr2/quality/60/format/jpg",
        video:
          "https://baobab.kaiyanapp.com/api/v1/playUrl?vid=182072&resourceType=video&editionType=default&source=aliyun&playUrlType=url_oss&ptl=true",
        videoId: "7",
      },
      {
        name: "换个角度看印度，友好包容的文明古国",
        img: "http://img.kaiyanapp.com/940ccd4fc7f78b17aeea1d1544b1c7bb.jpeg?imageMogr2/quality/60/format/jpg",
        video:
          "https://baobab.kaiyanapp.com/api/v1/playUrl?vid=173634&resourceType=video&editionType=default&source=aliyun&playUrlType=url_oss&ptl=true",
        videoId: "8",
      },
      {
        name: "泰国温馨广告：祝你生日快乐",
        img: "http://img.kaiyanapp.com/fd70a1e670f6c9cc0a272495a257d4c3.png?imageMogr2/quality/60/format/jpg",
        video:
          "https://baobab.kaiyanapp.com/api/v1/playUrl?vid=187719&resourceType=video&editionType=default&source=aliyun&playUrlType=url_oss&ptl=true",
        videoId: "9",
      },
      {
        name: "卡妹最新 SNL 现场首演强势新单「Easy」",
        img: "http://img.kaiyanapp.com/c51d878668c73578be66b87ea1119ac1.jpeg?imageMogr2/quality/60/format/jpg",
        video:
          "https://baobab.kaiyanapp.com/api/v1/playUrl?vid=175743&resourceType=video&editionType=default&source=aliyun&playUrlType=url_oss&ptl=true",
        videoId: "10",
      },

      {
        name: "你相信有灵魂伴侣吗",
        img: "http://img.kaiyanapp.com/945fa937f0955b31224314a4eeef59b8.jpeg?imageMogr2/quality/100",
        video:
          "https://baobab.kaiyanapp.com/api/v1/playUrl?vid=5544&resourceType=video&editionType=default&source=aliyun&playUrlType=url_oss&ptl=true",
        videoId: "1",
      },
      {
        name: "2020 奥斯卡提名动画短片：「勿忘我」",
        img: "http://img.kaiyanapp.com/4bb009bdb0518331f05195e1c3b8dd2d.jpeg?imageMogr2/quality/60/format/jpg",
        video:
          "https://baobab.kaiyanapp.com/api/v1/playUrl?vid=184884&resourceType=video&editionType=default&source=aliyun&playUrlType=url_oss&ptl=true",
        videoId: "2",
      },
      {
        name: "2020 奥斯卡最佳动画短片提名：「女儿」",
        img: "http://img.kaiyanapp.com/e573ac166b01c8e33f1756f542004e8e.png?imageMogr2/quality/60/format/jpg",
        video:
          "https://baobab.kaiyanapp.com/api/v1/playUrl?vid=186094&resourceType=video&editionType=default&source=aliyun&playUrlType=url_oss&ptl=true",
        videoId: "3",
      },
      {
        name: "获奖搞笑恐怖动画短片：「死神来了蜗牛版」",
        img: "http://img.kaiyanapp.com/52ef4e573ed5d4189413ebeeab9ae7f2.png?imageMogr2/quality/60/format/jpg",
        video:
          "https://baobab.kaiyanapp.com/api/v1/playUrl?vid=189046&resourceType=video&editionType=default&source=aliyun&playUrlType=url_oss&ptl=true",
        videoId: "4",
      },
      {
        name: "科比 NBA 职业生涯的 40 个好球！",
        img: "http://img.kaiyanapp.com/ad8bd426e87829e0ba1f480f003da216.jpeg?imageMogr2/quality/60/format/jpg",
        video:
          "https://baobab.kaiyanapp.com/api/v1/playUrl?vid=185895&resourceType=video&editionType=default&source=aliyun&playUrlType=url_oss&ptl=true",
        videoId: "5",
      },
      {
        name: "高燃女性群像混剪：The Lady「平权之声」",
        img: "http://img.kaiyanapp.com/ccbc65d60ad0af98b8b40dd8842068d8.png?imageMogr2/quality/60/format/jpg",
        video:
          "https://baobab.kaiyanapp.com/api/v1/playUrl?vid=190478&resourceType=video&editionType=default&source=aliyun&playUrlType=url_oss&ptl=true",
        videoId: "6",
      },
      {
        name: "战斗女神踩点混剪：性感女神，在线揍人",
        img: "http://img.kaiyanapp.com/51ed6d181e19d635ff56528762f4f6b6.jpeg?imageMogr2/quality/60/format/jpg",
        video:
          "https://baobab.kaiyanapp.com/api/v1/playUrl?vid=182072&resourceType=video&editionType=default&source=aliyun&playUrlType=url_oss&ptl=true",
        videoId: "7",
      },
      {
        name: "换个角度看印度，友好包容的文明古国",
        img: "http://img.kaiyanapp.com/940ccd4fc7f78b17aeea1d1544b1c7bb.jpeg?imageMogr2/quality/60/format/jpg",
        video:
          "https://baobab.kaiyanapp.com/api/v1/playUrl?vid=173634&resourceType=video&editionType=default&source=aliyun&playUrlType=url_oss&ptl=true",
        videoId: "8",
      },
      {
        name: "泰国温馨广告：祝你生日快乐",
        img: "http://img.kaiyanapp.com/fd70a1e670f6c9cc0a272495a257d4c3.png?imageMogr2/quality/60/format/jpg",
        video:
          "https://baobab.kaiyanapp.com/api/v1/playUrl?vid=187719&resourceType=video&editionType=default&source=aliyun&playUrlType=url_oss&ptl=true",
        videoId: "9",
      },
      {
        name: "卡妹最新 SNL 现场首演强势新单「Easy」",
        img: "http://img.kaiyanapp.com/c51d878668c73578be66b87ea1119ac1.jpeg?imageMogr2/quality/60/format/jpg",
        video:
          "https://baobab.kaiyanapp.com/api/v1/playUrl?vid=175743&resourceType=video&editionType=default&source=aliyun&playUrlType=url_oss&ptl=true",
        videoId: "10",
      },
    ]);
    const pageConfig = reactive({
      pageTotal: 100, // 当前中页码
      tag: 0, // 当前选中的列表下表
      ThisImage: "",
      isShow: false,
    });

    pageConfig.ThisImage = navList.value[0].img;

    const selected = ref("@/assets/images/bntactive.png");

    const route = useRoute();
    // 当前点击某个元素
    const topath = (data, index) => {
      pageConfig.tag = index;
    };

    // 上建
    const upDo = () => {
      // if (pageConfig.tag === 0) return;
      // pageConfig.tag--;
      // if (pageConfig.tag < 5) {
      //   document.querySelector('.bnt').scrollTop = document.querySelector('.bnt').scrollTop - 40;
      // }
    };
    // 下键
    const downDo = () => {
      // pageConfig.tag++;
      // if (pageConfig.tag > 5) {
      //   document.querySelector('.bnt').scrollTop = document.querySelector('.bnt').scrollTop + 40;
      // }
      // if (pageConfig.tag > navList.value.length - 1) pageConfig.tag--;
    };
    // 确认
    const okDo = () => {
      pageConfig.ThisImage = navList.value[pageConfig.tag];
      pageConfig.isShow = !pageConfig.isShow;
    };

    // 获取页面数据
    // console.log(route.query.articleId)  16
    getArticleDetail({ id: route.query.articleId })
      .then((res) => {
        navList.value = res.data.imgUrls;
        pageConfig.ThisImage = navList.value[0];
      })
      .catch((error) => {
        console.log("错误信息", error);
      });

    const nextClick = () => {};
    // 上一页
    const leftDo = () => {
      if (pageConfig.tag === 0) return;
      pageConfig.tag--;
      pageConfig.ThisImage = navList.value[pageConfig.tag];
      if (pageConfig.tag < 5) {
        document.querySelector(".pagesele").scrollLeft =
          document.querySelector(".pagesele").scrollLeft - 200;
      }
    };
    // 下一页
    const rightDo = () => {
      pageConfig.tag++;
      try {
        pageConfig.ThisImage = navList.value[pageConfig.tag];
      } catch (error) {}
      if (pageConfig.tag > 5) {
        document.querySelector(".pagesele").scrollLeft =
          document.querySelector(".pagesele").scrollLeft + 200;
      }
      if (pageConfig.tag > navList.value.length - 1) pageConfig.tag--;
    };

    return {
      route,
      selected,
      navList,
      topath,
      upDo,
      downDo,
      okDo,
      leftDo,
      rightDo,
      nextClick,
      pageConfig,
    };
  },
};
</script>
<style lang="scss" scoped>
.risk {
  // width: 100%;
  // height: 95%;
  // display: flex;
  // position: relative;
  // top: 5%;

  width: 96%;
  height: 85%;
  display: flex;
  position: relative;
  top: 20%;
  margin: auto;
  .leftbg {
    background-size: 100% 100%;
    width: 66%;
  }
  .bnt {
    width: 100%;
    height: 88%;
    overflow: auto;
    background-image: url("@/assets/images/lotus.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    position: absolute;
    .pagesele {
      bottom: 0;
      position: inherit;
      width: 100%;
      // height: 15%;
      height: 10%;

      background: rgba(0, 0, 0, 0.8);
      display: flex;
      overflow-x: auto;
      overflow-y: hidden;

      .box {
        width: 5%;
        height: 90%;
        flex-shrink: 0;
        // padding-top: 1%;
        // display: block;
        // float: left;

        display: flex;
        justify-content: center;
        align-items: center;

        img {
          width: 75%;
          height: 75%;
          padding-top: 6%;
        }
      }

      .boxactive {
        background-image: url("@/assets/images/activeimage.png");
        background-size: 100% 100%;
      }
    }
  }
  /* 设置滚动条的样式 */
  ::-webkit-scrollbar {
    width: 12px;
  }
  /* 滚动槽 */
  ::-webkit-scrollbar-track {
    -webkit-box-shadow: inset006pxrgba(0, 0, 0, 0.3);
    border-radius: 10px;
  }
  /* 滚动条滑块 */
  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: rgba(95, 24, 24, 0.1);
    -webkit-box-shadow: inset006pxrgba(0, 0, 0, 0.5);
  }
  ::-webkit-scrollbar-thumb:window-inactive {
    background: rgba(0, 0, 0, 0);
  }
}
.amplification {
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  background: black;
  z-index: 15;
  display: flex;
  justify-content: center;
  align-items: center;
}
.img_wrap {
  max-height: 100%;
  
  // position: absolute;
  // left: 50%;
  // top: 50%;
  // transform: translate(-50%, -50%); /* 50%为自身尺寸的一半 */
  background-repeat: no-repeat;
}

.Breadcrumb {
  width: 95%;
  height: 30px;
  position: fixed;
  top: 13%;
  color: white;
  // margin: auto;
  // display: flex;
  // align-items: center;
  // justify-content: start;
  border-bottom: 1px solid #000;
}
.el-breadcrumb__inner {
  color: white !important;
}
</style>
