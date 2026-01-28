<script setup lang="ts">
import { shallowRef } from 'vue'
import CompA from '../../components/demos/CompA.vue'
import CompB from '../../components/demos/CompB.vue'
import CodeComparison from '../../components/CodeComparison.vue'

const current = shallowRef(CompA)

const vue2Code = `<template>
  <div>
    <label><input type="radio" v-model="current" :value="CompA" /> A</label>
    <label><input type="radio" v-model="current" :value="CompB" /> B</label>
    
    <keep-alive>
      <component :is="current"></component>
    </keep-alive>
  </div>
</template>

<script>
import CompA from './CompA.vue'
import CompB from './CompB.vue'

export default {
  components: { CompA, CompB },
  data() {
    return {
      current: CompA,
      CompA,
      CompB
    }
  }
}
<\/script>`

const vue3Code = `<script setup>
import { shallowRef } from 'vue'
import CompA from './CompA.vue'
import CompB from './CompB.vue'

const current = shallowRef(CompA)
<\/script>

<template>
  <label><input type="radio" v-model="current" :value="CompA" /> A</label>
  <label><input type="radio" v-model="current" :value="CompB" /> B</label>

  <KeepAlive>
    <component :is="current"></component>
  </KeepAlive>
</template>`
</script>

<template>
  <div class="demo-container">
    <h1>KeepAlive Demo</h1>

    <CodeComparison :vue2-code="vue2Code" :vue3-code="vue3Code">
      <template #demo>
        <div class="demo-grid">
          <section class="demo-card">
            <h2>Cached Components</h2>
            <div class="card-content">
              <div class="controls">
                <label class="radio-label">
                  <input type="radio" v-model="current" :value="CompA" /> 
                  Component A
                </label>
                <label class="radio-label">
                  <input type="radio" v-model="current" :value="CompB" /> 
                  Component B
                </label>
              </div>

              <div class="component-box">
                <KeepAlive>
                  <component :is="current"></component>
                </KeepAlive>
              </div>
              
              <p class="hint">
                <span class="icon">💡</span>
                Switch between components. Type something in the input, then switch away and back. 
                Notice the state is preserved!
              </p>
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

.controls {
  display: flex;
  gap: 20px;
  justify-content: center;
}

.radio-label {
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  font-weight: bold;
}

.component-box {
  min-height: 150px;
  border: 2px dashed var(--border-color);
  border-radius: 8px;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.hint {
  margin-top: 10px;
  color: var(--text-light);
  font-style: italic;
  display: flex;
  align-items: center;
  gap: 8px;
  background-color: var(--bg-secondary);
  padding: 10px;
  border-radius: 6px;
}

.icon {
  font-style: normal;
}
</style>
