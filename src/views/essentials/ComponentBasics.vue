<script setup lang="ts">
import ButtonCounter from '../../components/demos/ButtonCounter.vue'
import { useI18n } from 'vue-i18n'
import CodeComparison from '../../components/CodeComparison.vue'

const { t } = useI18n()

const vue2Code = `export default {
  components: {
    ButtonCounter
  }
}`

const vue3Code = `import ButtonCounter from './ButtonCounter.vue'`

const templateCode = `
<div class="demo-content">
  <p>Here is a child component used 3 times:</p>
  
  <div class="components-wrapper">
    <ButtonCounter />
    <ButtonCounter />
    <ButtonCounter />
  </div>
  
  <p>Each component maintains its own state.</p>
</div>`
</script>

<template>
  <div class="demo-container">
    <h1>{{ t('component_basics.title') }}</h1>
    
    <CodeComparison 
      :vue2-code="vue2Code" 
      :vue3-code="vue3Code"
      :vue2-template="templateCode"
      :vue3-template="templateCode"
    >
      <template #demo>
        <div class="demo-content">
          <p>{{ t('component_basics.desc') }}</p>
          
          <div class="components-wrapper">
            <ButtonCounter />
            <ButtonCounter />
            <ButtonCounter />
          </div>
          
          <p>{{ t('component_basics.state_desc') }}</p>
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
.demo-content {
  padding: 20px;
  background-color: var(--bg-color);
  border-radius: 8px;
  border: 1px solid var(--border-color);
}
.components-wrapper {
  display: flex;
  gap: 10px;
  margin: 20px 0;
  flex-wrap: wrap;
}
</style>