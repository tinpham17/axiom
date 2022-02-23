<script setup lang="ts">
import Branding from '@/components/Branding.vue'
import Welcome from '@/components/Welcome.vue'
</script>

<template>
  <header class="container">
    <Branding />
    <Welcome />
  </header>
</template>

<style scoped lang="scss">
.container {
  height: 80px;
  position: fixed;
  top: 0;
  left: 80px;
  right: 0;
  background-color: #081c28;
  display: flex;
  align-items: center;
  padding-left: 42px;
  padding-right: 32px;
  justify-content: space-between;
}
</style>
