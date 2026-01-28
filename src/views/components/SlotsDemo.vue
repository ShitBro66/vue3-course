<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import FancyButton from '../../components/demos/FancyButton.vue'
import CodeComparison from '../../components/CodeComparison.vue'

const { t } = useI18n()

const vue2Code = `export default {
  components: { FancyButton }
  // Template usage:
  // <FancyButton>
  //   Click me!
  // </FancyButton>
}`

const vue3Code = `import FancyButton from './FancyButton.vue'
// Template usage same as Vue 2`

const templateCode = `
<div class="demo-grid">
  <section class="demo-card">
    <h2>Default Slot</h2>
    <div class="card-content centered">
      <FancyButton>
        Click me!
      </FancyButton>
    </div>
  </section>

  <section class="demo-card">
    <h2>Slot with Icon</h2>
    <div class="card-content centered">
      <FancyButton>
        <span class="icon">🚀</span> Launch
      </FancyButton>
    </div>
  </section>

  <section class="demo-card">
    <h2>Fallback Content</h2>
    <div class="card-content centered">
      <FancyButton /> 
    </div>
  </section>
</div>`
</script>

<template>
  <div class="demo-container">
    <h1>{{ t('slots.title') }}</h1>

    <CodeComparison 
      :vue2-code="vue2Code" 
      :vue3-code="vue3Code"
      :vue2-template="templateCode"
      :vue3-template="templateCode"
    >
      <template #demo>
        <div class="demo-grid">
          <section class="demo-card">
            <h2>{{ t('slots.default') }}</h2>
            <div class="card-content centered">
              <FancyButton>
                {{ t('slots.click_me') }}
              </FancyButton>
            </div>
          </section>

          <section class="demo-card">
            <h2>{{ t('slots.with_icon') }}</h2>
            <div class="card-content centered">
              <FancyButton>
                <span class="icon">🚀</span> {{ t('slots.launch') }}
              </FancyButton>
            </div>
          </section>

          <section class="demo-card">
            <h2>{{ t('slots.fallback') }}</h2>
            <div class="card-content centered">
              <FancyButton /> 
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
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
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

.icon {
  margin-right: 5px;
}
</style>