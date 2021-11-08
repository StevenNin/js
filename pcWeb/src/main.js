// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui';
import VueAwesomeSwiper from 'vue-awesome-swiper'
 
//引入样式
// import 'swiper/dist/css/swiper.css'
import 'element-ui/lib/theme-chalk/index.css';



import router from './router'

Vue.use(ElementUI);
Vue.use(VueAwesomeSwiper, /* { 全局组件的默认选项 } */)


Vue.config.productionTip = false

// router.beforeEach((from,to,next) => {
//   if(to.meta.title) {
//     document.title = to.meta.title
//   }
// })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
