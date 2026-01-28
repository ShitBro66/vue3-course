<script setup lang="ts">
import AsyncChild from '../../components/demos/AsyncChild.vue'
import LoadingComponent from '../../components/demos/LoadingComponent.vue'
import ErrorComponent from '../../components/demos/ErrorComponent.vue'
import { defineAsyncComponent, ref } from 'vue'

// Artificial delay component for Suspense
const AsyncDependency = defineAsyncComponent({
  loader: async () => {
    await new Promise(r => setTimeout(r, 2000))
    return import('../../components/demos/AsyncChild.vue')
  },
  loadingComponent: LoadingComponent
})
</script>

<template>
  <div class="demo-container">
    <h1>Suspense Demo</h1>

    <div class="demo-content">
      <p>Suspense is an experimental feature.</p>
      
      <Suspense>
        <!-- component with nested async dependencies -->
        <template #default>
          <AsyncDependency />
        </template>

        <!-- loading state -->
        <template #fallback>
          <LoadingComponent />
        </template>
      </Suspense>
    </div>
  </div>
</template>

<style scoped>
.demo-container {
  padding: 20px;
}
</style>