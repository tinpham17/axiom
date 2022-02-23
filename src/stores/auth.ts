import { ref } from 'vue'
import { defineStore } from 'pinia'
import { settings } from '@/settings'
import { AuthUser } from '@/types'
import { login as signIn, logout as signOut } from '@/services/auth'

function initUser() {
  const cache = localStorage.getItem(settings.lsKey.user)
  if (cache) {
    try {
      return JSON.parse(cache) as AuthUser
    } catch(e) {
      return null
    }
  }
  return null
}

export const useAuth = defineStore('auth', () => {
  const user = ref<AuthUser | null>(initUser())

  const login = async (email: string, password: string) => {
    const result = await signIn({ email, password, rememberMe: true })
    user.value = result
    localStorage.setItem(settings.lsKey.user, JSON.stringify(result))
  }

  const logout = async () => {
    await signOut()
    user.value = null
    localStorage.removeItem(settings.lsKey.user)
  }

  return {
    user,
    login,
    logout
  }
})
