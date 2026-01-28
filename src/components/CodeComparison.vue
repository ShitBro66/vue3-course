<template>
  <div class="code-comparison">
    <div class="demo-display">
      <slot name="demo"></slot>
    </div>

    <div class="code-section">
      <div class="code-controls">
        <button @click="toggleCode" class="toggle-btn">
          {{ isExpanded ? 'Hide Code' : 'Show Code Comparison' }}
          <span class="arrow" :class="{ up: isExpanded }">▼</span>
        </button>
      </div>

      <div v-show="isExpanded" class="comparison-container">
        <div class="code-block vue2">
          <div class="code-header">
            <span class="badge vue2-badge">Vue 2 (Options API)</span>
          </div>
          <pre><code class="language-javascript" v-html="highlightedVue2"></code></pre>
        </div>
        <div class="code-block vue3">
          <div class="code-header">
            <span class="badge vue3-badge">Vue 3 (Composition API)</span>
          </div>
          <pre><code class="language-javascript" v-html="highlightedVue3"></code></pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import hljs from 'highlight.js/lib/core'
import javascript from 'highlight.js/lib/languages/javascript'
import 'highlight.js/styles/github-dark.css'

hljs.registerLanguage('javascript', javascript)

const props = defineProps<{
  vue2Code: string
  vue3Code: string
}>()

const isExpanded = ref(false)

const toggleCode = () => {
  isExpanded.value = !isExpanded.value
}

const highlightedVue2 = computed(() => {
  return hljs.highlight(props.vue2Code, { language: 'javascript' }).value
})

const highlightedVue3 = computed(() => {
  return hljs.highlight(props.vue3Code, { language: 'javascript' }).value
})
</script>

<style scoped>
.code-comparison {
  margin: 20px 0;
  border: 1px solid var(--border-color);
  border-radius: 8px;
  overflow: hidden;
  background-color: var(--bg-color);
}

.demo-display {
  padding: 20px;
  border-bottom: 1px solid var(--border-color);
  background-color: var(--bg-color-soft);
}

.code-controls {
  padding: 10px;
  text-align: center;
  background-color: var(--bg-color);
  border-top: 1px solid var(--border-color);
}

.toggle-btn {
  background: none;
  border: none;
  color: var(--primary-color);
  cursor: pointer;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  width: 100%;
  padding: 8px;
}

.toggle-btn:hover {
  background-color: var(--hover-color);
}

.arrow {
  font-size: 12px;
  transition: transform 0.3s;
}

.arrow.up {
  transform: rotate(180deg);
}

.comparison-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  border-top: 1px solid var(--border-color);
}

.code-block {
  padding: 0;
  overflow: hidden;
}

.code-block.vue2 {
  border-right: 1px solid var(--border-color);
  background-color: #f6f8fa; /* Light mode default */
}

.code-block.vue3 {
  background-color: #f6f8fa;
}

.dark .code-block {
  background-color: #0d1117;
}

.code-header {
  padding: 8px 16px;
  border-bottom: 1px solid var(--border-color);
  background-color: var(--bg-color-soft);
}

.badge {
  font-size: 12px;
  padding: 2px 8px;
  border-radius: 4px;
  font-weight: bold;
}

.vue2-badge {
  background-color: #e0e0e0;
  color: #333;
}

.vue3-badge {
  background-color: #42b883;
  color: white;
}

pre {
  margin: 0;
  padding: 16px;
  overflow-x: auto;
  font-size: 13px;
  line-height: 1.5;
}

code {
  font-family: 'Fira Code', monospace;
}

@media (max-width: 768px) {
  .comparison-container {
    grid-template-columns: 1fr;
  }
  
  .code-block.vue2 {
    border-right: none;
    border-bottom: 1px solid var(--border-color);
  }
}
</style>
