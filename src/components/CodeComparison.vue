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
          <div v-if="vue2Template" class="code-part">
            <div class="part-label">Template</div>
            <pre><code class="hljs language-xml" v-html="highlightedVue2Template"></code></pre>
          </div>
          <div v-if="vue2Code" class="code-part">
            <div class="part-label" v-if="vue2Template">Script</div>
            <pre><code class="hljs language-javascript" v-html="highlightedVue2"></code></pre>
          </div>
        </div>
        <div class="code-block vue3">
          <div class="code-header">
            <span class="badge vue3-badge">Vue 3 (Composition API)</span>
          </div>
          <div v-if="vue3Template" class="code-part">
            <div class="part-label">Template</div>
            <pre><code class="hljs language-xml" v-html="highlightedVue3Template"></code></pre>
          </div>
          <div v-if="vue3Code" class="code-part">
            <div class="part-label" v-if="vue3Template">Script</div>
            <pre><code class="hljs language-javascript" v-html="highlightedVue3"></code></pre>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watchEffect } from 'vue'
import hljs from 'highlight.js/lib/core'
import javascript from 'highlight.js/lib/languages/javascript'
import xml from 'highlight.js/lib/languages/xml'
import { useTheme } from '../composables/useTheme'
// Use inline imports to manually toggle styles
import githubDark from 'highlight.js/styles/github-dark.css?inline'
import githubLight from 'highlight.js/styles/github.css?inline'

hljs.registerLanguage('javascript', javascript)
hljs.registerLanguage('xml', xml)

const { isDark } = useTheme()

// Dynamically switch highlight.js theme
watchEffect(() => {
  const styleId = 'hljs-theme-styles'
  let styleEl = document.getElementById(styleId)
  
  if (!styleEl) {
    styleEl = document.createElement('style')
    styleEl.id = styleId
    document.head.appendChild(styleEl)
  }
  
  styleEl.textContent = isDark.value ? githubDark : githubLight
})

const props = defineProps<{
  vue2Code?: string
  vue3Code?: string
  vue2Template?: string
  vue3Template?: string
}>()

const isExpanded = ref(false)

const toggleCode = () => {
  isExpanded.value = !isExpanded.value
}

const highlightedVue2 = computed(() => {
  return props.vue2Code ? hljs.highlight(props.vue2Code, { language: 'javascript' }).value : ''
})

const highlightedVue3 = computed(() => {
  return props.vue3Code ? hljs.highlight(props.vue3Code, { language: 'javascript' }).value : ''
})

const highlightedVue2Template = computed(() => {
  return props.vue2Template ? hljs.highlight(props.vue2Template, { language: 'xml' }).value : ''
})

const highlightedVue3Template = computed(() => {
  return props.vue3Template ? hljs.highlight(props.vue3Template, { language: 'xml' }).value : ''
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
  font-size: 10px;
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
}

.code-header {
  padding: 10px;
  background-color: var(--bg-color-soft);
  border-bottom: 1px solid var(--border-color);
  text-align: center;
}

.badge {
  display: inline-block;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: bold;
}

.vue2-badge {
  background-color: #e2e8f0;
  color: #475569;
}

.vue3-badge {
  background-color: #d1fae5;
  color: #059669;
}

.code-part {
  position: relative;
}

.part-label {
  padding: 4px 10px;
  font-size: 11px;
  color: var(--text-color-light);
  background-color: rgba(0,0,0,0.05);
  border-bottom: 1px solid var(--border-color-light);
  font-weight: bold;
}

pre {
  margin: 0;
  /* padding: 15px; */
  overflow-x: auto;
  /* background-color: #0d1117; */
}

code {
  font-family: 'Fira Code', monospace;
  font-size: 13px;
  line-height: 1.5;
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
