<template>
  <el-config-provider :locale="locale">
    <router-view></router-view>
  </el-config-provider>
</template>

<script>
import { defineComponent } from 'vue';
import locale from 'element-plus/lib/locale/lang/zh-cn';
export default defineComponent({
  name: 'App',
  setup() {
    return {
      locale,
    };
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100vh;
  -moz-user-select: none; /*火狐*/
  -webkit-user-select: none; /*webkit浏览器*/
  -ms-user-select: none; /*IE10*/
  -khtml-user-select: none; /*早期浏览器*/
  user-select: none;
}

.el-pagination .el-pager .number {
  border: 1px solid rgb(159, 30, 30);
  border-radius: 2px;
}
.btn-prev {
  border: 1px solid rgb(159, 30, 30) !important;
  border-radius: 2px;
}
.btn-next {
  border: 1px solid rgb(159, 30, 30) !important;
  border-radius: 2px;
}
.el-pager li.btn-quicknext{
    border: 1px solid rgb(159, 30, 30) !important;
  border-radius: 2px;
}
.el-pagination button:hover {
  color:rgb(159, 30, 30)
}
.el-pager li:hover{
  color:rgb(159, 30, 30)
}
.active {
  background: #920000 !important;
  color: white!important;
}
.el-progress-bar__outer{
    background-color: rgb(0, 0, 0, .27)!important;
}
</style>
