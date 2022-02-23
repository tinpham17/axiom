import { settings } from '@/settings'
import { client } from '@/services/client'
import { LoginRequestParams, AuthUser } from '@/types'

async function login(params: LoginRequestParams): Promise<AuthUser> {
  // const result = await client.instance.post<AuthUser>(`${settings.api.endpoints.authentication.url}/login`, {
  //   email: params.email,
  //   password: params.password,
  //   rememberMe: params.rememberMe
  // })
  // return result.data
  return {
    name: 'Test',
    email: 'test@mail.com',
    roleName: 'admin',
    token: '123',
    refreshToken: '456'
  }
}

async function logout() {
  // await client.instance.post(`${settings.api.endpoints.authentication.url}/logout`)
}

export {
  login,
  logout,
}
