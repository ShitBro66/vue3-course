<script setup lang="ts">
import { useMouse } from '../../composables/useMouse'
import CodeComparison from '../../components/CodeComparison.vue'

const { x, y } = useMouse()

const vue2Code = `// mouseMixin.js
export default {
  data() {
    return {
      x: 0,
      y: 0
    }
  },
  mounted() {
    window.addEventListener('mousemove', this.update)
  },
  destroyed() {
    window.removeEventListener('mousemove', this.update)
  },
  methods: {
    update(e) {
      this.x = e.pageX
      this.y = e.pageY
    }
  }
}

// Usage
import mouseMixin from './mouseMixin'
export default {
  mixins: [mouseMixin]
}`

const vue3Code = `// mouse.js (Composable)
import { ref, onMounted, onUnmounted } from 'vue'

export function useMouse() {
  const x = ref(0)
  const y = ref(0)

  function update(event) {
    x.value = event.pageX
    y.value = event.pageY
  }

  onMounted(() => window.addEventListener('mousemove', update))
  onUnmounted(() => window.removeEventListener('mousemove', update))

  return { x, y }
}

// Usage
import { useMouse } from './mouse'
const { x, y } = useMouse()`
</script>

<template>
  <div class="demo-container">
    <h1>组合式函数 (Composables)</h1>

    <CodeComparison :vue2-code="vue2Code" :vue3-code="vue3Code">
      <template #demo>
        <div class="demo-grid">
          <section class="demo-card">
            <h2>Mouse Position Tracker</h2>
            <div class="card-content centered">
              <div class="tracker-box">
                <div class="coordinate">
                  <span class="label">X:</span>
                  <span class="value">{{ x }}</span>
                </div>
                <div class="coordinate">
                  <span class="label">Y:</span>
                  <span class="value">{{ y }}</span>
                </div>
              </div>
              <p class="description">
                Move your mouse around to see the coordinates update.
                This logic is reused via the <code>useMouse</code> composable.
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

.card-content.centered {
  align-items: center;
}

.tracker-box {
  display: flex;
  gap: 30px;
  background-color: var(--bg-secondary);
  padding: 20px;
  border-radius: 8px;
  border: 2px solid var(--primary-color);
}

.coordinate {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 1.5rem;
  font-family: monospace;
}

.label {
  color: var(--text-light);
}

.value {
  color: var(--primary-color);
  font-weight: bold;
  min-width: 60px;
}

.description {
  color: var(--text-light);
  text-align: center;
}
</style>
