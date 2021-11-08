import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

// export default new Router({
//   routes: [
//     {
//       path: '/',
//       name: 'HelloWorld',
//       component: HelloWorld
//     }
//   ]
// })
const routes = [
  // {
  //   path:'/',
  //   redirect: '/index'
  // },
  {
    path: '/',
    component: (resolve) => require(['@/views/index'], resolve),
    hidden: true,
    name: '首页',
    meta: {
      title: "首页",
    }
  },
  {
    path: '/index',
    component: (resolve) => require(['@/views/index'], resolve),
    hidden: true,
    meta: {
      title: "首页",
    },
    name: '首页'
  },
  {
    path: '/product',
    component: (resolve) => require(['@/views/product'], resolve),
    hidden: true,
    meta: {
      title: "产品",
    }
  },
  {
    path: '/news',
    component: (resolve) => require(['@/views/introduce'], resolve),
    meta: {
      title: "新闻",
    },
    hidden: true
  },
  {
    path: '/test',
    component: (resolve) => require(['@/views/news'], resolve),
    hidden: true
  },
]

const router = new Router({
  mode:'history',
  routes
})

export default router