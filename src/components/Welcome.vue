<script setup lang="ts">
import { useAuth } from '@/stores/auth'

const { user, logout } = useAuth()

const handleClickLogout = () => {
  logout()
}
</script>

<template>
  <div class="container">
    <div class="title">
      Welcome {{ user?.email }}
    </div>
    <button @click="handleClickLogout">
      <span>Logout</span>
    </button>
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/styles/variables.scss';
.container {
  display: flex;
  align-items: center;

  button {
    margin-left: 8px;
    &:first-child {
      margin-left: 0;
    }
    svg {
      margin-right: 0 !important;
    }
    span {
      display: none;
    }
    @include breakpoint(tablet) {
      svg {
        margin-right: 8px !important;
      }
      span {
        display: initial;
      }
    }
  }
}

.title {
  display: none;
  @include breakpoint(tablet) {
    display: block;
    font-size: 16px;
    line-height: 21px;
    color: #949496;
  }
}
</style>
