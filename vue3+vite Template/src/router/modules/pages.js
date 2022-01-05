import Layout from '@/layout/index.vue'
import { createNameComponent } from '../createNode'
const route = [
  {
    path: '/pages',
    component: Layout,
    redirect: '/pages/crudTable',
    meta: { title: '页面', icon: 'el-icon-document-copy' },
    alwayShow: true,
    children: [
      {
        path: 'crudTable',
        component: createNameComponent(() => import('@/views/main/pages/crudTable/index.vue')),
        meta: { title: '业务表格', cache: false, roles: ['admin', 'editor'] }
      },
      {
        path: 'categoryTable',
        component: createNameComponent(() => import('@/views/main/pages/categoryTable/index.vue')),
        meta: { title: '分类联动表格', cache: true, roles: ['admin'] }
      },
      {
        path: 'treeTable',
        component: createNameComponent(() => import('@/views/main/pages/treeTable/index.vue')),
        meta: { title: '树联动表格', cache: true }
      },
      {
        path: 'videoList',
        component: createNameComponent(() => import('@/views/main/pages/videosList/index.vue')),
        meta: { title: '视频列表', cache: true }
      },
      {
        path: 'image',
        component: createNameComponent(() => import('@/views/main/pages/imageList2/index.vue')),
        meta: { title: '图片列表', cache: true }
      },
      {
        path: 'routerPage',
        component: createNameComponent(() => import('@/views/main/pages/routerPage/index.vue')),
        meta: { title: '导航页面', cache: true }
      },
      {
        path: 'supervision',
        component: createNameComponent(() => import('@/views/main/pages/supervision/index.vue')),
        meta: { title: '风险防控', cache: true }
      },
      {
        path: 'list',
        component: createNameComponent(() => import('@/views/main/pages/list/index.vue')),
        meta: { title: '列表页', cache: true }
      }, 
      {
        path: 'imagelist',
        component: createNameComponent(() => import('@/views/main/pages/imageList/index.vue')),
        meta: { title: '图片列表页', cache: true }
      },
      {
        path: 'detailsPage',
        component: createNameComponent(() => import('@/views/main/pages/detailsPage/index.vue')),
        meta: { title: '详情页', cache: true }
      },
      
    ]
  }
]

export default route