<script setup lang="ts">
import { ref, reactive, nextTick } from 'vue'

// ref
const count = ref(0)
const increment = async () => {
  count.value++
  // DOM updates asynchronously
  await nextTick()
  console.log('DOM updated')
}

// reactive
const state = reactive({ count: 0 })
const incrementReactive = () => {
  state.count++
}

// Deep Reactivity
const obj = ref({
  nested: { count: 0 },
  arr: ['foo', 'bar']
})

const mutateDeeply = () => {
  obj.value.nested.count++
  obj.value.arr.push('baz')
}
</script>

<template>
  <div class="demo-container">
    <h1>响应式基础 (Reactivity Fundamentals) Demo</h1>

    <section class="demo-section">
      <h2>ref()</h2>
      <p>Count is: {{ count }}</p>
      <button @click="increment">Increment Ref</button>
    </section>

    <section class="demo-section">
      <h2>reactive()</h2>
      <p>State Count is: {{ state.count }}</p>
      <button @click="incrementReactive">Increment Reactive</button>
    </section>

    <section class="demo-section">
      <h2>深层响应性 (Deep Reactivity)</h2>
      <p>Nested Count: {{ obj.nested.count }}</p>
      <p>Array: {{ obj.arr }}</p>
      <button @click="mutateDeeply">Mutate Deeply</button>
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
h2 {
  margin-top: 0;
  color: #42b883;
}
button {
  padding: 5px 10px;
  cursor: pointer;
}
</style>