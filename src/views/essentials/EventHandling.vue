<script setup lang="ts">
import { ref } from 'vue'
import CodeComparison from '../../components/CodeComparison.vue'

const count = ref(0)
const name = ref('Vue.js')
const lastLog = ref('')

function greet(event: Event) {
  lastLog.value = `Hello ${name.value}! Tag: ${(event.target as HTMLElement).tagName}`
}

function say(message: string) {
  lastLog.value = `Said: ${message}`
}

function warn(message: string, event: Event) {
  if (event) {
    event.preventDefault()
  }
  lastLog.value = `Warning: ${message}`
}

const vue2Code = `export default {
  data() {
    return {
      count: 0,
      name: 'Vue.js',
      lastLog: ''
    }
  },
  methods: {
    greet(event) {
      this.lastLog = \`Hello \${this.name}! Tag: \${event.target.tagName}\`
    },
    say(message) {
      this.lastLog = \`Said: \${message}\`
    },
    warn(message, event) {
      if (event) {
        event.preventDefault()
      }
      this.lastLog = \`Warning: \${message}\`
    }
  }
}`

const vue3Code = `import { ref } from 'vue'

const count = ref(0)
const name = ref('Vue.js')
const lastLog = ref('')

function greet(event: Event) {
  lastLog.value = \`Hello \${name.value}! Tag: \${(event.target as HTMLElement).tagName}\`
}

function say(message: string) {
  lastLog.value = \`Said: \${message}\`
}

function warn(message: string, event: Event) {
  if (event) {
    event.preventDefault()
  }
  lastLog.value = \`Warning: \${message}\`
}`
</script>

<template>
  <div class="demo-container">
    <h1>事件处理 (Event Handling)</h1>

    <CodeComparison :vue2-code="vue2Code" :vue3-code="vue3Code">
      <template #demo>
        <div class="demo-grid">
          <section class="demo-card">
            <h2>Inline Handlers</h2>
            <div class="card-content">
              <div class="counter-display">
                <span>Count: {{ count }}</span>
                <button @click="count++" class="action-btn">Add 1</button>
              </div>
            </div>
          </section>

          <section class="demo-card">
            <h2>Method Handlers</h2>
            <div class="card-content">
              <button @click="greet" class="action-btn">Greet (Alert)</button>
              <div class="button-group">
                <button @click="say('hello')" class="action-btn secondary">Say hello</button>
                <button @click="say('bye')" class="action-btn secondary">Say bye</button>
              </div>
            </div>
          </section>

          <section class="demo-card">
            <h2>Event Modifiers</h2>
            <div class="card-content">
              <div @click="say('div clicked')" class="clickable-area">
                <p>Div Area (Click me)</p>
                <button @click.stop="say('button clicked (propagation stopped)')" class="action-btn accent">
                  Button (Stop Prop)
                </button>
              </div>
              
              <form @submit.prevent="warn('Form submitted!', $event)" class="inline-form">
                <button type="submit" class="action-btn">Submit (Prevent Default)</button>
              </form>
            </div>
          </section>
          
          <section class="demo-card full-width">
            <h2>Event Log</h2>
            <div class="log-box">
              {{ lastLog || 'Interact with buttons above to see logs...' }}
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
  gap: 15px;
}

.counter-display {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1.2rem;
  font-weight: bold;
}

.button-group {
  display: flex;
  gap: 10px;
}

.action-btn {
  padding: 8px 16px;
  background-color: var(--primary-color);
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;
  transition: opacity 0.2s;
}

.action-btn:hover {
  opacity: 0.9;
}

.action-btn.secondary {
  background-color: #606266;
}

.action-btn.accent {
  background-color: #e6a23c;
}

.clickable-area {
  padding: 20px;
  border: 2px dashed var(--border-color);
  border-radius: 8px;
  text-align: center;
  background-color: var(--bg-color-soft);
  cursor: pointer;
}

.clickable-area p {
  margin-top: 0;
  margin-bottom: 10px;
}

.log-box {
  padding: 15px;
  background-color: #2c3e50;
  color: #fff;
  border-radius: 6px;
  font-family: monospace;
  min-height: 50px;
  display: flex;
  align-items: center;
}
</style>