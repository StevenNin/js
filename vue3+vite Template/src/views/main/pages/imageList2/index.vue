<template>
  <div class="videoPage">
    <div class="videoBox" id="certify">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div
            v-for="(slideContent, index) in slides"
            :key="index"
            :class="[index === onFocus ? 'swiper-slide' : 'swiper-slide ']"
          >
            <img :src="slideContent" alt="" >
            <div class="info">{{ title }}</div>
          </div>
        </div>
      </div>
      <div ref="preBtn" class="swiper-button-prev"></div>
      <div ref="nextBtn" class="swiper-button-next"></div>
    </div>

    <el-progress
        class="bar"
        color="#FFB820"
        :show-text='false'
        :percentage="proValue">
    </el-progress>
    <funcBtns @okDo="comfirmClick" @leftDo="leftBtn" @rightDo="rightBtn" />
    <!-- 蒙层 -->
    <div v-show="isCover" class="coverBg">
      <img :src="isCoverSrc" alt="">
    </div>
  </div>
</template>
<script>
import { defineComponent, ref ,onMounted } from "vue";
import Swiper from "swiper"; // 引入库
import "swiper/css";
import "swiper/css/navigation";
import { useRoute } from "vue-router";
import { getArticleDetail } from '@/api/article.js'
export default defineComponent({
  setup() {
    onMounted(() => {
      var mySwiper = new Swiper(".swiper-container", {
        watchSlidesProgress: true,
        slidesPerView: "auto",
        centeredSlides: true,
        loopedSlides: 5,
        on: {
          progress: function (progress) {
            for (var i = 0; i < this.slides.length; i++) {
              var slide = this.slides.eq(i);
              var slideProgress = this.slides[i].progress;
              let modify = 1;
              if (Math.abs(slideProgress) > 1) {
                modify = (Math.abs(slideProgress) - 1) * 0.3 + 1;
              }
              let translate = slideProgress * modify * 80 + "px";
              let scale = 1 - Math.abs(slideProgress) / 9.9;
              let zIndex = 999 - Math.abs(Math.round(10 * slideProgress));
              slide.transform(
                "translateX(" + translate + ") scale(" + scale + ")"
              );
              slide.css("zIndex", zIndex);
              slide.css("opacity", 1);
              if (Math.abs(slideProgress) > 3) {
                slide.css("opacity", 0);
              }
            }
          },
          setTransition: function (swiper, transition) {
            for (var i = 0; i < this.slides.length; i++) {
              var slide = this.slides.eq(i);
              slide.transition(transition);
            }
          },
          slideChange: function (swiper) {
            var slideItems = document.getElementsByClassName("info");
            for (var index in slideItems) {
              if (slideItems[index].style) {
                slideItems[index].style.display = "none";
              }
            }
            slideItems[this.activeIndex].style.display = "block";
            onFocus.value = this.activeIndex;
            proValue.value = Math.floor(((this.activeIndex+1)/slides.value.length)*100)
            isCoverSrc.value = slides.value[this.activeIndex]
          },
        },
      });
      preBtn.value.onclick = () => {
        mySwiper.slidePrev();
      };
      nextBtn.value.onclick = () => {
        mySwiper.slideNext();
      };
    });

    const title = ref('')
    const route = useRoute()
    const slides = ref([]);
    // 初始值声明
    const isCover = ref(false)
    const isCoverSrc = ref('')
    const onFocus = ref(0);
    const preBtn = ref(null)
    const nextBtn = ref(null)
    const proValue = ref(Math.floor(((1)/slides.value.length)*100))
    // 获取页面数据
    // console.log(route.query.articleId)  16
    getArticleDetail({ id:route.query.articleId }).then(res=>{
      slides.value  = res.data.imgUrls
      title.value = res.data.title
      isCoverSrc.value = slides.value[0]
    }).catch(error=>{
      console.log('错误信息',error)
    })

    // 按钮事件
    const leftBtn = () => {
        preBtn.value.click()
    };
    const rightBtn = () => {
        nextBtn.value.click()
    };
    // ok按钮
    const comfirmClick = () => {
      isCover.value = !isCover.value;
    };
    return {
      comfirmClick,
      leftBtn,
      rightBtn,
      slides,
      onFocus,
      preBtn,
      nextBtn,
      proValue,
      isCover,
      isCoverSrc,
      route,
      title
    };
  },
});
</script>

<style lang="scss" scoped>
.videoBox {

  width: 100%;
}
.videoItem {
  border: 1px solid gray;
  width: 200px;
  height: 150px;
  video {
    width: 200px;
    height: 150px;
  }
}
.active {
  border-color: red;
}
// swiper
#certify {
  position: relative;
  margin-top:200px;
}

#certify .swiper-container {
  padding-bottom: 60px;
}

#certify .swiper-slide {
  width: 936px;
  height: 528px;
  box-shadow: 0 8px 30px #ddd;
  position: relative;
}
#certify .swiper-slide img {
  width: 936px;
  height: 528px;
}
#certify .swiper-slide .info {
  line-height: 60px;
  background-color: rgb(0, 0, 0, .5);
  min-width: 300px;
  height: 60px;
  text-align: center;
  font-size: 24px;
  color: #fff;
  position: absolute;
  bottom: 15px;
  left: 318px;
  border-radius: 28px;
}
#certify .swiper-slide.active p{
  color:#920000;
}
#certify .swiper-pagination {
  width: 100%;
  bottom: 20px;
}

#certify .swiper-pagination-bullets .swiper-pagination-bullet {
  margin: 0 5px;
  border: 3px solid #fff;
  background-color: #d5d5d5;
  width: 10px;
  height: 10px;
  opacity: 1;
}

#certify .swiper-pagination-bullets .swiper-pagination-bullet-active {
  border: 3px solid #00aadc;
  background-color: #fff;
}
.swiper-button-prev,
.swiper-button-next{
  opacity: 0;
}

.bar{
    width:466px;
    height:5px;
    margin: 40px  auto 0 auto ;
}
.coverBg{
  position: fixed;
  // display: ;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 45;
  background-color: rgb(0, 0, 0, .5);
  display: flex;
  justify-content: center;
  align-items: center;
  img{
    max-width: 100%;
    max-height: 100%;
  }
}
</style>
