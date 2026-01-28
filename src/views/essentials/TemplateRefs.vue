<script setup lang="ts">
import { ref, onMounted } from 'vue'

const input = ref<HTMLInputElement | null>(null)
const list = ref([1, 2, 3])
const itemRefs = ref([])

onMounted(() => {
  input.value?.focus()
})
</script>

<template>
  <div class="demo-container">
    <h1>模板引用 (Template Refs)</h1>

    <section class="demo-section">
      <h2>Accessing an Element</h2>
      <input ref="input" placeholder="I will be focused on mount" />
    </section>

    <section class="demo-section">
      <h2>Refs inside v-for</h2>
      <ul>
        <li v-for="item in list" ref="itemRefs" :key="item">
          {{ item }}
        </li>
      </ul>
      <p>Check console for itemRefs value</p>
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