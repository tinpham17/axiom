<script setup lang="ts">
import MainHeader from '@/components/MainHeader.vue'
import NavBar from '@/components/NavBar.vue'
</script>

<template>
  <div class="container">
    <MainHeader />
    <NavBar />
    <div class="body">
      <slot />
    </div>
  </div>
</template>

<style scoped lang="scss">
.body {
  position: absolute;
  top: 80px;
  left: 80px;
  right: 0;
  bottom: 0;
  overflow: auto;
  background-color: #001521;
  padding: 40px;
}
</style>
