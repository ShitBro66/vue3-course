<script setup lang="ts">
import { useMouse } from '../../composables/useMouse'

const { x, y } = useMouse()
</script>

<template>
  <div class="demo-container">
    <h1>组合式函数 (Composables)</h1>

    <div class="demo-content">
      <p>Mouse position is at: {{ x }}, {{ y }}</p>
      <p>This logic is reused from <code>useMouse</code> composable.</p>
    </div>
  </div>
</template>

<style scoped>
.demo-container {
  padding: 20px;
}
</style>