
import request from '@/utils/system/request'
// 获取菜单导航 数据api
export function getMenuData() {
  return request({
    url: '/api/menu/treeData',
    method: 'get'
  })
}

// 获取三、四级目录信息
export function getMenuInfo(query) {
  return request({
    url: '/api/menu/subsetList/?menuId=' + query,
    method: 'get',
    // query:query
  })
}

