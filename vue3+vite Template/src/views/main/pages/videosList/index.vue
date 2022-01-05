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
            <video :src="slideContent"></video>
            <div class="info">{{ title }}
                 <img src="../../../../../src/assets/images/play.png" alt="">
            </div>
           
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
  </div>
</template>
<script>
import { defineComponent, ref, reactive ,onMounted } from "vue";
import { getArticleDetail } from '@/api/article.js'
import { useRoute } from "vue-router";
import Swiper from "swiper"; // 引入库
import "swiper/css";
import "swiper/css/navigation";
export default defineComponent({
  setup() {
    onMounted(() => {
      var mySwiper = new Swiper(".swiper-container", {
        watchSlidesProgress: true,
        slidesPerView: "auto",
        centeredSlides: true,
        // spaceBetween: 10,
        // loop: true,
        // loopedSlides: ,
        // pagination: {
        //   el: ".swiper-pagination",
        // },
        on: {
          progress: function (progress) {
            for (var i = 0; i < this.slides.length; i++) {
              var slide = this.slides.eq(i);
              var slideProgress = this.slides[i].progress;
              let modify = 1;
              if (Math.abs(slideProgress) > 1) {
                modify = (Math.abs(slideProgress) - 1) * 0.3 + 1;
              }
              let translate = slideProgress * modify * 183 + "px";
              let scale = 1 - Math.abs(slideProgress) / 9.9;
              let zIndex = 999 - Math.abs(Math.round(10 * slideProgress));
              slide.transform(
                " scale(" + scale + ")"
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
    const slides = ref([]);
    // 初始值声明
    const onFocus = ref(0);
    const preBtn = ref(null)
    const nextBtn = ref(null)
    const proValue = ref(0)
    const route = useRoute()
    // 获取数据
    // route.query.articleId  28
    getArticleDetail({id:route.query.articleId}).then(res=>{
        slides.value = res.data.videoUrl.split(',')
        title.value = res.data.title
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
      let video = document.createElement("video");
      let isFull = false;
      video.src = slides.value[onFocus.value];
      var body = document.getElementsByClassName("videoBox");
      body[0].appendChild(video);
      video.setAttribute("controls", "");
      video.width = 0;
      video.height = 0;
      video.play();
      video.requestFullscreen();
      const fullScrn = () => {
        if (isFull) {
          body[0].removeChild(video);
          window.removeEventListener("resize", fullScrn);
        } else {
          isFull = true;
        }
      };
      window.addEventListener("resize", fullScrn);
      console.log(body, video);
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
  border-radius: 10px;
}
#certify .swiper-slide video {
  border-radius: 10px;
  width: 936px;
  height: 528px;
}
#certify .swiper-slide img {
  width: 34px;
  height: 34px;
  position: absolute;
  bottom: 17px;
  right: 24px;
}
#certify .swiper-slide .info {
  line-height: 70px;
  background-color: rgb(0, 0, 0, .5);
  width: 100%;
  text-align: left;
  text-indent: 22px;
  font-size: 24px;
  color: #fff;
  position: absolute;
  bottom: 0;
  border-end-start-radius: 10px;
  border-end-end-radius: 10px;
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
.el-progress-bar__outer{
    background-color: rgb(0, 0, 0, .27)!important;
}
</style>
