<script setup lang="ts">
import { onMounted, onUpdated, onUnmounted, ref } from 'vue'

const count = ref(0)
const messages = ref<string[]>([])

const addLog = (msg: string) => {
  messages.value.push(`${new Date().toLocaleTimeString()} - ${msg}`)
  // Keep only last 10 logs
  if (messages.value.length > 10) {
    messages.value.shift()
  }
}

onMounted(() => {
  addLog('onMounted called: Component is mounted.')
})

onUpdated(() => {
  addLog('onUpdated called: Component DOM updated.')
})

onUnmounted(() => {
  console.log('onUnmounted called')
  // Note: this won't be visible in the component UI as it's unmounted
})
</script>

<template>
  <div class="demo-container">
    <h1>生命周期钩子 (Lifecycle Hooks) Demo</h1>

    <div class="demo-content">
      <p>Count: {{ count }}</p>
      <button @click="count++">Increment (Trigger Update)</button>

      <div class="logs">
        <h3>Logs:</h3>
        <ul>
          <li v-for="(msg, index) in messages" :key="index">{{ msg }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
.demo-container {
  padding: 20px;
}
.logs {
  margin-top: 20px;
  background-color: #f4f4f4;
  padding: 10px;
  border-radius: 4px;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  font-family: monospace;
  margin-bottom: 5px;
}
</style>