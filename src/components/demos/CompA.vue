<script setup lang="ts">
import { ref, onActivated, onDeactivated } from 'vue'

const count = ref(0)

onActivated(() => {
  console.log('CompA activated')
})

onDeactivated(() => {
  console.log('CompA deactivated')
})
</script>

<template>
  <div class="comp-a">
    <p>Current component: A</p>
    <span>Count: {{ count }}</span>
    <button @click="count++">+</button>
  </div>
</template>

<style scoped>
.comp-a {
  padding: 10px;
  border: 1px solid #ccc;
  background-color: #f0f0f0;
}
</style>