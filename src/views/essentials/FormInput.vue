<script setup lang="ts">
import { ref } from 'vue'
import CodeComparison from '../../components/CodeComparison.vue'

const message = ref('')
const multilineMessage = ref('')
const checked = ref(false)
const checkedNames = ref([])
const picked = ref('')
const selected = ref('')
const multiSelected = ref([])
const lazyMsg = ref('')

const vue2Code = `export default {
  data() {
    return {
      message: '',
      multilineMessage: '',
      checked: false,
      checkedNames: [],
      picked: '',
      selected: '',
      multiSelected: [],
      lazyMsg: ''
    }
  }
}`

const vue3Code = `import { ref } from 'vue'

const message = ref('')
const multilineMessage = ref('')
const checked = ref(false)
const checkedNames = ref([])
const picked = ref('')
const selected = ref('')
const multiSelected = ref([])
const lazyMsg = ref('')`
</script>

<template>
  <div class="demo-container">
    <h1>表单输入绑定 (Form Input Bindings)</h1>

    <CodeComparison :vue2-code="vue2Code" :vue3-code="vue3Code">
      <template #demo>
        <div class="demo-grid">
          <section class="demo-card">
            <h2>Text Input</h2>
            <div class="card-content">
              <input v-model="message" placeholder="Edit me" class="custom-input" />
              <div class="result-box">
                <span class="label">Message:</span>
                <span class="value">{{ message || '(empty)' }}</span>
              </div>
            </div>
          </section>

          <section class="demo-card">
            <h2>Multiline Text</h2>
            <div class="card-content">
              <textarea v-model="multilineMessage" placeholder="Add multiple lines" class="custom-input"></textarea>
              <div class="result-box multiline">
                <span class="label">Preview:</span>
                <pre class="value">{{ multilineMessage || '(empty)' }}</pre>
              </div>
            </div>
          </section>

          <section class="demo-card">
            <h2>Checkboxes</h2>
            <div class="card-content">
              <div class="checkbox-group">
                <label class="custom-checkbox">
                  <input type="checkbox" id="checkbox" v-model="checked" />
                  <span>Checked: {{ checked }}</span>
                </label>
              </div>
              
              <div class="divider"></div>
              
              <div class="checkbox-group">
                <label class="custom-checkbox">
                  <input type="checkbox" value="Jack" v-model="checkedNames" />
                  <span>Jack</span>
                </label>
                <label class="custom-checkbox">
                  <input type="checkbox" value="John" v-model="checkedNames" />
                  <span>John</span>
                </label>
                <label class="custom-checkbox">
                  <input type="checkbox" value="Mike" v-model="checkedNames" />
                  <span>Mike</span>
                </label>
              </div>
              <div class="result-box">
                <span class="label">Names:</span>
                <span class="value">{{ checkedNames }}</span>
              </div>
            </div>
          </section>

          <section class="demo-card">
            <h2>Radio Buttons</h2>
            <div class="card-content">
              <div class="radio-group">
                <label class="custom-radio">
                  <input type="radio" value="One" v-model="picked" />
                  <span>One</span>
                </label>
                <label class="custom-radio">
                  <input type="radio" value="Two" v-model="picked" />
                  <span>Two</span>
                </label>
              </div>
              <div class="result-box">
                <span class="label">Picked:</span>
                <span class="value">{{ picked || '(none)' }}</span>
              </div>
            </div>
          </section>

          <section class="demo-card">
            <h2>Select</h2>
            <div class="card-content">
              <select v-model="selected" class="custom-select">
                <option disabled value="">Please select one</option>
                <option>A</option>
                <option>B</option>
                <option>C</option>
              </select>
              <div class="result-box">
                <span class="label">Selected:</span>
                <span class="value">{{ selected || '(none)' }}</span>
              </div>
            </div>
          </section>
          
          <section class="demo-card">
            <h2>Modifiers (.lazy)</h2>
            <div class="card-content">
              <div class="input-group">
                <label>Sync after change (unfocus):</label>
                <input v-model.lazy="lazyMsg" class="custom-input" />
              </div>
              <div class="result-box">
                <span class="label">Value:</span>
                <span class="value">{{ lazyMsg || '(empty)' }}</span>
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

.custom-input, .custom-select {
  padding: 8px 12px;
  border: 1px solid var(--border-color);
  border-radius: 6px;
  font-size: 1rem;
  background-color: var(--bg-color);
  color: var(--text-color);
  width: 100%;
}

textarea.custom-input {
  min-height: 80px;
  resize: vertical;
}

.result-box {
  background-color: var(--bg-color-soft);
  padding: 10px;
  border-radius: 6px;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: 10px;
}

.result-box.multiline {
  flex-direction: column;
  align-items: flex-start;
}

.label {
  color: var(--text-color-secondary);
  font-weight: bold;
}

.value {
  color: var(--primary-color);
  font-weight: bold;
}

pre.value {
  margin: 0;
  white-space: pre-line;
  font-family: inherit;
}

.checkbox-group, .radio-group {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
}

.custom-checkbox, .custom-radio {
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
}

.divider {
  height: 1px;
  background-color: var(--border-color);
  margin: 5px 0;
}
</style>