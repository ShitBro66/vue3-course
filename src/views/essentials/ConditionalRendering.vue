<script setup lang="ts">
import { ref } from 'vue'

const awesome = ref(true)
const type = ref('A')
</script>

<template>
  <div class="demo-container">
    <h1>条件渲染 (Conditional Rendering)</h1>

    <section class="demo-section">
      <h2>v-if / v-else</h2>
      <button @click="awesome = !awesome">Toggle</button>
      <h3 v-if="awesome">Vue is awesome!</h3>
      <h3 v-else>Oh no 😢</h3>
    </section>

    <section class="demo-section">
      <h2>v-else-if</h2>
      <button @click="type = type === 'A' ? 'B' : type === 'B' ? 'C' : 'A'">
        Next Type
      </button>
      <div v-if="type === 'A'">A</div>
      <div v-else-if="type === 'B'">B</div>
      <div v-else-if="type === 'C'">C</div>
      <div v-else>Not A/B/C</div>
    </section>

    <section class="demo-section">
      <h2>v-show</h2>
      <p>v-show toggles the CSS display property.</p>
      <h3 v-show="awesome">Hello! (v-show)</h3>
    </section>
  </div>
</template>

<style scoped>
.demo-container {
  padding: 20px;
}
.demo-section {
  margin-bottom: 30px;
  border: 1px solid var(--border-color);
  padding: 20px;
  border-radius: 8px;
}
</style>