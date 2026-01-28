<script setup lang="ts">
import { ref, computed } from 'vue'

const items = ref([{ message: 'Foo' }, { message: 'Bar' }])

const parentMessage = 'Parent'

const myObject = ref({
  title: 'How to do lists in Vue',
  author: 'Jane Doe',
  publishedAt: '2016-04-10'
})

const numbers = ref([1, 2, 3, 4, 5])

const evenNumbers = computed(() => {
  return numbers.value.filter((n) => n % 2 === 0)
})

const sets = ref([
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10]
])

function even(numbers: number[]) {
  return numbers.filter((number) => number % 2 === 0)
}
</script>

<template>
  <div class="demo-container">
    <h1>列表渲染 (List Rendering)</h1>

    <section class="demo-section">
      <h2>Basic v-for</h2>
      <ul>
        <li v-for="(item, index) in items" :key="index">
          {{ parentMessage }} - {{ index }} - {{ item.message }}
        </li>
      </ul>
    </section>

    <section class="demo-section">
      <h2>v-for with Object</h2>
      <ul>
        <li v-for="(value, key, index) in myObject" :key="key">
          {{ index }}. {{ key }}: {{ value }}
        </li>
      </ul>
    </section>

    <section class="demo-section">
      <h2>v-for with Range</h2>
      <span v-for="n in 10" :key="n">{{ n }} </span>
    </section>

    <section class="demo-section">
      <h2>Filtered/Sorted Results</h2>
      <h3>Even Numbers (Computed):</h3>
      <ul>
        <li v-for="n in evenNumbers" :key="n">{{ n }}</li>
      </ul>
      
      <h3>Nested v-for with Method:</h3>
      <ul v-for="(numbers, index) in sets" :key="index">
        <li v-for="n in even(numbers)" :key="n">{{ n }}</li>
      </ul>
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