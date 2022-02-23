import { Settings } from './index.type'

const settings: Settings = {
  lsKey: {
    accessToken: 'axiom_access_token',
    refreshToken: 'axiom_refresh_token',
    user: 'axiom_user'
  },
  api: {
    baseUrl: String(import.meta.env.VUE_APP_API_BASE_URL),
    timeout: Number(import.meta.env.VUE_APP_API_TIMEOUT),
    endpoints: {
      authentication: {
        url: '/api/authentication'
      }
    }
  },
  routes: {
    login: '/login',
    operator: '/operator',
    distributor: '/distributor',
    partner: '/partner',
    customer: '/customer'
  }
}

export {
  settings
}
