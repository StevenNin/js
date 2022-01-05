<template>
  <div class="box">
    <div class="menubox2" id="certify">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div
            v-for="(slideContent, index) in slides"
            :key="index"
            :class="[index === focus2 ? 'swiper-slide' : 'swiper-slide ']"
          >
            <p>{{ slideContent.menuName }}</p>
            <img :src="slideContent.surfacePath" />
          </div>
        </div>
      </div>
      <div ref="preBtn" class="swiper-button-prev"></div>
      <div ref="nextBtn" class="swiper-button-next"></div>
      <!-- <div class="swiper-scrollbar"></div>  -->
    </div>

    <div class="menubox1">
      <div
        class="menu1Item"
        v-for="(row, j) in listFir"
        :key="j"
        @click="changeMenu(j)"
      >
        <span>{{ row.menu_name }}</span>
        <img
          v-show="j !== focus1"
          src="../../../../../src/assets/images/Circle.png"
          alt=""
        />
        <img
          v-show="j === focus1"
          src="../../../../../src/assets/images/Circle_active.png"
          alt=""
        />
      </div>
    </div>
    <funcBtns
      @leftDo="toL"
      @rightDo="toR"
      @upDo="toU"
      @downDo="toD"
      @okDo="confirm"
    />
  </div>
  <el-progress
    class="bar"
    color="#FFB820"
    :show-text="false"
    :percentage="proValue"
  >
  </el-progress>
</template>

<script>
import { defineComponent, ref, reactive, onMounted } from "vue";
import Swiper from "swiper"; // 引入库
import { useRoute, useRouter } from "vue-router";
import { useStore } from 'vuex'
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import funcBtns from "@/components/funcBtn/index.vue";
// import swiperCof from './swiperCof.js'

import { getMenuData } from "@/api/menu.js";
export default defineComponent({
  name: "routerPage",
  components: {
    funcBtns,
    Swiper,
  },
  setup() {
    onMounted(() => {
      var mySwiper = new Swiper(".swiper-container", {
        watchSlidesProgress: true,
        slidesPerView: "auto",
        centeredSlides: true,
        loop: true,
        loopedSlides: 5,
        initialSlide : 0, 
        observer:true,//修改swiper自己或子元素时，自动初始化swiper
        observeParents:true,//修改swiper的父元素时，自动初始化swiper
        on: {
          progress: function (progress) {
            for (var i = 0; i < this.slides.length; i++) {
              var slide = this.slides.eq(i);
              var slideProgress = this.slides[i].progress;
              let modify = 1;
              if (Math.abs(slideProgress) > 1) {
                modify = (Math.abs(slideProgress) - 1) * 0.3 + 1;
              }
              let translate = slideProgress * modify * 130 + "px";
              let scale = 1 - Math.abs(slideProgress) / 10;
              let translateY = 1 + "px";
              let zIndex = 999 - Math.abs(Math.round(10 * slideProgress));
              slide.transform(
                "translateX(" +
                  translate +
                  ") translateY(" +
                  translateY +
                  ") scale(" +
                  scale +
                  ")"
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
            var slideItems = document.getElementsByClassName("swiper-slide");
            for (var index in slideItems) {
              if (slideItems[index].style) {
                slideItems[index].style.color = "#333";
              }
            }
            slideItems[this.activeIndex].style.color = "red";
            focus2.value = this.realIndex;
            proValue.value = Math.floor(
              ((this.realIndex + 1) / slides.value.length) * 100
            );
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
    const router = useRouter();
    const store = useStore()
    let imgs = reactive([]);
    const listFir = ref([]);
    const slides = ref([]);
    const proValue = ref(10);
    const preBtn = ref(null);
    const nextBtn = ref(null);
    // 状态值
    const status = ref(0); // 默认0 聚焦一级目录   1聚焦二级目录
    // 一级目录聚焦
    const focus1 = ref(0);
    // 二级目录聚焦
    const focus2 = ref(0);
    // 功能键操作
    const toU = () => {
      status.value = 1;
    };
    const toD = () => {
      status.value = 0;
    };
    const changeMenu = (index) => {
      focus1.value = index;
      slides.value = listFir.value[index].subsetList;
      proValue.value = Math.floor(
        ( 1 / slides.value.length) * 100
      );
    };
    getMenuData()
      .then((data) => {
        console.log('路由导航数据:',data)
        listFir.value = data;
        if (listFir.value[0].subsetList.length > 0) {
          slides.value = listFir.value[0].subsetList;
          proValue.value = Math.floor(
            ( 1 / slides.value.length) * 100
          );
        } else {
          // slides.value = []
        }
      })
      .catch((error) => {
        console.log("错误信息", error);
    });

    const toL = () => {
      if (status.value) {
        preBtn.value.click();
      } else {
        if (focus1.value > 0) {
          focus1.value -= 1;
          slides.value = listFir.value[focus1.value].subsetList;
        }
      }
    };
    const toR = () => {
      if (status.value) {
        nextBtn.value.click();
      } else {
        if (focus1.value < listFir.value.length - 1) {
          focus1.value += 1;
          slides.value = listFir.value[focus1.value].subsetList;
        }
      }
    };
    const confirm = () => {
      // ok只聚焦二级目录才会跳转
      if (status.value) {
        store.commit('app/breadMenuChange',{
          host: '主页',
          menu1: listFir.value[focus1.value].menu_name,
          menu2: slides.value[focus2.value].menuName,
          menu3: '',
        });
        router.push({
          path: "/pages/supervision",
          query: {
            menuId: slides.value[focus2.value].menuId,
          },
        });
      }
    };

    return {
      listFir,
      focus1,
      focus2,
      toU,
      toD,
      toL,
      toR,
      confirm,
      slides,
      imgs,
      preBtn,
      nextBtn,
      router,
      changeMenu,
      proValue,
      store
    };
  },
});
</script>

<style lang="scss" scoped>
.box {
  padding: 15px;
  margin-top: 195px;
}
.menubox2 {
  color: #333;
}
.swiper-scrollbar {
  height: 10px;
  margin: 20px auto;
  width: 880px;
}
.menubox1 {
  margin: 40px auto 0 auto;
  display: flex;
  justify-content: space-between;
  width: 871px;
  .menu1Item {
    width: 117px;
    height: 117px;
    line-height: 117px;
    position: relative;
    font-size: 32px;
    color: #fff;
    span {
      position: absolute;
      top: 0;
      left: 27px;
    }
    img {
      width: 117px;
      height: 117px;
    }
  }
}
// swiper
#certify {
  position: relative;
  width: 1200px;
  margin: 0 auto;
  overflow-x: clip;
}

#certify .swiper-container {
  padding-bottom: 60px;
}

#certify .swiper-slide {
  width: 426px;
  height: 401px;
  background: #fff;
  box-shadow: 0 8px 30px #ddd;
}
#certify .swiper-slide img {
  display: block;
  width: 426px;
  height: 311px;
  -webkit-box-reflect: below 0px -webkit-gradient(linear, left top, left bottom, from(transparent), color-stop(70%, transparent), to(rgba(250, 250, 250, 0.3)));
}
#certify .swiper-slide p {
  line-height: 98px;
  padding-top: 0;
  text-align: left;
  text-indent: 22px;
  font-size: 40px;
  margin: 0;
}
#certify .swiper-slide.active p {
  color: #920000;
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
.swiper-button-next {
  opacity: 0;
}

.bar {
  width: 466px;
  height: 5px;
  margin: 40px auto 0 auto;
}
</style>