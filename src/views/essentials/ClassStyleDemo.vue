<script setup lang="ts">
import { ref, computed } from 'vue'

const isActive = ref(true)
const hasError = ref(false)

const classObject = computed(() => ({
  active: isActive.value,
  'text-danger': hasError.value
}))

const activeColor = ref('red')
const fontSize = ref(30)

const styleObject = computed(() => ({
  color: activeColor.value,
  fontSize: fontSize.value + 'px'
}))
</script>

<template>
  <div class="demo-container">
    <h1>类与样式绑定 (Class and Style Bindings)</h1>

    <section class="demo-section">
      <h2>Class Binding</h2>
      <div
        class="static"
        :class="{ active: isActive, 'text-danger': hasError }"
      >
        Inline Object Binding
      </div>
      
      <div :class="classObject">
        Computed Object Binding
      </div>
      
      <button @click="isActive = !isActive">Toggle Active</button>
      <button @click="hasError = !hasError">Toggle Error</button>
    </section>

    <section class="demo-section">
      <h2>Style Binding</h2>
      <div :style="{ color: activeColor, fontSize: fontSize + 'px' }">
        Inline Style Binding
      </div>
      
      <div :style="styleObject">
        Computed Style Binding
      </div>

      <div class="controls">
        <label>Color: <input v-model="activeColor" /></label>
        <label>Font Size: <input type="number" v-model="fontSize" /></label>
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
  border: 1px solid var(--border-color);
  padding: 20px;
  border-radius: 8px;
}
.static {
  padding: 10px;
  border: 1px solid #ccc;
  margin-bottom: 10px;
}
.active {
  background-color: #42b883;
  color: white;
}
.text-danger {
  border-color: red;
  color: red;
}
.active.text-danger {
  background-color: #ffcccc;
}
.controls {
  margin-top: 10px;
  display: flex;
  gap: 10px;
}
</style>