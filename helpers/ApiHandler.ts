import axios, { AxiosRequestConfig, AxiosPromise } from 'axios'
import GLOBAL from '@/config/global'

export let inMemoryToken = {
  token: '',
  expiry: '',
}

const API = {
  login(token: string, expiry: string): void {
    inMemoryToken.token = token
    inMemoryToken.expiry = expiry
    const headers = { Authorization: `Bearer ${inMemoryToken.token}` }

    // reinitialize axios instance with headers Authorization
    this.axiosInstance = axios.create({
      baseURL: GLOBAL.restBaseUrl,
      headers,
      withCredentials: true,
    })
  },
  logout(): void {
    inMemoryToken = { token: '', expiry: '' }

    this.axiosInstance = axios.create({
      baseURL: GLOBAL.restBaseUrl,
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
