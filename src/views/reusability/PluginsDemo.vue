<script setup lang="ts">
import { inject } from 'vue'
import CodeComparison from '../../components/CodeComparison.vue'

const i18n = inject('i18n') // Just for demo, we know it's there

const vue2Code = `// main.js
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueI18n from 'vue-i18n'

Vue.use(VueRouter)
Vue.use(VueI18n)

const app = new Vue({
  router,
  i18n,
  render: h => h(App)
}).$mount('#app')`

const vue3Code = `// main.js
import { createApp } from 'vue'
import { createRouter } from 'vue-router'
import { createI18n } from 'vue-i18n'
import App from './App.vue'

const app = createApp(App)

app.use(router)
app.use(i18n)
app.use(pinia)

app.mount('#app')`
</script>

<template>
  <div class="demo-container">
    <h1>插件 (Plugins)</h1>

    <CodeComparison :vue2-code="vue2Code" :vue3-code="vue3Code">
      <template #demo>
        <div class="demo-grid">
          <section class="demo-card">
            <h2>Active Plugins</h2>
            <div class="card-content">
              <p>Plugins are self-contained code that usually add global-level functionality to Vue.</p>
              
              <div class="plugin-list">
                <div class="plugin-item">
                  <span class="plugin-name">vue-router</span>
                  <span class="plugin-desc">Routing</span>
                </div>
                <div class="plugin-item">
                  <span class="plugin-name">pinia</span>
                  <span class="plugin-desc">State Management</span>
                </div>
                <div class="plugin-item">
                  <span class="plugin-name">vue-i18n</span>
                  <span class="plugin-desc">Internationalization</span>
                </div>
              </div>

              <div class="info-box">
                <p>Example: <code>vue-i18n</code> plugin provides global <code>$t</code> function or <code>useI18n</code> composable.</p>
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

.plugin-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.plugin-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 15px;
  background-color: var(--bg-secondary);
  border-radius: 6px;
  border-left: 3px solid var(--primary-color);
}

.plugin-name {
  font-weight: bold;
  font-family: monospace;
  color: var(--primary-color);
}

.plugin-desc {
  color: var(--text-light);
  font-size: 0.9rem;
}

.info-box {
  background-color: var(--bg-secondary);
  padding: 15px;
  border-radius: 8px;
}
</style>
