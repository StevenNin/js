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

.el-menu-item.is-active {
    color: #409EFF;
}

.el-menu--horizontal .el-menu-item:not(.is-disabled):focus, .el-menu--horizontal .el-menu-item:not(.is-disabled):hover {
  color: #ECAC2B;
}

.el-icon-arrow-down:before {
  content: '';
}
.el-menu--horizontal>.el-submenu:focus .el-submenu__title, .el-menu--horizontal>.el-submenu:hover .el-submenu__title {
  color: #ECAC2B;
}
.el-menu--horizontal>.el-menu-item{
  color:#ffffff;
}
.el-menu--horizontal>.el-submenu .el-submenu__title {
  color: #FFFFFF;
   border-bottom: 0;
}
.el-menu--horizontal>.el-menu-item.is-active {
  color:#ECAC2B;
  border-bottom: 0;
}
.el-menu--horizontal .el-menu .el-menu-item.is-active, .el-menu--horizontal .el-menu .el-submenu.is-active>.el-submenu__title{
  color:#ECAC2B;
}
.el-menu--horizontal>.el-menu-item:not(.is-disabled):focus, .el-menu--horizontal>.el-menu-item:not(.is-disabled):hover, .el-menu--horizontal>.el-submenu .el-submenu__title:hover{
 background-color:transparent ;
}
.el-menu--horizontal>.el-submenu.is-active .el-submenu__title{
  color:#ECAC2B;
  border-bottom: 0;
}
.el-menu--horizontal .el-menu .el-menu-item, .el-menu--horizontal .el-menu .el-submenu__title{
  background-color: #005BAB;
  color: #fff;
}
.el-menu {
  background-color: #005BAB;
  text-align: center;
}
.el-menu--popup{
  margin-left: -50px;
}
.el-menu.el-menu--horizontal{
  border-bottom: solid 1px transparent;
}
li {
  list-style: none
}
.el-menu--popup .el-menu-item{
  padding: 50px 10px ;
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
