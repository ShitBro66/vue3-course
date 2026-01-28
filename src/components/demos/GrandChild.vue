<script setup lang="ts">
import { inject } from 'vue'

const message = inject('message')
const count = inject('count')
</script>

<template>
  <div class="grand-child">
    <p>Injected Message: {{ message }}</p>
    <p>Injected Count: {{ count }}</p>
  </div>
</template>

<style scoped>
.grand-child {
  border: 1px dashed #ccc;
  padding: 10px;
  margin-top: 10px;
}
</style>