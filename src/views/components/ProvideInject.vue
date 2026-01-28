<script setup lang="ts">
import { ref, provide } from 'vue'
import GrandChild from '../../components/demos/GrandChild.vue'

const count = ref(0)

provide('message', 'hello from ancestor')
provide('count', count)
</script>

<template>
  <div class="demo-container">
    <h1>依赖注入 (Provide / Inject)</h1>

    <div class="demo-content">
      <p>Parent Count: {{ count }}</p>
      <button @click="count++">Increment Parent Count</button>
      
      <div class="child-container">
        <p>I am the parent.</p>
        <GrandChild />
      </div>
    </div>
  </div>
</template>

<style scoped>
.demo-container {
  padding: 20px;
}
.child-container {
  border: 1px solid #ddd;
  padding: 20px;
  margin-top: 20px;
}
button {
  padding: 5px 10px;
}
</style>