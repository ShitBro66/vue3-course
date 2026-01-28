<script setup lang="ts">
import { ref } from 'vue'
import CustomInput from '../../components/demos/CustomInput.vue'

const message = ref('hello')
</script>

<template>
  <div class="demo-container">
    <h1>组件 v-model Demo</h1>

    <div class="demo-content">
      <CustomInput v-model="message" />
      <p>Message value: {{ message }}</p>
    </div>
  </div>
</template>

<style scoped>
.demo-container {
  padding: 20px;
}
</style>