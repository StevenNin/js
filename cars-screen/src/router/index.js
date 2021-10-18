import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

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
const routes = [{
  path:'/',
  name:'index',
  compoment:() => import('../views/index.vue')
}]

const router = new Router({
  mode:'history',
  routes
})

export default router