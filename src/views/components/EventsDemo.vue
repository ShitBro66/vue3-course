<script setup lang="ts">
import { ref } from 'vue'
import EventChild from '../../components/demos/EventChild.vue'
import CodeComparison from '../../components/CodeComparison.vue'

const count = ref(0)

function increaseCount(n: number) {
  count.value += n
}

const vue2Code = `export default {
  components: { EventChild },
  data() {
    return {
      count: 0
    }
  },
  methods: {
    increaseCount(n) {
      this.count += n
    }
  }
}`

const vue3Code = `import { ref } from 'vue'
import EventChild from './EventChild.vue'

const count = ref(0)

function increaseCount(n: number) {
  count.value += n
}`
</script>

<template>
  <div class="demo-container">
    <h1>事件 (Component Events)</h1>

    <CodeComparison :vue2-code="vue2Code" :vue3-code="vue3Code">
      <template #demo>
        <div class="demo-grid">
          <section class="demo-card">
            <h2>Counter Event</h2>
            <div class="card-content centered">
              <div class="count-circle">
                {{ count }}
              </div>
              <p>Click buttons in children to emit events:</p>
              
              <div class="children-container">
                <EventChild @increase-by="increaseCount" />
                <EventChild @increase-by="increaseCount" />
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

.card-content.centered {
  align-items: center;
}

.count-circle {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: var(--primary-color);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  font-weight: bold;
  box-shadow: 0 4px 10px rgba(66, 184, 131, 0.3);
}

.children-container {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
}
</style>