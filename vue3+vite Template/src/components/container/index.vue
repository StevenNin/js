<template >
  <div class="box-boder">
    <div class="box">
      <div class="Breadcrumb">
        <el-breadcrumb :separator-icon="ArrowRight">
          <el-breadcrumb-item :to="{ path: '/' }">
            主页
          </el-breadcrumb-item>
          <el-breadcrumb-item v-for="item in menuList" :key="item">
            {{ item }}
          </el-breadcrumb-item>
          <!-- <el-breadcrumb-item>promotion management</el-breadcrumb-item>
          <el-breadcrumb-item>promotion list</el-breadcrumb-item>
          <el-breadcrumb-item>promotion detail</el-breadcrumb-item> -->
        </el-breadcrumb>
      </div>
      <div class="slottp">
        <slot></slot>
      </div>
    </div>
  </div>
</template>
<script>
import { ref } from 'vue';
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'

export default {
  setup(){
    const store = useStore()
    const route = useRoute()
    const menuList  = ref([]) 
    let menuData =  store.state.app.breadMenu
    // 面包屑导航数据配置
    menuList.value.push(menuData.menu1)
    menuList.value.push(menuData.menu2)

    // todo 详情页面添加路由信息
    if(route.path == '/pages/list'){
      menuList.value.push(menuData.menu3)
    }
    console.log(menuList.value,33333)
    return{
      store ,route,menuList
    }
  }
};


</script>
<style lang="scss" scoped>
.box-boder {
  width: 94%;
  height: 82%;
  margin: 0 auto;
  border: 0.5vw solid rgba(0, 0, 0, 0.31);
  position: absolute;
  bottom: 3vh;
  left: 0;
  right: 0;
  overflow: auto;
  .box {
    width: 100%;
    height: 100%;
    background: #fff;
    .Breadcrumb {
      width: 95%;
      margin: auto;
      height: 85px;
      display: flex;
      align-items: center;
      justify-content: start;
      border-bottom: 1px solid #ccc;
    }
    .slottp {
      width: 100%;
      height: calc(100% - 85px);
    }
  }
}
</style>