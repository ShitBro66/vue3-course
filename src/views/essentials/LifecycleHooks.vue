<script setup lang="ts">
import { onMounted, onUpdated, onUnmounted, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import CodeComparison from '../../components/CodeComparison.vue'

const { t } = useI18n()

const count = ref(0)
const messages = ref<string[]>([])

const addLog = (msg: string) => {
  messages.value.push(`${new Date().toLocaleTimeString()} - ${msg}`)
  if (messages.value.length > 5) {
    messages.value.shift()
  }
}

onMounted(() => {
  addLog(t('lifecycle.mounted_msg'))
})

onUpdated(() => {
  addLog(t('lifecycle.updated_msg'))
})

onUnmounted(() => {
  console.log(t('lifecycle.unmounted_msg'))
})

const vue2Code = `export default {
  data() {
    return {
      count: 0,
      messages: []
    }
  },
  methods: {
    addLog(msg) {
      this.messages.push(\`\${new Date().toLocaleTimeString()} - \${msg}\`)
      if (this.messages.length > 5) {
        this.messages.shift()
      }
    }
  },
  mounted() {
    this.addLog('🟢 mounted called')
  },
  updated() {
    this.addLog('🔵 updated called')
  },
  destroyed() {
    console.log('🔴 destroyed called')
  }
}`

const vue3Code = `import { onMounted, onUpdated, onUnmounted, ref } from 'vue'

const count = ref(0)
const messages = ref<string[]>([])

const addLog = (msg: string) => {
  messages.value.push(\`\${new Date().toLocaleTimeString()} - \${msg}\`)
  if (messages.value.length > 5) {
    messages.value.shift()
  }
}

onMounted(() => {
  addLog('🟢 onMounted called')
})

onUpdated(() => {
  addLog('🔵 onUpdated called')
})

onUnmounted(() => {
  console.log('🔴 onUnmounted called')
})`

const templateCode = `
<div class="demo-grid">
  <section class="demo-card">
    <h2>Trigger Update</h2>
    <div class="card-content">
      <div class="counter-box">
        <span class="count-label">Count: {{ count }}</span>
        <button @click="count++" class="action-btn">Increment</button>
      </div>
      <p class="hint">Clicking increment triggers DOM update, firing <code>onUpdated</code> hook.</p>
    </div>
  </section>

  <section class="demo-card">
    <h2>Lifecycle Logs</h2>
    <div class="card-content">
      <div class="logs-container">
        <ul>
          <li v-for="(msg, index) in messages" :key="index" class="log-item">
            {{ msg }}
          </li>
        </ul>
      </div>
    </div>
  </section>
</div>`
</script>

<template>
  <div class="demo-container">
    <h1>{{ t('lifecycle.title') }}</h1>

    <CodeComparison 
      :vue2-code="vue2Code" 
      :vue3-code="vue3Code"
      :vue2-template="templateCode"
      :vue3-template="templateCode"
    >
      <template #demo>
        <div class="demo-grid">
          <section class="demo-card">
            <h2>{{ t('lifecycle.trigger_update') }}</h2>
            <div class="card-content">
              <div class="counter-box">
                <span class="count-label">{{ t('lifecycle.count') }} {{ count }}</span>
                <button @click="count++" class="action-btn">{{ t('lifecycle.increment') }}</button>
              </div>
              <p class="hint">{{ t('lifecycle.hint') }}</p>
            </div>
          </section>

          <section class="demo-card">
            <h2>{{ t('lifecycle.logs') }}</h2>
            <div class="card-content">
              <div class="logs-container">
                <ul>
                  <li v-for="(msg, index) in messages" :key="index" class="log-item">
                    {{ msg }}
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

.counter-box {
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 15px;
  background-color: var(--bg-color-soft);
  border-radius: 8px;
}

.count-label {
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--primary-color);
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

.hint {
  font-size: 0.9rem;
  color: var(--text-color-secondary);
  margin: 0;
}

.logs-container {
  background-color: #2c3e50;
  color: #fff;
  padding: 15px;
  border-radius: 8px;
  min-height: 150px;
  font-family: monospace;
}

ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.log-item {
  margin-bottom: 5px;
  padding-bottom: 5px;
  border-bottom: 1px dashed rgba(255, 255, 255, 0.2);
}

.log-item:last-child {
  border-bottom: none;
}
</style>