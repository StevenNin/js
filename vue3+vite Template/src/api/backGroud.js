
import request from '@/utils/system/request'

// 获取首页 （1）  及       目录页背景  （2） 
export function getImg(query){
    return request({
        url: '/api/home/info',
        method: 'get',
        params: query
    })
}