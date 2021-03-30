import axios, { AxiosRequestConfig, AxiosPromise } from 'axios'
import GLOBAL from '@/config/global'

let inMemoryToken = ''

const API = {
  login(token: string): void {
    inMemoryToken = token
    const headers = { Authorization: `Bearer ${inMemoryToken}` }

    // reinitialize axios instance with headers Authorization
    this.axiosInstance = axios.create({
      baseURL: GLOBAL.restBaseUrl,
      headers,
      withCredentials: true,
    })
  },
  axiosInstance: axios.create({
    baseURL: GLOBAL.restBaseUrl,
    withCredentials: true,
  }),
  call(param: AxiosRequestConfig): AxiosPromise<any> {
    return this.axiosInstance(param)
  },
}

export default API
