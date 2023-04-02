import axios from "axios";
import type { AxiosInstance, AxiosRequestConfig,AxiosResponse } from 'axios'
import type { HotRequestConfigType } from './type'

export default class HotRequest {
    instance: AxiosInstance;
    constructor(config: HotRequestConfigType) {
        this.instance = axios.create(config)
        // 为实例设置全局请求拦截器
        this.instance.interceptors.request.use((config) => {
            console.log('全局请求拦截');
            return config
        }, (err) => {
            return err
        })
        // 为实例设置全局响应拦截器
        this.instance.interceptors.response.use((res) => {
            console.log('全局响应拦截');

            return res
        }, (err) => {
            return err
        })


        // 判断是否有传入单次请求的拦截
        if (config.interceptors) {
            this.instance.interceptors.request.use(
                config.interceptors?.requestFulfilled,
                config.interceptors?.requestRejected
            )
            this.instance.interceptors.response.use(
                config.interceptors?.responseFulfilled,
                config.interceptors?.responseRejected
            )
            

        }

    }
    request<T = any>(config:HotRequestConfigType<T>) {
        // 单次请求拦截执行的地方
        if(config.interceptors?.requestFulfilled){
            config = config.interceptors.requestFulfilled(config)
        }
        return new Promise<T>((resolve,reject)=>{
            this.instance.request<any,T>(config).then(res=>{
                // 在单次请求添加的响应拦截的执行
                if(config.interceptors?.responseFulfilled){
                    
                    console.log(config.interceptors.responseFulfilled);
                    
                   res =  config.interceptors.responseFulfilled(res)
                }
                resolve(res)
            }).catch(err=>{
                reject(err)
            })
        })
    }
}