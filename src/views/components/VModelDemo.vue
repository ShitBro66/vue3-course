<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import CustomInput from '../../components/demos/CustomInput.vue'
import CodeComparison from '../../components/CodeComparison.vue'

const { t } = useI18n()

const message = ref('hello')

const vue2Code = `<!-- Parent -->
<CustomInput v-model="message" />

<!-- Child (CustomInput.vue) -->
<template>
  <input
    :value="value"
    @input="$emit('input', $event.target.value)"
  />
</template>

<script>
export default {
  props: ['value']
}
<\/script>`

const vue3Code = `<!-- Parent -->
<CustomInput v-model="message" />

<!-- Child (CustomInput.vue) -->
<template>
  <input
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>

<script setup>
defineProps(['modelValue'])
defineEmits(['update:modelValue'])
<\/script>`

const templateCode = `
<div class="demo-grid">
  <section class="demo-card">
    <h2>Two-way Binding</h2>
    <div class="card-content centered">
      <div class="input-group">
        <label>Parent Message:</label>
        <div class="value-display">{{ message }}</div>
      </div>
      
      <div class="input-group">
        <label>Custom Input (Child):</label>
        <CustomInput v-model="message" />
      </div>

      <p class="note">
        In Vue 3, <code>v-model</code> defaults to using <code>modelValue</code> prop and <code>update:modelValue</code> event.
      </p>
    </div>
  </section>
</div>`
</script>

<template>
  <div class="demo-container">
    <h1>{{ t('vmodel.title') }}</h1>

    <CodeComparison 
      :vue2-code="vue2Code" 
      :vue3-code="vue3Code"
      :vue2-template="templateCode"
      :vue3-template="templateCode"
    >
      <template #demo>
        <div class="demo-grid">
          <section class="demo-card">
            <h2>{{ t('vmodel.two_way_binding') }}</h2>
            <div class="card-content centered">
              <div class="input-group">
                <label>{{ t('vmodel.parent_message') }}</label>
                <div class="value-display">{{ message }}</div>
              </div>
              
              <div class="input-group">
                <label>{{ t('vmodel.custom_input') }}</label>
                <CustomInput v-model="message" />
              </div>

              <p class="note" v-html="t('vmodel.vue3_note').replace('modelValue', '<code>modelValue</code>').replace('update:modelValue', '<code>update:modelValue</code>')"></p>
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

.input-group {
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  width: 100%;
  max-width: 300px;
}

.value-display {
  padding: 10px;
  background-color: var(--bg-secondary);
  border-radius: 6px;
  width: 100%;
  text-align: center;
  font-weight: bold;
  color: var(--primary-color);
}

.note {
  margin-top: 10px;
  font-size: 0.9rem;
  color: var(--text-light);
  text-align: center;
}
</style>
