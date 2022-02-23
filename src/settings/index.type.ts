export interface Endpoint {
  url: string
}

export interface Settings {
  lsKey: {
    accessToken: string
    refreshToken: string
    user: string
  },
  api: {
    baseUrl: string
    timeout: number
    endpoints: {
      authentication: Endpoint
    }
  },
  routes: {
    login: string
    operator: string
    distributor: string
    partner: string
    customer: string
  }
}
