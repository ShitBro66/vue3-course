<script setup lang="ts">
import { ref } from 'vue'

const open = ref(false)
</script>

<template>
  <div class="demo-container">
    <h1>Teleport Demo</h1>

    <div class="demo-content">
      <button @click="open = true">Open Modal</button>

      <Teleport to="body">
        <div v-if="open" class="modal">
          <p>Hello from the modal!</p>
          <button @click="open = false">Close</button>
        </div>
      </Teleport>
    </div>
  </div>
</template>

<style scoped>
.demo-container {
  padding: 20px;
}
.modal {
  position: fixed;
  z-index: 999;
  top: 20%;
  left: 50%;
  width: 300px;
  margin-left: -150px;
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  text-align: center;
  border: 1px solid #ccc;
  color: black;
}
</style>