<template>
  <div class="box" :style="{ backgroundImage: isImage && 'url( ' + bgurl + ' )' ,zIndex:'30'}">
    <img src="@/assets/images/slogan.png" alt="" srcset="" />
    <video
      v-if="isImage === false"
      :src="bgurl"
      loop="loop"
      autoplay="autoplay"
    ></video>
    <funcBtns @okDo="confirm"/>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router'
import { getImg } from '@/api/backGroud.js'
export default defineComponent({
  name: 'dashBoard',
  setup() {
    const route = useRoute()
    const router = useRouter()
    const isImage = ref(true);
    let bgurl = ref('');
    const confirm =()=>{
      router.push('/pages/routerPage')
    };
    // 全屏事件23
    var el = document.documentElement;
    var rfs = el.requestFullScreen || el.webkitRequestFullScreen || el.mozRequestFullScreen || el.msRequestFullscreen;      
    if(typeof rfs != "undefined" && rfs) {
        rfs.call(el);
    };
    getImg({bType:1}).then(res=>{
      bgurl.value  = res.data.filePath
      const endTypelen = bgurl.value.lastIndexOf('.'),
            endtype = bgurl.value.substring(endTypelen, bgurl.value.length);
      const set = new Set(['.png', '.jpg', '.webp', '.gif', '.jpeg']);
      isImage.value = set.has(endtype)
    }).catch(error=>{
      console.log(error)
    })
    
    // console.log(set, set.has(endtype));
    return { isImage, bgurl ,confirm,route,router};
  },
});
</script>

<style lang="scss" scoped>
.box {
  width: 100%;
  height: 100vh;
  // background-image: url('@/assets/images/homebg1.png');
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-size: auto;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  img {
    width: 60%;
    height: 40%;
    z-index: 999;
    margin-top: 15%;
    // position: fixed;
    // right: 0;
    // bottom: 0;
  }
}
video {
  position: fixed; //视频定位方式设为固定
  right: 0;
  bottom: 0; //视频位置
  min-width: 100%;
  min-height: 100%; //不会因视频尺寸造成页面需要滚动
  width: auto;
  height: auto; //尺寸保持原视频大小
  // z-index: 1; //z轴定位，小于0即可
  -webkit-filter: grayscale(20%); //添加灰度蒙版，如果设定为100%则视频显示为黑白
}
</style>