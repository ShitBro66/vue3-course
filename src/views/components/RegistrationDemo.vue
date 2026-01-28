<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import CodeComparison from '../../components/CodeComparison.vue'

const { t } = useI18n()

const items = ref([
  { id: 1, name: 'Vue' },
  { id: 2, name: 'React' },
  { id: 3, name: 'Angular' }
])

const vue2Code = `// Global Registration
import Vue from 'vue'
import MyComponent from './MyComponent.vue'

Vue.component('MyComponent', MyComponent)

// Local Registration
export default {
  components: {
    MyComponent
  }
}`

const vue3Code = `// Global Registration
import { createApp } from 'vue'
import App from './App.vue'
import MyComponent from './MyComponent.vue'

const app = createApp(App)
app.component('MyComponent', MyComponent)

// Local Registration (Composition API)
import MyComponent from './MyComponent.vue'
// Imported components are automatically registered
// in <script setup>`

const templateCode = `
<div class="demo-grid">
  <section class="demo-card">
    <h2>Registration Types</h2>
    <div class="card-content">
      <div class="info-box">
        <h3>Global Registration</h3>
        <p>Components registered globally can be used in the template of any component within the application.</p>
      </div>
      
      <div class="info-box">
        <h3>Local Registration</h3>
        <p>Components registered locally are only available in the component where they are registered.</p>
        <p class="highlight">In <code>&lt;script setup&gt;</code>, imported components are locally registered automatically!</p>
      </div>

      <div class="demo-list">
        <h3>Demo List (Using Local Component)</h3>
        <ul>
          <li v-for="item in items" :key="item.id">
            {{ item.name }}
          </li>
        </ul>
      </div>
    </div>
  </section>
</div>`
</script>

<template>
  <div class="demo-container">
    <h1>{{ t('registration.title') }}</h1>

    <CodeComparison 
      :vue2-code="vue2Code" 
      :vue3-code="vue3Code"
      :vue2-template="templateCode"
      :vue3-template="templateCode"
    >
      <template #demo>
        <div class="demo-grid">
          <section class="demo-card">
            <h2>{{ t('registration.types') }}</h2>
            <div class="card-content">
              <div class="info-box">
                <h3>{{ t('registration.global') }}</h3>
                <p>{{ t('registration.global_desc') }}</p>
              </div>
              
              <div class="info-box">
                <h3>{{ t('registration.local') }}</h3>
                <p>{{ t('registration.local_desc') }}</p>
                <p class="highlight" v-html="t('registration.local_hint').replace('<script setup>', '<code>&lt;script setup&gt;</code>')"></p>
              </div>

              <div class="demo-list">
                <h3>{{ t('registration.demo_list') }}</h3>
                <ul>
                  <li v-for="item in items" :key="item.id">
                    {{ item.name }}
                  </li>
                </ul>
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

.info-box {
  background-color: var(--bg-secondary);
  padding: 15px;
  border-radius: 8px;
  border-left: 4px solid var(--primary-color);
}

.info-box h3 {
  margin-top: 0;
  font-size: 1.1rem;
  color: var(--primary-color);
}

.highlight {
  font-weight: bold;
  color: var(--secondary-color);
}

.demo-list ul {
  list-style-type: disc;
  padding-left: 20px;
}

.demo-list li {
  margin-bottom: 5px;
}
</style>
