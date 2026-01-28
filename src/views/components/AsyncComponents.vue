<script setup lang="ts">
import { defineAsyncComponent, ref } from 'vue'
import LoadingComponent from '../../components/demos/LoadingComponent.vue'
import ErrorComponent from '../../components/demos/ErrorComponent.vue'
import CodeComparison from '../../components/CodeComparison.vue'

const AsyncComp = defineAsyncComponent({
  loader: async () => {
    await new Promise(r => setTimeout(r, 2000))
    return import('../../components/demos/AsyncChild.vue')
  },
  loadingComponent: LoadingComponent,
  delay: 200,
  errorComponent: ErrorComponent,
  timeout: 3000
})

const show = ref(false)

const vue2Code = `const AsyncComp = () => ({
  // The component to load (should be a Promise)
  component: import('./AsyncChild.vue'),
  // A component to use while the async component is loading
  loading: LoadingComponent,
  // A component to use if the load fails
  error: ErrorComponent,
  // Delay before showing the loading component. Default: 200ms.
  delay: 200,
  // The error component will be displayed if a timeout is
  // provided and exceeded. Default: Infinity.
  timeout: 3000
})`

const vue3Code = `import { defineAsyncComponent } from 'vue'
import LoadingComponent from './LoadingComponent.vue'
import ErrorComponent from './ErrorComponent.vue'

const AsyncComp = defineAsyncComponent({
  loader: () => import('./AsyncChild.vue'),
  loadingComponent: LoadingComponent,
  delay: 200,
  errorComponent: ErrorComponent,
  timeout: 3000
})`
</script>

<template>
  <div class="demo-container">
    <h1>异步组件 (Async Components)</h1>

    <CodeComparison :vue2-code="vue2Code" :vue3-code="vue3Code">
      <template #demo>
        <div class="demo-grid">
          <section class="demo-card">
            <h2>Lazy Loading Demo</h2>
            <div class="card-content centered">
              <p class="description">
                Click the button to load the component asynchronously.
                It has a 2-second artificial delay to show the loading state.
              </p>
              
              <button @click="show = !show" class="action-btn">
                {{ show ? 'Hide' : 'Show' }} Async Component
              </button>
              
              <div class="component-wrapper">
                <AsyncComp v-if="show" />
              </div>
            </div>
          </section>
        </div>
      </template>
    </CodeComparison>
  </div>
</template>

<style scoped>
.demo-container {
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
}

.demo-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
}

.demo-card {
  border: 1px solid var(--border-color);
  border-radius: 12px;
  padding: 20px;
  background-color: var(--bg-color);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

h2 {
  margin-top: 0;
  margin-bottom: 15px;
  font-size: 1.2rem;
  color: var(--text-color);
  border-bottom: 1px solid var(--border-color);
  padding-bottom: 10px;
}

.card-content {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.card-content.centered {
  align-items: center;
}

.description {
  color: var(--text-light);
  text-align: center;
  margin-bottom: 15px;
}

.action-btn {
  padding: 10px 20px;
  background-color: var(--primary-color);
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.2s;
}

.action-btn:hover {
  background-color: var(--primary-hover);
}

.component-wrapper {
  margin-top: 20px;
  min-height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}
</style>
