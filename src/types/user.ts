export type AuthRoleName = 'Admin'

export interface AuthUser {
  name: string
  email: string
  roleName: AuthRoleName
  token: string
  refreshToken: string
}

export interface LoginRequestParams {
  email: string
  password: string
  rememberMe: boolean
}
