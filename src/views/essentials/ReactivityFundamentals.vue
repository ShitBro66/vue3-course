<script setup lang="ts">
import { ref, reactive, nextTick } from 'vue'
import CodeComparison from '../../components/CodeComparison.vue'

// ref
const count = ref(0)
const increment = async () => {
  count.value++
  // DOM updates asynchronously
  await nextTick()
  console.log('DOM updated')
}

// reactive
const state = reactive({ count: 0 })
const incrementReactive = () => {
  state.count++
}

// Deep Reactivity
const obj = ref({
  nested: { count: 0 },
  arr: ['foo', 'bar']
})

const mutateDeeply = () => {
  obj.value.nested.count++
  obj.value.arr.push('baz')
}

const vue2Code = `export default {
  data() {
    return {
      count: 0,
      state: { count: 0 },
      obj: {
        nested: { count: 0 },
        arr: ['foo', 'bar']
      }
    }
  },
  methods: {
    increment() {
      this.count++
      this.$nextTick(() => {
        console.log('DOM updated')
      })
    },
    incrementReactive() {
      this.state.count++
    },
    mutateDeeply() {
      this.obj.nested.count++
      this.obj.arr.push('baz')
    }
  }
}`

const vue3Code = `import { ref, reactive, nextTick } from 'vue'

// ref for primitives
const count = ref(0)
const increment = async () => {
  count.value++
  await nextTick()
  console.log('DOM updated')
}

// reactive for objects
const state = reactive({ count: 0 })
const incrementReactive = () => {
  state.count++
}

// ref for deep reactivity
const obj = ref({
  nested: { count: 0 },
  arr: ['foo', 'bar']
})

const mutateDeeply = () => {
  obj.value.nested.count++
  obj.value.arr.push('baz')
}`
</script>

<template>
  <div class="demo-container">
    <h1>响应式基础 (Reactivity Fundamentals)</h1>
    
    <CodeComparison :vue2-code="vue2Code" :vue3-code="vue3Code">
      <template #demo>
        <div class="demo-grid">
          <section class="demo-card">
            <h2>ref() 基础计数器</h2>
            <div class="card-content">
              <p class="count-display">{{ count }}</p>
              <button @click="increment" class="action-btn">Increment Ref</button>
            </div>
          </section>

          <section class="demo-card">
            <h2>reactive() 对象状态</h2>
            <div class="card-content">
              <p class="count-display">{{ state.count }}</p>
              <button @click="incrementReactive" class="action-btn secondary">Increment Reactive</button>
            </div>
          </section>

          <section class="demo-card full-width">
            <h2>深层响应性 (Deep Reactivity)</h2>
            <div class="card-content">
              <div class="info-row">
                <span>Nested Count:</span>
                <span class="highlight">{{ obj.nested.count }}</span>
              </div>
              <div class="info-row">
                <span>Array:</span>
                <span class="highlight">{{ obj.arr.join(', ') }}</span>
              </div>
              <button @click="mutateDeeply" class="action-btn accent">Mutate Deeply</button>
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
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
}

.demo-card {
  border: 1px solid var(--border-color);
  border-radius: 12px;
  padding: 20px;
  background-color: var(--bg-color);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  transition: transform 0.2s;
}

.demo-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.full-width {
  grid-column: 1 / -1;
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
  align-items: center;
  gap: 15px;
}

.count-display {
  font-size: 3rem;
  font-weight: bold;
  color: var(--primary-color);
  margin: 0;
}

.info-row {
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 8px;
  background-color: var(--bg-color-soft);
  border-radius: 6px;
}

.highlight {
  font-weight: bold;
  color: var(--secondary-color);
}

.action-btn {
  padding: 10px 20px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.2s;
  background-color: var(--primary-color);
  color: white;
}

.action-btn:hover {
  opacity: 0.9;
  transform: scale(1.05);
}

.action-btn.secondary {
  background-color: #e6a23c;
}

.action-btn.accent {
  background-color: #f56c6c;
}
</style>