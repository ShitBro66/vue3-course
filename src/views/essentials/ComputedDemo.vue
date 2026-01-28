<script setup lang="ts">
import { ref, computed, reactive } from 'vue'

const author = reactive({
  name: 'John Doe',
  books: [
    'Vue 2 - Advanced Guide',
    'Vue 3 - Basic Guide',
    'Vue 4 - The Mystery'
  ]
})

// 计算属性
const publishedBooksMessage = computed(() => {
  return author.books.length > 0 ? 'Yes' : 'No'
})

// 可写计算属性
const firstName = ref('John')
const lastName = ref('Doe')

const fullName = computed({
  get() {
    return firstName.value + ' ' + lastName.value
  },
  set(newValue) {
    const parts = newValue.split(' ')
    firstName.value = parts[0] ?? ''
    lastName.value = parts[1] ?? ''
  }
})
</script>

<template>
  <div class="demo-container">
    <h1>计算属性 (Computed Properties) Demo</h1>

    <section class="demo-section">
      <h2>基础示例</h2>
      <p>Has published books:</p>
      <span>{{ publishedBooksMessage }}</span>
    </section>

    <section class="demo-section">
      <h2>可写计算属性 (Writable Computed)</h2>
      <p>Full Name: {{ fullName }}</p>
      <p>First Name: {{ firstName }}</p>
      <p>Last Name: {{ lastName }}</p>
      
      <div class="input-group">
        <label>Edit Full Name: </label>
        <input v-model="fullName" />
      </div>
    </section>
  </div>
</template>

<style scoped>
.demo-container {
  padding: 20px;
}
.demo-section {
  margin-bottom: 30px;
  border: 1px solid #eee;
  padding: 20px;
  border-radius: 8px;
}
.input-group {
  margin-top: 10px;
}
input {
  padding: 5px;
  width: 200px;
}
</style>