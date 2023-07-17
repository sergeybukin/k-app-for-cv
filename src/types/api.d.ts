import { AxiosRequestConfig, Method } from 'axios'

export interface IBaseQuery {
  endpoint: string
  method: Method
  data?: AxiosRequestConfig['data']
  params?: AxiosRequestConfig['params']
}
