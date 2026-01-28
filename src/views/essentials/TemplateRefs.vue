<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import CodeComparison from '../../components/CodeComparison.vue'

const { t } = useI18n()

const inputRef = ref<HTMLInputElement | null>(null)
const list = ref([1, 2, 3])
const itemRefs = ref([])

onMounted(() => {
  if (inputRef.value) {
    inputRef.value.focus()
    inputRef.value.style.border = '2px solid #42b883'
  }
})

const vue2Code = `export default {
  data() {
    return {
      list: [1, 2, 3]
    }
  },
  mounted() {
    this.$refs.inputRef.focus()
    this.$refs.inputRef.style.border = '2px solid #42b883'
  }
}`

const vue3Code = `import { ref, onMounted } from 'vue'

const inputRef = ref<HTMLInputElement | null>(null)
const list = ref([1, 2, 3])
const itemRefs = ref([])

onMounted(() => {
  if (inputRef.value) {
    inputRef.value.focus()
    inputRef.value.style.border = '2px solid #42b883'
  }
})`

const templateCode = `
<div class="demo-grid">
  <section class="demo-card">
    <h2>Accessing Element</h2>
    <div class="card-content">
      <p>This input is focused on mount via <code>ref</code>:</p>
      <input ref="inputRef" placeholder="I will be focused on mount" class="custom-input" />
    </div>
  </section>

  <section class="demo-card">
    <h2>Refs inside v-for</h2>
    <div class="card-content">
      <ul class="ref-list">
        <li v-for="item in list" ref="itemRefs" :key="item" class="list-item">
          Item {{ item }}
        </li>
      </ul>
      <p class="hint">Check console for <code>itemRefs</code> array.</p>
    </div>
  </section>
</div>`
</script>

<template>
  <div class="demo-container">
    <h1>{{ t('template_refs.title') }}</h1>

    <CodeComparison 
      :vue2-code="vue2Code" 
      :vue3-code="vue3Code"
      :vue2-template="templateCode"
      :vue3-template="templateCode"
    >
      <template #demo>
        <div class="demo-grid">
          <section class="demo-card">
            <h2>{{ t('template_refs.accessing_element') }}</h2>
            <div class="card-content">
              <p>{{ t('template_refs.focus_desc') }}</p>
              <input ref="inputRef" :placeholder="t('template_refs.input_placeholder')" class="custom-input" />
            </div>
          </section>

          <section class="demo-card">
            <h2>{{ t('template_refs.refs_inside_vfor') }}</h2>
            <div class="card-content">
              <ul class="ref-list">
                <li v-for="item in list" ref="itemRefs" :key="item" class="list-item">
                  {{ t('template_refs.item') }} {{ item }}
                </li>
              </ul>
              <p class="hint">{{ t('template_refs.console_hint') }}</p>
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
  transition: all 0.3s;
}

.ref-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  gap: 10px;
}

.list-item {
  background-color: var(--bg-color-soft);
  padding: 10px 20px;
  border-radius: 6px;
  border: 1px solid var(--border-color);
  font-weight: bold;
}

.hint {
  font-size: 0.9rem;
  color: var(--text-color-secondary);
  margin: 0;
}
</style>