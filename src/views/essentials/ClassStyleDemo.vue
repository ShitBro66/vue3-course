<script setup lang="ts">
import { ref, computed } from 'vue'
import CodeComparison from '../../components/CodeComparison.vue'

const isActive = ref(true)
const hasError = ref(false)

const classObject = computed(() => ({
  active: isActive.value,
  'text-danger': hasError.value
}))

const activeColor = ref('#42b883')
const fontSize = ref(30)

const styleObject = computed(() => ({
  color: activeColor.value,
  fontSize: fontSize.value + 'px',
  fontWeight: 'bold'
}))

const vue2Code = `export default {
  data() {
    return {
      isActive: true,
      hasError: false,
      activeColor: '#42b883',
      fontSize: 30
    }
  },
  computed: {
    classObject() {
      return {
        active: this.isActive,
        'text-danger': this.hasError
      }
    },
    styleObject() {
      return {
        color: this.activeColor,
        fontSize: this.fontSize + 'px',
        fontWeight: 'bold'
      }
    }
  }
}`

const vue3Code = `import { ref, computed } from 'vue'

const isActive = ref(true)
const hasError = ref(false)

const classObject = computed(() => ({
  active: isActive.value,
  'text-danger': hasError.value
}))

const activeColor = ref('#42b883')
const fontSize = ref(30)

const styleObject = computed(() => ({
  color: activeColor.value,
  fontSize: fontSize.value + 'px',
  fontWeight: 'bold'
}))`
</script>

<template>
  <div class="demo-container">
    <h1>类与样式绑定 (Class and Style Bindings)</h1>

    <CodeComparison :vue2-code="vue2Code" :vue3-code="vue3Code">
      <template #demo>
        <div class="demo-grid">
          <section class="demo-card">
            <h2>Class Binding</h2>
            <div class="card-content">
              <div
                class="demo-box"
                :class="{ active: isActive, 'text-danger': hasError }"
              >
                Inline Object Binding
              </div>
              
              <div class="demo-box" :class="classObject">
                Computed Object Binding
              </div>
              
              <div class="controls">
                <button 
                  @click="isActive = !isActive" 
                  :class="{ active: isActive }"
                  class="toggle-btn"
                >
                  Toggle Active
                </button>
                <button 
                  @click="hasError = !hasError" 
                  :class="{ danger: hasError }"
                  class="toggle-btn"
                >
                  Toggle Error
                </button>
              </div>
            </div>
          </section>

          <section class="demo-card">
            <h2>Style Binding</h2>
            <div class="card-content">
              <div class="demo-text" :style="{ color: activeColor, fontSize: fontSize + 'px' }">
                Inline Style Text
              </div>
              
              <div class="demo-text" :style="styleObject">
                Computed Style Text
              </div>

              <div class="style-controls">
                <div class="control-group">
                  <label>Color:</label>
                  <input type="color" v-model="activeColor" />
                  <span>{{ activeColor }}</span>
                </div>
                <div class="control-group">
                  <label>Font Size: {{ fontSize }}px</label>
                  <input type="range" min="12" max="60" v-model="fontSize" />
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
  gap: 20px;
}

.demo-box {
  padding: 15px;
  border: 2px dashed #ccc;
  border-radius: 8px;
  text-align: center;
  transition: all 0.3s ease;
  background-color: var(--bg-color-soft);
}

.demo-box.active {
  background-color: rgba(66, 184, 131, 0.2);
  border-color: #42b883;
  color: #42b883;
  font-weight: bold;
}

.demo-box.text-danger {
  border-color: #f56c6c;
  color: #f56c6c;
}

.demo-box.active.text-danger {
  background-color: rgba(245, 108, 108, 0.1);
  border-style: solid;
}

.controls {
  display: flex;
  gap: 10px;
  justify-content: center;
}

.toggle-btn {
  padding: 8px 16px;
  border: 1px solid var(--border-color);
  background-color: var(--bg-color);
  color: var(--text-color);
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s;
}

.toggle-btn.active {
  background-color: #42b883;
  color: white;
  border-color: #42b883;
}

.toggle-btn.danger {
  background-color: #f56c6c;
  color: white;
  border-color: #f56c6c;
}

.demo-text {
  text-align: center;
  padding: 10px;
  min-height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--bg-color-soft);
  border-radius: 8px;
}

.style-controls {
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 15px;
  background-color: var(--bg-color-soft);
  border-radius: 8px;
}

.control-group {
  display: flex;
  align-items: center;
  gap: 10px;
}

input[type="range"] {
  flex: 1;
}

input[type="color"] {
  width: 40px;
  height: 40px;
  padding: 0;
  border: none;
  cursor: pointer;
}
</style>