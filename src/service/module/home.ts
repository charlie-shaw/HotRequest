import {hotRequest} from "../index"
interface IHomeType{
    data:any
    resultCode:string
    success:boolean
}
hotRequest.request<IHomeType>({
    url:'/home/highscore',
    interceptors:{
        requestFulfilled(config) {
            console.log('单个的请求拦截');
            
            return config
        },
        responseFulfilled(res) {
            console.log("单个的响应拦截");
            return res
        },
    }
}).then(res=>{
    console.log(res);
})
