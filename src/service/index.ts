import HotRequest from './request/'


export const hotRequest = new HotRequest({
    baseURL: "http://codercba.com:1888/airbnb/api",
    timeout: 8000,
    interceptors:{
        requestFulfilled(config) { 
            console.log('实例全局的请求拦截');
            return config
        },
        responseFulfilled(res) {
            console.log("实例全局的响应拦截");
            return res
        },
    }
})
