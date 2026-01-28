<script setup lang="ts">
import { ref } from 'vue'
import CodeComparison from '../../components/CodeComparison.vue'

const awesome = ref(true)
const type = ref('A')
const showDetails = ref(true)

const nextType = () => {
  type.value = type.value === 'A' ? 'B' : type.value === 'B' ? 'C' : 'A'
}

const vue2Code = `export default {
  data() {
    return {
      awesome: true,
      type: 'A',
      showDetails: true
    }
  },
  methods: {
    nextType() {
      this.type = this.type === 'A' ? 'B' : this.type === 'B' ? 'C' : 'A'
    }
  }
}`

const vue3Code = `import { ref } from 'vue'

const awesome = ref(true)
const type = ref('A')
const showDetails = ref(true)

const nextType = () => {
  type.value = type.value === 'A' ? 'B' : type.value === 'B' ? 'C' : 'A'
}`
</script>

<template>
  <div class="demo-container">
    <h1>条件渲染 (Conditional Rendering)</h1>

    <CodeComparison :vue2-code="vue2Code" :vue3-code="vue3Code">
      <template #demo>
        <div class="demo-grid">
          <section class="demo-card">
            <h2>v-if / v-else</h2>
            <div class="card-content centered">
              <div class="emoji-display">
                <span v-if="awesome" class="bounce">🎉 Vue is Awesome!</span>
                <span v-else class="shake">😢 Oh no</span>
              </div>
              <button @click="awesome = !awesome" class="action-btn">
                Toggle Mood
              </button>
            </div>
          </section>

          <section class="demo-card">
            <h2>v-else-if</h2>
            <div class="card-content centered">
              <div class="type-display">
                <div v-if="type === 'A'" class="type-box type-a">Type A</div>
                <div v-else-if="type === 'B'" class="type-box type-b">Type B</div>
                <div v-else-if="type === 'C'" class="type-box type-c">Type C</div>
                <div v-else>Not A/B/C</div>
              </div>
              <button @click="nextType" class="action-btn">
                Cycle Type
              </button>
            </div>
          </section>

          <section class="demo-card">
            <h2>v-show</h2>
            <div class="card-content centered">
              <div class="info-box">
                <p>v-show toggles CSS display property.</p>
                <div v-show="showDetails" class="details-panel">
                  <p>✨ These details are always in DOM!</p>
                  <small>Inspect element to verify.</small>
                </div>
              </div>
              <button @click="showDetails = !showDetails" class="action-btn secondary">
                {{ showDetails ? 'Hide' : 'Show' }} Details
              </button>
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

.card-content.centered {
  align-items: center;
  text-align: center;
}

.emoji-display {
  font-size: 1.5rem;
  min-height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.bounce {
  animation: bounce 0.5s infinite alternate;
}

@keyframes bounce {
  from { transform: translateY(0); }
  to { transform: translateY(-10px); }
}

.shake {
  animation: shake 0.5s;
}

@keyframes shake {
  0% { transform: translateX(0); }
  25% { transform: translateX(-5px); }
  75% { transform: translateX(5px); }
  100% { transform: translateX(0); }
}

.type-display {
  min-height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}

.type-box {
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  border-radius: 8px;
  font-size: 1.2rem;
  transition: all 0.3s;
}

.type-a { background-color: #42b883; }
.type-b { background-color: #35495e; }
.type-c { background-color: #f56c6c; }

.info-box {
  background-color: var(--bg-color-soft);
  padding: 15px;
  border-radius: 8px;
  width: 100%;
}

.details-panel {
  margin-top: 10px;
  padding: 10px;
  border: 1px dashed var(--border-color);
  background-color: var(--bg-color);
  border-radius: 4px;
}

.action-btn {
  padding: 8px 20px;
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
</style>