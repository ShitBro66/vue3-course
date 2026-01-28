<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import AttrButton from '../../components/demos/AttrButton.vue'
import CodeComparison from '../../components/CodeComparison.vue'

const { t } = useI18n()

const onClick = () => {
  alert('Clicked!')
}

const vue2Code = `<!-- Parent -->
<AttrButton class="large-btn" @click="onClick" />

<!-- Child (AttrButton.vue) -->
<template>
  <button v-bind="$attrs" v-on="$listeners">
    Click Me
  </button>
</template>

<script>
export default {
  inheritAttrs: false
}
<\/script>`

const vue3Code = `<!-- Parent -->
<AttrButton class="large-btn" @click="onClick" />

<!-- Child (AttrButton.vue) -->
<template>
  <button>Click Me</button>
</template>

<script setup>
// In Vue 3, attributes and event listeners are merged into $attrs.
// If the component has a single root element, fallthrough is automatic!
// No need to manually bind $attrs unless you want to disable inheritance.
<\/script>`

const templateCode = `
<div class="demo-grid">
  <section class="demo-card">
    <h2>Automatic Inheritance</h2>
    <div class="card-content centered">
      <p class="description">
        The button below receives <code>class="large-btn"</code> and <code>@click</code> handler
        from the parent, even though they are not defined as props.
      </p>
      
      <AttrButton class="large-btn" @click="onClick" />
      
      <p class="note">
        Inspect the button element to see the applied class.
      </p>
    </div>
  </section>
</div>`
</script>

<template>
  <div class="demo-container">
    <h1>{{ t('attrs.title') }}</h1>

    <CodeComparison 
      :vue2-code="vue2Code" 
      :vue3-code="vue3Code"
      :vue2-template="templateCode"
      :vue3-template="templateCode"
    >
      <template #demo>
        <div class="demo-grid">
          <section class="demo-card">
            <h2>{{ t('attrs.auto_inheritance') }}</h2>
            <div class="card-content centered">
              <p class="description" v-html="t('attrs.desc').replace('class=&quot;large-btn&quot;', '<code>class=&quot;large-btn&quot;</code>').replace('@click', '<code>@click</code>')"></p>
              
              <AttrButton class="large-btn" @click="onClick" />
              
              <p class="note">{{ t('attrs.note') }}</p>
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

.description {
  color: var(--text-light);
  text-align: center;
  margin-bottom: 15px;
}

.note {
  margin-top: 10px;
  font-size: 0.9rem;
  color: var(--text-light);
  text-align: center;
}

/* Styles for the child component to inherit */
:deep(.large-btn) {
  padding: 12px 24px;
  font-size: 1.2rem;
  background-color: var(--secondary-color);
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: transform 0.1s;
}

:deep(.large-btn:active) {
  transform: scale(0.95);
}
</style>
