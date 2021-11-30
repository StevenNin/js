import axios from 'axios'

const service = axios.create({
    baseURL:'process.env.VUE_APP_BASE_API',
    timeout: 120000,
})
service.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

// 拦截器
service.interceptors.request.use(function(config){
    return config
},function(error){
    return Promise.reject(error)
})

service.interceptors.response.use(function(config){
    return config
},function(error){
    return Promise.reject(error)
})

// 取消拦截




export default service