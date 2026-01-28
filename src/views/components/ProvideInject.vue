<script setup lang="ts">
import { ref, provide } from 'vue'
import GrandChild from '../../components/demos/GrandChild.vue'
import CodeComparison from '../../components/CodeComparison.vue'

const count = ref(0)

provide('message', 'hello from ancestor')
provide('count', count)

const vue2Code = `export default {
  components: { GrandChild },
  data() {
    return {
      count: 0
    }
  },
  provide() {
    // Note: In Vue 2, provided properties are NOT reactive by default
    // unless you pass an object that is observed.
    return {
      message: 'hello from ancestor',
      // To make it reactive in Vue 2, you'd often pass the whole 'this'
      // or an observed object.
      // Here we just pass the initial value for simplicity in this demo.
      count: this.count 
    }
  }
}`

const vue3Code = `import { ref, provide } from 'vue'
import GrandChild from './GrandChild.vue'

const count = ref(0)

provide('message', 'hello from ancestor')
provide('count', count) // Passing a ref makes it reactive downstream!`
</script>

<template>
  <div class="demo-container">
    <h1>依赖注入 (Provide / Inject)</h1>

    <CodeComparison :vue2-code="vue2Code" :vue3-code="vue3Code">
      <template #demo>
        <div class="demo-grid">
          <section class="demo-card">
            <h2>Component Tree</h2>
            <div class="card-content">
              <div class="parent-box">
                <div class="box-header">
                  <span class="role-badge">Parent (Provider)</span>
                  <div class="count-control">
                    <span>Count: {{ count }}</span>
                    <button @click="count++" class="action-btn">Increment</button>
                  </div>
                </div>
                
                <div class="child-container">
                  <p class="connector">↓ passes data deeply ↓</p>
                  <GrandChild />
                </div>
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

.parent-box {
  border: 2px solid var(--primary-color);
  border-radius: 8px;
  padding: 20px;
  background-color: rgba(66, 184, 131, 0.05);
}

.box-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.role-badge {
  background-color: var(--primary-color);
  color: white;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 0.9rem;
  font-weight: bold;
}

.count-control {
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: bold;
}

.action-btn {
  padding: 5px 10px;
  background-color: var(--primary-color);
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.child-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.connector {
  color: var(--text-color-secondary);
  font-size: 0.9rem;
  margin-bottom: 10px;
}
</style>