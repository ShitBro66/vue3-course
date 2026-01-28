<script setup lang="ts">
import { shallowRef } from 'vue'
import CompA from '../../components/demos/CompA.vue'
import CompB from '../../components/demos/CompB.vue'

const current = shallowRef(CompA)
</script>

<template>
  <div class="demo-container">
    <h1>KeepAlive Demo</h1>

    <div class="demo-content">
      <div class="controls">
        <label><input type="radio" v-model="current" :value="CompA" /> A</label>
        <label><input type="radio" v-model="current" :value="CompB" /> B</label>
      </div>

      <KeepAlive>
        <component :is="current"></component>
      </KeepAlive>
      
      <p class="hint">Switch between components. Notice the state is preserved!</p>
    </div>
  </div>
</template>

<style scoped>
.demo-container {
  padding: 20px;
}
.controls {
  margin-bottom: 20px;
}
.hint {
  margin-top: 20px;
  color: #666;
  font-style: italic;
}
</style>