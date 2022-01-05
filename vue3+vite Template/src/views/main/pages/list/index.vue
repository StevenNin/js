<template>
  <container>
    <div class="risk">
      <div class="bnt">
        <ul>
          <li :class="{ tag: index === pageConfig.tag }" :key="index" @click="topath(item, index)" v-for="(item, index) in navList">{{ item.title }}</li>
        </ul>
        <el-pagination
          :default-current-page="ThisPage"
          :total="pageConfig.pageTotal"
          @current-change="currentChange"
          @next-click="nextClick"
          class="pagesele"
          layout="prev, pager, next"
          next-text="下一页"
          prev-text="上一页"
          v-model="ThisPage"
        >
        </el-pagination>
      </div>
    </div>
  </container>
  <funcBtns @downDo="downDo" @leftDo="leftDo" @okDo="okDo" @rightDo="rightDo" @upDo="upDo" />
</template>

<script>
import container from '@/components/container/index.vue';
import { useRoute, useRouter } from "vue-router";
import { ref, reactive } from 'vue';
import { useStore } from 'vuex'
import { getArticleList } from '@/api/article.js'
export default {
  components: {
    container,
  },
  setup() {
    const router = useRouter();
    const route = useRoute();
    const store = useStore();
    const pathP = ref('')
    const navList = ref([
      {
        title: '中国共产党基层组织选举工作条例',
        type: '1',
        url: '',
      },
      {
        title: '中国共产党纪律处分条例',
        type: '2',
        url: '',
      },
      {
        title: '党委（党组）落实全面从严治党主体责任规定',
        type: '3',
        url: '',
      },
      {
        title: '纪检监察机关处理检举控告工作规则',
        type: '4',
        url: '',
      },
      {
        title: '信息公开',
        type: '',
        url: '',
      },

      {
        title: '责任清单',
        type: '',
        url: '',
      },
      {
        title: '中国共产党基层组织选举工作条例',
        type: '',
        url: '',
      },
      {
        title: '中国共产党纪律处分条例',
        type: '',
        url: '',
      },
      {
        title: '党委（党组）落实全面从严治党主体责任规定',
        type: '',
        url: '',
      },
      {
        title: '纪检监察机关处理检举控告工作规则',
        type: '',
        url: '',
      },
      {
        title: '风险防控',
        type: '',
        url: '',
      },
      {
        title: '日常监督',
        type: '',
        url: '',
      },
      {
        title: '组织体系',
        type: '',
        url: '',
      },
      {
        title: '信息公开',
        type: '',
        url: '',
      }
    ]);
    const pageConfig = reactive({
      pageTotal: 100, // 当前中页码
      ThisPage: 1, // 当前的页码
      tag: 0, // 当前选中的列表下表
    });
    // 获取列表数据
    const getData = (data)=>{
      getArticleList(data).then(res=>{
        console.log('列表返回数据：',res)
        navList.value = res.data
      }).catch(error=>{
        console.log("错误信息",error)
      })
    }
    getData({value:1, pageNum: pageConfig.ThisPage,pageSize:14})

    const selected = ref('@/assets/images/bntactive.png');

    // 当前点击某个元素
    const topath = (data, index) => {
      pageConfig.tag = index;
    };

    // 上建
    const upDo = () => {
      if (pageConfig.tag === 0) return;
      pageConfig.tag--;

      if (pageConfig.tag < 5) {
        document.querySelector('.bnt').scrollTop = document.querySelector('.bnt').scrollTop - 40;
      }
    };
    // 下键
    const downDo = () => {
      pageConfig.tag++;
      if (pageConfig.tag > 5) {
        document.querySelector('.bnt').scrollTop = document.querySelector('.bnt').scrollTop + 40;
      }
      if (pageConfig.tag > navList.value.length - 1) pageConfig.tag--;
    };
    // 确认
    const okDo = () => {
      if(navList.value[pageConfig.tag].link){
        window.open(navList.value[pageConfig.tag].link)
      }else{
        switch (navList.value[pageConfig.tag].type){
          case '1':
            pathP.value = '/pages/detailsPage'
            break;
          case '2':
            pathP.value = '/pages/imagelist'
            break;
          case '3':
            pathP.value = '/pages/image'
            break;
          case '4':
            pathP.value = '/pages/videoList'
            break;
        };
        console.log(navList.value[pageConfig.tag].id)
        router.push({
          path: pathP.value,
          query: {
            articleId: navList.value[pageConfig.tag].id
          }
        })
      }
    };

    const nextClick = () => {
      console.log(11);
    };
    // 上一页
    const leftDo = () => {
      document.querySelector('.btn-prev').click();
      console.log(pageConfig.ThisPage)
      getData({value:1, pageNum: pageConfig.ThisPage,pageSize:14})
    };
    // 下一页
    const rightDo = () => {
      document.querySelector('.btn-next').click();
      console.log(pageConfig.ThisPage)
      getData({value:1, pageNum: pageConfig.ThisPage,pageSize:14})
    };

    const currentChange = (e) => {
      pageConfig.ThisPage = e;
    };
    return {store,getData,pathP,router,route ,selected, navList, topath, upDo, downDo, okDo, leftDo, rightDo, nextClick, currentChange, pageConfig };
  },
};
</script>
<style lang="scss" scoped>
.risk {
  width: 100%;
  height: 90%;
  display: flex;
  position: relative;
  top: 5%;
  .bnt {
    width: 100%;
    height: 100%;
    overflow: auto;
    ul {
      height: 86%;
    }
    li {
      font-size: 24px;
      line-height: 38px;
      text-align: initial;
      cursor: pointer;
      color: #333333;
    }
    .tag {
      color: #5c100a;
    }
    .pagesele {
      margin-right: 146px;
      display: flex;
      justify-content: end;
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
