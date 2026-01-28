<script setup lang="ts">
import { ref } from 'vue'

const count = ref(0)
const emit = defineEmits<{
  (e: 'increase-by', amount: number): void
}>()

function increase() {
  emit('increase-by', 1)
}
</script>

<template>
  <button @click="increase">
    Increase by 1
  </button>
</template>

<style scoped>
button {
  margin: 5px;
  padding: 5px 10px;
}
</style>