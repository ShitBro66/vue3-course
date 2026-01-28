<script setup lang="ts">
import ButtonCounter from '../../components/demos/ButtonCounter.vue'
</script>

<template>
  <div class="demo-container">
    <h1>组件基础 (Component Basics) Demo</h1>
    
    <div class="demo-content">
      <p>Here is a child component used 3 times:</p>
      
      <div class="components-wrapper">
        <ButtonCounter />
        <ButtonCounter />
        <ButtonCounter />
      </div>
      
      <p>Each component maintains its own state.</p>
    </div>
  </div>
</template>

<style scoped>
.demo-container {
  padding: 20px;
}
.components-wrapper {
  display: flex;
  gap: 10px;
  margin: 20px 0;
}
</style>