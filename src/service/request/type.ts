import {AxiosRequestConfig,AxiosResponse} from 'axios'
export interface HotInterceptorType<T = AxiosResponse>{
    requestFulfilled?:(config:AxiosRequestConfig)=>AxiosRequestConfig;
    responseFulfilled?:(res:T)=>T;
    requestRejected?:(err:any)=>any;
    responseRejected?:(err:any)=>any;
}

export interface HotRequestConfigType<T = AxiosResponse> extends AxiosRequestConfig{
    interceptors?:HotInterceptorType<T>;
}
