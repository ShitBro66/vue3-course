<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import CodeComparison from '../../components/CodeComparison.vue'

const { t } = useI18n()

const vFocus = {
  mounted: (el: HTMLElement) => el.focus()
}

const vColor = {
  mounted: (el: HTMLElement, binding: any) => {
    el.style.color = binding.value
  }
}

const vue2Code = `// Vue 2 Directive Definition
Vue.directive('focus', {
  inserted: function (el) {
    el.focus()
  }
})

Vue.directive('color', {
  bind: function (el, binding) {
    el.style.color = binding.value
  }
})`

const vue3Code = `// Vue 3 Directive Definition (Script Setup)
const vFocus = {
  mounted: (el) => el.focus()
}

const vColor = {
  mounted: (el, binding) => {
    el.style.color = binding.value
  }
}`

const templateCode = `<!-- Usage -->
<input v-focus />
<p v-color="'red'">Red Text</p>`
</script>

<template>
  <div class="demo-container">
    <h1>{{ t('directives.title') }}</h1>

    <CodeComparison 
      :vue2-code="vue2Code" 
      :vue3-code="vue3Code"
      :vue2-template="templateCode"
      :vue3-template="templateCode"
    >
      <template #demo>
        <div class="demo-grid">
          <section class="demo-card">
            <h2>{{ t('directives.focus_demo') }}</h2>
            <div class="card-content">
              <p>{{ t('directives.focus_desc') }}</p>
              <input v-focus class="styled-input" :placeholder="t('directives.focus_placeholder')" />
            </div>
          </section>

          <section class="demo-card">
            <h2>{{ t('directives.color_demo') }}</h2>
            <div class="card-content">
              <p v-color="'#42b883'">{{ t('directives.color_green') }}</p>
              <p v-color="'#35495e'">{{ t('directives.color_blue') }}</p>
              <p v-color="'#ff6b6b'">{{ t('directives.color_red') }}</p>
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

.styled-input {
  padding: 10px;
  border: 2px solid var(--border-color);
  border-radius: 6px;
  font-size: 1rem;
  transition: border-color 0.2s;
}

.styled-input:focus {
  outline: none;
  border-color: var(--primary-color);
}
</style>
