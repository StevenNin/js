<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  // mounted(){
  //   this.$router.push('/index') 
  // }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
body{
  scroll-behavior: smooth;
}

.el-menuNav:not(.el-menu--collapse) {
    width: 100%;
    min-height: 1000px;
    /* display: none; */
}
.el-menu--collapse{
  /* display: none; */
}
.el-submenu__icon-arrow{
  /* display: none; */
}
.el-menu{
  border: none;
  text-align: right;
}
.el-menu-item{
  margin:  0 20px;
  /* padding-right: 40px; */
  border-bottom: 1px solid #80A5C5;
}
.el-submenu__title{
  border-bottom:solid 1px #80A5C5 ;
  /* padding: 0; */
  margin:0 20px;
}
/* .el-submenu__icon-arrow el-icon-arrow-down{
  height: 10px;
  width: 10px;
  display: block;
  background-image: url(./assets/closearrow.png);
  background-size: 100%;
} */

.el-icon-arrow-down:before{
  display: none;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  font-size: 16px;
  /* margin-top: 
  60px; */
}



li {
  list-style: none
}
a{
  text-decoration: none;
}
.worker:hover{
  color: #007BE6;
}
 .friend:hover {
 color: #007BE6;
 background-color: #007BE6;
}

</style>
