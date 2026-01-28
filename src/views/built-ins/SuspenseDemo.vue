<script setup lang="ts">
import AsyncChild from '../../components/demos/AsyncChild.vue'
import LoadingComponent from '../../components/demos/LoadingComponent.vue'
import { defineAsyncComponent } from 'vue'
import { useI18n } from 'vue-i18n'
import CodeComparison from '../../components/CodeComparison.vue'

const { t } = useI18n()

// Artificial delay component for Suspense
const AsyncDependency = defineAsyncComponent({
  loader: async () => {
    await new Promise(r => setTimeout(r, 2000))
    return import('../../components/demos/AsyncChild.vue')
  },
  loadingComponent: LoadingComponent
})

const vue2Code = `<script>
export default {
  data() {
    return {
      loading: true,
      error: null
    }
  },
  async created() {
    try {
      await loadAsyncData()
      this.loading = false
    } catch (e) {
      this.error = e
      this.loading = false
    }
  }
}
<\/script>`

const vue2Template = `<template>
  <div>
    <div v-if="loading">Loading...</div>
    <div v-else-if="error">Error!</div>
    <AsyncComponent v-else />
  </div>
</template>`

const vue3Code = `<!-- No special script needed for basic Suspense usage -->`

const vue3Template = `<template>
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
</template>`
</script>

<template>
  <div class="demo-container">
    <h1>{{ t('suspense.title') }}</h1>

    <CodeComparison 
      :vue2-code="vue2Code" 
      :vue3-code="vue3Code"
      :vue2-template="vue2Template"
      :vue3-template="vue3Template"
    >
      <template #demo>
        <div class="demo-grid">
          <section class="demo-card">
            <h2>{{ t('suspense.orchestrating') }}</h2>
            <div class="card-content">
              <p class="description">
                {{ t('suspense.desc') }}
              </p>

              <div class="suspense-wrapper">
                <Suspense>
                  <template #default>
                    <AsyncDependency />
                  </template>

                  <template #fallback>
                    <div class="loading-state">
                      <LoadingComponent />
                      <p>{{ t('suspense.waiting') }}</p>
                    </div>
                  </template>
                </Suspense>
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

.description {
  color: var(--text-light);
  text-align: center;
}

.suspense-wrapper {
  min-height: 150px;
  border: 1px dashed var(--border-color);
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: var(--bg-secondary);
}

.loading-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  color: var(--text-light);
}
</style>
