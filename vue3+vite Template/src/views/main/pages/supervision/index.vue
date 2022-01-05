<template>
  <container>
    <div class="risk">
      <div class="leftbg"></div>
      <div class="bnt">
        <div>
          <!--  -->
          <div class="bntlist" v-for="(item, index) in navList" :key="index" :class="{ tag: index === tag }" @click="topath(item, index)">{{ item.menuName }}</div>
        </div>
      </div>
    </div>
  </container>
  <funcBtns @upDo="upDo" @downDo="downDo" @okDo="okDo" />
</template>

<script>
import container from '@/components/container/index.vue';
import { ref, reactive } from 'vue';
import { useRoute, useRouter } from 'vue-router'
import { getMenuInfo } from '@/api/menu.js'
export default {
  components: {
    container,
  },
  setup() {
    const router = useRouter()
    const route = useRoute()
    const navList = ref([
      {
        name: '责任清单',
        type: '',
        url: '',
      },
      {
        name: '风险防控',
        type: '',
        url: '',
      },
      {
        name: '日常监督',
        type: '',
        url: '',
      },
      {
        name: '组织体系',
        type: '',
        url: '',
      },
      {
        name: '信息公开',
        type: '',
        url: '',
      },
    ]);
    const tag = ref(0);
    const selected = ref('@/assets/images/bntactive.png');
    // 获取页面数据
    getMenuInfo(route.query.menuId)
      .then((res)=>{
        console.log('目录列表返回数据',res)
        navList.value = res.data
      }).catch((error) => {
        console.log("错误信息", error);
    });
    // 当前点击某个元素
    const topath = (data, index) => {
      console.log(data, index);
      tag.value = index;
    };

    // 上建
    const upDo = () => {
      if (tag.value === 0) return;
      tag.value--;

      if (tag.value < 5) {
        document.querySelector('.bnt').scrollTop = document.querySelector('.bnt').scrollTop - 40;
      }
    };
    // 下键
    const downDo = () => {
      tag.value++;

      if (tag.value > 5) {
        document.querySelector('.bnt').scrollTop = document.querySelector('.bnt').scrollTop + 40;
      }
      if (tag.value > navList.value.length - 1) tag.value--;
    };
    // 确认
    const okDo = () => {
      console.log(navList.value[tag.value].columnId);
      if(navList.value[tag.value].link){
        window.open(navList.value[tag.value].link)
      }else{
        if(navList.value[tag.value].columnId != 0){
          router.push({
            path:'/pages/list',
            query: {
              listId: navList.value[tag.value].menuId
            }
          })
        }else {
          router.push({
            path:'/pages/supervision',
            query: {
              menuId: navList.value[tag.value].menuId
            }
          })
        }
      }
    };

    return { selected, navList, tag, topath, upDo, downDo, okDo ,router,route};
  },
};
</script>
<style lang="scss" scoped>
.risk {
  width: 100%;
  height: 90%;
  display: flex;
  position: relative;
  top: 10%;
  .leftbg {
    background-image: url('@/assets/images/lotus.png');
    background-size: 100% 100%;
    width: 66%;
  }
  .bnt {
    width: 30%;
    height: 100%;
    overflow: auto;
    .bntlist {
      width: 80%;
      min-height: 3rem;
      color: white;
      text-align: center;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 1.5rem;
      letter-spacing: 2px;
      background-image: url('@/assets/images/bnt.png');
      background-size: 100% 100%;
      margin-top: 6%;
      cursor: pointer;
    }
    .tag {
      background-image: url('@/assets/images/bntactive.png');
      color: #5c100a;
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
    background: rgba(0, 0, 0, 0.1);
    -webkit-box-shadow: inset006pxrgba(0, 0, 0, 0.5);
  }
  ::-webkit-scrollbar-thumb:window-inactive {
    background: rgba(240, 240, 240, 0.4);
  }
}
</style>