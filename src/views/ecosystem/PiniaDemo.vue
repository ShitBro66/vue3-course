<script setup lang="ts">
import { useCounterStore } from '../../stores/counter'

const counter = useCounterStore()
</script>

<template>
  <div class="demo-container">
    <h1>Pinia 状态管理 Demo</h1>
    
    <div class="demo-content">
      <p>这是一个使用 Pinia 管理状态的计数器示例。</p>
      
      <div class="counter-box">
        <p>Count: <strong>{{ counter.count }}</strong></p>
        <p>Double Count (Getter): <strong>{{ counter.doubleCount }}</strong></p>
        
        <div class="actions">
          <button @click="counter.increment">Increment</button>
          <button @click="counter.reset">Reset</button>
        </div>
      </div>

      <div class="info">
        <p>你可以尝试切换到其他页面再回来，你会发现状态是被保留的（除非刷新页面）。</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.demo-container {
  padding: 20px;
}
.counter-box {
  border: 1px solid #ccc;
  padding: 20px;
  border-radius: 8px;
  margin-top: 20px;
  max-width: 400px;
}
.actions {
  margin-top: 15px;
}
button {
  margin-right: 10px;
  padding: 8px 16px;
  background-color: #42b883;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  button:hover {
  background-color: #3aa876;
}
}
.info {
  margin-top: 20px;
  color: #666;
  font-size: 0.9em;
}
</style>