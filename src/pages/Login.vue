<script setup lang="ts">
import LoginForm from '@/components/LoginForm.vue'
import { settings } from '@/settings'
import { useAuth } from '@/stores/auth'
import { useRouter } from 'vue-router'

const { user } = useAuth()
const router = useRouter()

if (user) {
  router.push(settings.routes.operator)
}
</script>

<template>
  <LoginForm />
</template>

<style lang="scss" scoped>
</style>
