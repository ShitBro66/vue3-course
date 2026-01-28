<script setup lang="ts">
import { defineAsyncComponent, ref } from 'vue'
import LoadingComponent from '../../components/demos/LoadingComponent.vue'
import ErrorComponent from '../../components/demos/ErrorComponent.vue'

const AsyncComp = defineAsyncComponent({
  loader: () => new Promise((resolve) => {
    setTimeout(() => {
      resolve(import('../../components/demos/AsyncChild.vue'))
    }, 2000)
  }),
  loadingComponent: LoadingComponent,
  delay: 200,
  errorComponent: ErrorComponent,
  timeout: 3000
})

const show = ref(false)
</script>

<template>
  <div class="demo-container">
    <h1>异步组件 (Async Components)</h1>

    <div class="demo-content">
      <button @click="show = !show">Toggle Async Component</button>
      
      <div v-if="show" class="component-wrapper">
        <AsyncComp />
      </div>
    </div>
  </div>
</template>

<style scoped>
.demo-container {
  padding: 20px;
}
.component-wrapper {
  margin-top: 20px;
}
button {
  padding: 8px 16px;
  cursor: pointer;
}
</style>