import axios, { AxiosInstance } from 'axios'
import { settings } from '@/settings'
import { AuthUser } from '@/types'

interface Client {
  instance: AxiosInstance
}

const instance = axios.create({
  baseURL: settings.api.baseUrl,
  timeout: settings.api.timeout
})

instance.interceptors.request.use(
  config => {
    const cache = localStorage.getItem(settings.lsKey.user)
    if (cache) {
      try {
        const user = JSON.parse(cache) as AuthUser
        if (user && user.token) {
          config.headers!.Authorization = `Bearer ${user.token}`
        }
      } catch(e) {
        // do nothing
      }
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

instance.interceptors.response.use(
  (response) => {
    // TODO: check and refresh the access token
    return response
  },
  async (error) => {
    if (error && error.response && error.response.status === 401) {
      alert('Your session has expired')
      localStorage.clear()
      window.location.reload()
    }
    return Promise.reject(error)
  }
)

const client: Client = {
  instance
}

export {
  client
}
