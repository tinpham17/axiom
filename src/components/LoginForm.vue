<script setup lang="ts">
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { settings } from '@/settings'
import { NavLink } from '@/types'
import Branding from '@/components/Branding.vue'
import { useAuth } from '@/stores/auth'

const { login } = useAuth()
const router = useRouter()

const email = ref('')
const password = ref('')
const loading = ref(false)

const handleSubmit = async (event: any) => {
  event.preventDefault()
  try {
    loading.value = true
    await login(email, password)
    router.push(settings.routes.operator)
    // if (props.successRedirectUrl) {
    //   router.push(props.successRedirectUrl)
    // }
  } catch (e) {
    alert(e)
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <div class="container">
    <div class="cover">
      <Branding />
      <p>Our vision is to create safer, more proactive organizations by redefining the boundaries of critical communications.</p>
    </div>
    <form class="form" @submit="handleSubmit">
      <div class="line"></div>
      <input
        type="text"
        name="email"
        placeholder="Email"
        v-model="email"
        required
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        v-model="password"
        required
      />
      <div class="actions">
        <button type="submit" :disabled="loading">
          <Loader loading={loading} size="small"/>
          <span>Login</span>
        </button>
        <router-link to="/reset-password">Forgot password</router-link>
      </div>
      <div class="line"></div>
      <p>Experiencing access issues, contact support: <a href="/">tait@support</a></p>
    </form>
  </div>
</template>

<style scoped lang="scss">
.container {
  background: #081c28;
  box-shadow: 0 16px 32px 0 rgba(0, 0, 0, 0.24), -8px 0 16px 0 rgba(0, 21, 33, 0.12), 8px 0 16px 0 rgba(0, 0, 0, 0.12);
  max-width: 800px;
  min-height: 580px;
  margin: 0 auto;
  display: flex;
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  border-radius: 5px;
  overflow: hidden;
}
.cover {
  flex: 0 0 400px;
  padding: 56px;
  color: rgba(255, 255, 255, 0.85);
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.8;
  letter-spacing: 0.1px;
}
.form {
  background: white;
  padding-left: 48px;
  padding-right: 32px;

  h1 {
    font-size: 18px;
    margin: 0;
    margin-bottom: 24px;
    text-transform: uppercase;
  }

  input[type="text"],
  input[type="password"] {
    height: 40px;
    margin-bottom: 20px;
    width: 100%;
    border: none;
    padding: 0 16px;
  }
  
  button {
    height: 40px;
    background: #00b8e4;
    color: white;
  }

  p {
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.8;
    letter-spacing: 0.1px;
    color: rgba(0, 0, 0, 0.85);
  }

  a {
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.25;
    letter-spacing: normal;
    color: #009df9;
  }

  .actions {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
.line {
  width: 40px;
  height: 1px;
  margin-top: 100px;
  margin-bottom: 40px;
  border-bottom: 2px solid #000;
}
.extra {
  margin-top: 16px;
  text-align: center;

  a {
    color: #ccc;
    &:hover {
      color: #fff;
    }
  }
}
</style>
