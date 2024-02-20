<script setup>
import { defineProps, ref } from 'vue'

// Define props with validation
const props = defineProps({
  data: {
    type: Object,
    default: {}
  }
})
</script>

<template>
  <div>
    <div><img :src="data.avatar" alt="" /></div>
    <span>{{ data.email }}</span>
    <span>{{ data.first_name }}</span>
  </div>
</template>

<style scoped>
.container {
}
</style>
