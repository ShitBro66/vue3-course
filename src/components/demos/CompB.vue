<script setup lang="ts">
import { ref } from 'vue'

const message = ref('')
</script>

<template>
  <div class="comp-b">
    <p>Current component: B</p>
    <span>Message is: {{ message }}</span>
    <input v-model="message" placeholder="Type here..." />
  </div>
</template>

<style scoped>
.comp-b {
  padding: 10px;
  border: 1px solid #ccc;
  background-color: #e0f7fa;
}
</style>