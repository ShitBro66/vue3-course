<script setup lang="ts">
import { ref } from 'vue'

const items = ref([
  { id: 1, name: 'Vue' },
  { id: 2, name: 'React' },
  { id: 3, name: 'Angular' }
])
</script>

<template>
  <div class="demo-container">
    <h1>组件注册 (Component Registration)</h1>

    <div class="demo-content">
      <p>This demo shows components are registered globally or locally.</p>
      <p>Check <code>src/main.ts</code> for global registration or component files for local imports.</p>
      
      <!-- We don't have global components yet, but this is where they'd be used -->
      <p>Local components are imported directly in <code>&lt;script setup&gt;</code>.</p>
    </div>
  </div>
</template>

<style scoped>
.demo-container {
  padding: 20px;
}
</style>