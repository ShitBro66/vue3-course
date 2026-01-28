<script setup lang="ts">
import { ref, watch, watchEffect } from 'vue'

const question = ref('')
const answer = ref('Questions usually contain a question mark. ;-)')
const loading = ref(false)

// watch works directly on a ref
watch(question, async (newQuestion, oldQuestion) => {
  if (newQuestion.includes('?')) {
    loading.value = true
    answer.value = 'Thinking...'
    try {
      const res = await fetch('https://yesno.wtf/api')
      const data = await res.json()
      answer.value = data.answer
    } catch (error) {
      answer.value = 'Error! Could not reach the API. ' + error
    } finally {
      loading.value = false
    }
  }
})

// watchEffect
const count = ref(0)
const doubleCount = ref(0)

watchEffect(() => {
  doubleCount.value = count.value * 2
  console.log(`count is: ${count.value}`)
})
</script>

<template>
  <div class="demo-container">
    <h1>侦听器 (Watchers)</h1>

    <section class="demo-section">
      <h2>Basic Watch</h2>
      <p>
        Ask a yes/no question:
        <input v-model="question" :disabled="loading" />
      </p>
      <p>{{ answer }}</p>
    </section>

    <section class="demo-section">
      <h2>watchEffect</h2>
      <p>Count: {{ count }}</p>
      <p>Double Count (via watchEffect): {{ doubleCount }}</p>
      <button @click="count++">Increment</button>
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
input {
  width: 300px;
}
</style>