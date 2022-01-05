
import request from '@/utils/system/request'
// 获取文章列表
export function getArticleList(params) {
    return request({
        url: '/api/article/getArticleList' ,
        method: 'post',
        params: params
    })
}

// 获取文章详情
export function getArticleDetail(params) {
    return request({
        url: '/api/article/getArticleDetails',
        method: 'post',
        params: params
    })
}