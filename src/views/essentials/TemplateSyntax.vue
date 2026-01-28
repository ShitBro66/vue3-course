<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import CodeComparison from '../../components/CodeComparison.vue'

const { t } = useI18n()

const msg = ref('Hello Vue 3!')
const rawHtml = ref('<span style="color: #f56c6c; font-weight: bold;">This text is red.</span>')
const isButtonDisabled = ref(true)
const dynamicId = ref('my-dynamic-id')

const toggleDisabled = () => {
  isButtonDisabled.value = !isButtonDisabled.value
}

const vue2Code = `export default {
  data() {
    return {
      msg: 'Hello Vue 3!',
      rawHtml: '<span style="color: #f56c6c; font-weight: bold;">This text is red.</span>',
      isButtonDisabled: true,
      dynamicId: 'my-dynamic-id'
    }
  },
  methods: {
    toggleDisabled() {
      this.isButtonDisabled = !this.isButtonDisabled
    }
  }
}`

const vue3Code = `import { ref } from 'vue'

const msg = ref('Hello Vue 3!')
const rawHtml = ref('<span style="color: #f56c6c; font-weight: bold;">This text is red.</span>')
const isButtonDisabled = ref(true)
const dynamicId = ref('my-dynamic-id')

const toggleDisabled = () => {
  isButtonDisabled.value = !isButtonDisabled.value
}`

const templateCode = `
<div class="demo-grid">
  <section class="demo-card">
    <h2>Text Interpolation</h2>
    <div class="card-content">
      <p class="message-box">{{ msg }}</p>
      <input v-model="msg" class="custom-input" placeholder="Edit me" />
    </div>
  </section>

  <section class="demo-card">
    <h2>Raw HTML</h2>
    <div class="card-content">
      <p>Using v-html directive:</p>
      <div class="html-box" v-html="rawHtml"></div>
    </div>
  </section>

  <section class="demo-card">
    <h2>Attribute Binding</h2>
    <div class="card-content">
      <div :id="dynamicId" class="id-box">
        Inspect me to see ID: <code>{{ dynamicId }}</code>
      </div>
      
      <div class="button-group">
        <button :disabled="isButtonDisabled" class="action-btn">
          {{ isButtonDisabled ? 'Disabled' : 'Enabled' }}
        </button>
        <button @click="toggleDisabled" class="toggle-btn">
          Toggle State
        </button>
      </div>
    </div>
  </section>

  <section class="demo-card">
    <h2>JavaScript Expressions</h2>
    <div class="card-content">
      <div class="expression-item">
        <span>{{ msg }} (Reversed):</span>
        <strong>{{ msg.split('').reverse().join('') }}</strong>
      </div>
      <div class="expression-item">
        <span>ID Length + 10:</span>
        <strong>{{ dynamicId.length + 10 }}</strong>
      </div>
    </div>
  </section>
</div>`
</script>

<template>
  <div class="demo-container">
    <h1>{{ t('template_syntax.title') }}</h1>
    
    <CodeComparison 
      :vue2-code="vue2Code" 
      :vue3-code="vue3Code"
      :vue2-template="templateCode"
      :vue3-template="templateCode"
    >
      <template #demo>
        <div class="demo-grid">
          <section class="demo-card">
            <h2>{{ t('template_syntax.text_interpolation') }}</h2>
            <div class="card-content">
              <p class="message-box">{{ msg }}</p>
              <input v-model="msg" class="custom-input" placeholder="Edit me" />
            </div>
          </section>

          <section class="demo-card">
            <h2>{{ t('template_syntax.raw_html') }}</h2>
            <div class="card-content">
              <p>{{ t('template_syntax.using_v_html') }}</p>
              <div class="html-box" v-html="rawHtml"></div>
            </div>
          </section>

          <section class="demo-card">
            <h2>{{ t('template_syntax.attribute_binding') }}</h2>
            <div class="card-content">
              <div :id="dynamicId" class="id-box">
                {{ t('template_syntax.inspect_id') }} <code>{{ dynamicId }}</code>
              </div>
              
              <div class="button-group">
                <button :disabled="isButtonDisabled" class="action-btn">
                  {{ isButtonDisabled ? t('common.disabled') : t('common.enabled') }}
                </button>
                <button @click="toggleDisabled" class="toggle-btn">
                  {{ t('template_syntax.toggle_state') }}
                </button>
              </div>
            </div>
          </section>

          <section class="demo-card">
            <h2>{{ t('template_syntax.js_expressions') }}</h2>
            <div class="card-content">
              <div class="expression-item">
                <span>{{ msg }} (Reversed):</span>
                <strong>{{ msg.split('').reverse().join('') }}</strong>
              </div>
              <div class="expression-item">
                <span>ID Length + 10:</span>
                <strong>{{ dynamicId.length + 10 }}</strong>
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

.message-box {
  font-size: 1.2rem;
  font-weight: bold;
  color: var(--primary-color);
  margin: 0;
}

.custom-input {
  padding: 8px 12px;
  border: 1px solid var(--border-color);
  border-radius: 6px;
  font-size: 1rem;
  background-color: var(--bg-color);
  color: var(--text-color);
}

.html-box {
  padding: 10px;
  background-color: var(--bg-color-soft);
  border-radius: 6px;
  border: 1px dashed var(--border-color);
}

.id-box {
  padding: 10px;
  background-color: var(--bg-color-soft);
  border-radius: 6px;
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
  opacity: 1;
  transition: opacity 0.2s;
}

.action-btn:disabled {
  background-color: #ccc;
  cursor: not-allowed;
  opacity: 0.7;
}

.toggle-btn {
  padding: 8px 16px;
  background-color: transparent;
  border: 1px solid var(--primary-color);
  color: var(--primary-color);
  border-radius: 6px;
  cursor: pointer;
}

.expression-item {
  display: flex;
  justify-content: space-between;
  padding: 8px;
  background-color: var(--bg-color-soft);
  border-radius: 6px;
}
</style>