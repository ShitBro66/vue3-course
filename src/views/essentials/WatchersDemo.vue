<script setup lang="ts">
import { ref, watch, watchEffect } from 'vue'
import { useI18n } from 'vue-i18n'
import CodeComparison from '../../components/CodeComparison.vue'

const { t } = useI18n()

const question = ref('')
const answer = ref(t('watchers.default_answer'))
const loading = ref(false)
const answerImage = ref('')

// watch works directly on a ref
watch(question, async (newQuestion) => {
  if (newQuestion.includes('?')) {
    loading.value = true
    answer.value = t('watchers.thinking')
    answerImage.value = ''
    try {
      const res = await fetch('https://yesno.wtf/api')
      const data = await res.json()
      answer.value = data.answer.toUpperCase()
      answerImage.value = data.image
    } catch (error) {
      answer.value = t('watchers.error_api') + ' ' + error
    } finally {
      loading.value = false
    }
  } else {
    answer.value = t('watchers.default_answer')
    answerImage.value = ''
  }
})

// watchEffect
const count = ref(0)
const doubleCount = ref(0)
const log = ref('')

watchEffect(() => {
  doubleCount.value = count.value * 2
  log.value = t('watchers.log_msg', { count: count.value, double: doubleCount.value })
})

const vue2Code = `export default {
  data() {
    return {
      question: '',
      answer: 'Questions usually contain a question mark. ;-)',
      loading: false,
      answerImage: '',
      count: 0,
      doubleCount: 0,
      log: ''
    }
  },
  watch: {
    question: {
      async handler(newQuestion) {
        if (newQuestion.includes('?')) {
          this.loading = true
          this.answer = 'Thinking...'
          this.answerImage = ''
          try {
            const res = await fetch('https://yesno.wtf/api')
            const data = await res.json()
            this.answer = data.answer.toUpperCase()
            this.answerImage = data.image
          } catch (error) {
            this.answer = 'Error! ' + error
          } finally {
            this.loading = false
          }
        } else {
          this.answer = 'Questions usually contain a question mark. ;-)'
          this.answerImage = ''
        }
      }
    },
    count: {
      handler(newCount) {
        // Simulating watchEffect behavior
        this.doubleCount = newCount * 2
        this.log = \`Side effect: Count is \${newCount}, Double is \${this.doubleCount}\`
      },
      immediate: true
    }
  }
}`

const vue3Code = `import { ref, watch, watchEffect } from 'vue'

const question = ref('')
const answer = ref('Questions usually contain a question mark. ;-)')
const loading = ref(false)
const answerImage = ref('')

watch(question, async (newQuestion) => {
  if (newQuestion.includes('?')) {
    loading.value = true
    answer.value = 'Thinking...'
    answerImage.value = ''
    try {
      const res = await fetch('https://yesno.wtf/api')
      const data = await res.json()
      answer.value = data.answer.toUpperCase()
      answerImage.value = data.image
    } catch (error) {
      answer.value = 'Error! Could not reach the API. ' + error
    } finally {
      loading.value = false
    }
  } else {
    answer.value = 'Questions usually contain a question mark. ;-)'
    answerImage.value = ''
  }
})

const count = ref(0)
const doubleCount = ref(0)
const log = ref('')

watchEffect(() => {
  doubleCount.value = count.value * 2
  log.value = \`Side effect: Count is \${count.value}, Double is \${doubleCount.value}\`
})`

const templateCode = `
<div class="demo-grid">
  <section class="demo-card">
    <h2>watch() - Async API</h2>
    <div class="card-content">
      <div class="input-group">
        <label>Ask a yes/no question:</label>
        <input v-model="question" :disabled="loading" class="custom-input" placeholder="e.g., Is Vue awesome?" />
      </div>
      
      <div class="answer-box" :class="{ loading: loading }">
        <p class="answer-text">{{ answer }}</p>
        <img v-if="answerImage" :src="answerImage" class="answer-image" alt="Answer GIF" />
      </div>
    </div>
  </section>

  <section class="demo-card">
    <h2>watchEffect() - Side Effects</h2>
    <div class="card-content">
      <div class="counter-display">
        <div class="stat-item">
          <span class="label">Count:</span>
          <span class="value">{{ count }}</span>
        </div>
        <div class="stat-item">
          <span class="label">Double:</span>
          <span class="value">{{ doubleCount }}</span>
        </div>
      </div>
      
      <button @click="count++" class="action-btn">Increment</button>
      
      <div class="log-box">
        {{ log }}
      </div>
    </div>
  </section>
</div>`
</script>

<template>
  <div class="demo-container">
    <h1>{{ t('watchers.title') }}</h1>

    <CodeComparison 
      :vue2-code="vue2Code" 
      :vue3-code="vue3Code"
      :vue2-template="templateCode"
      :vue3-template="templateCode"
    >
      <template #demo>
        <div class="demo-grid">
          <section class="demo-card">
            <h2>{{ t('watchers.async_api') }}</h2>
            <div class="card-content">
              <div class="input-group">
                <label>{{ t('watchers.ask_question') }}</label>
                <input v-model="question" :disabled="loading" class="custom-input" :placeholder="t('watchers.placeholder')" />
              </div>
              
              <div class="answer-box" :class="{ loading: loading }">
                <p class="answer-text">{{ answer }}</p>
                <img v-if="answerImage" :src="answerImage" class="answer-image" alt="Answer GIF" />
              </div>
            </div>
          </section>

          <section class="demo-card">
            <h2>{{ t('watchers.side_effects') }}</h2>
            <div class="card-content">
              <div class="counter-display">
                <div class="stat-item">
                  <span class="label">{{ t('watchers.count') }}</span>
                  <span class="value">{{ count }}</span>
                </div>
                <div class="stat-item">
                  <span class="label">{{ t('watchers.double') }}</span>
                  <span class="value">{{ doubleCount }}</span>
                </div>
              </div>
              
              <button @click="count++" class="action-btn">{{ t('watchers.increment') }}</button>
              
              <div class="log-box">
                {{ log }}
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

.custom-input {
  width: 100%;
  padding: 10px;
  border: 1px solid var(--border-color);
  border-radius: 6px;
  font-size: 1rem;
  background-color: var(--bg-color);
  color: var(--text-color);
}

.answer-box {
  min-height: 100px;
  background-color: var(--bg-color-soft);
  border-radius: 8px;
  padding: 15px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: opacity 0.3s;
}

.answer-box.loading {
  opacity: 0.7;
}

.answer-text {
  font-size: 1.2rem;
  font-weight: bold;
  margin: 0 0 10px 0;
  color: var(--primary-color);
}

.answer-image {
  max-width: 100%;
  border-radius: 4px;
  max-height: 200px;
}

.counter-display {
  display: flex;
  justify-content: space-around;
  padding: 15px;
  background-color: var(--bg-color-soft);
  border-radius: 8px;
}

.stat-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.stat-item .label {
  font-size: 0.9rem;
  color: var(--text-color-secondary);
}

.stat-item .value {
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--primary-color);
}

.action-btn {
  padding: 10px;
  background-color: var(--primary-color);
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;
}

.log-box {
  padding: 10px;
  background-color: #2c3e50;
  color: #fff;
  border-radius: 4px;
  font-family: monospace;
  font-size: 0.9rem;
}
</style>