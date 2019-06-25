import axios from 'axios'

// // 请求拦截
axios.interceptors.request.use(function(res) {
    return res
}, function(err) {
    // 请求失败
    console.log(err)
})

// 相应拦截
axios.interceptors.response.use(function(res) {
    return res
}, function(err) {
    // 响应拦截
    console.log(err)
})

const fetch = {
    get(url) {
        console.log('网络请求')
        return axios.get(url)
    }
}

export default fetch