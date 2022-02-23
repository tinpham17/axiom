<script setup lang="ts">

const props = defineProps({
  loading: {
    type: Boolean,
    required: false,
    default: false
  },
  size: {
    type: String,
    required: false,
    default: 'small'
  }
})
const styleSize = props.size === 'small' ? 'small' : ''
</script>

<template>
  <div class="container">
    <div :class="`loader ${styleSize}`">
      <div />
      <div />
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
