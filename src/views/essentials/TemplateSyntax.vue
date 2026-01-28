<script setup lang="ts">
import { ref } from 'vue'

const msg = ref('Hello Vue 3!')
const rawHtml = ref('<span style="color: red">This should be red.</span>')
const dynamicId = ref('my-id')
const isButtonDisabled = ref(true)
const objectOfAttrs = {
  id: 'container',
  class: 'wrapper'
}
const number = ref(10)
const ok = ref(true)
const message = ref('Hello')

const toggleDisabled = () => {
  isButtonDisabled.value = !isButtonDisabled.value
}
</script>

<template>
  <div class="demo-container">
    <h1>模板语法 (Template Syntax) Demo</h1>
    
    <section class="demo-section">
      <h2>文本插值 (Text Interpolation)</h2>
      <p>Message: {{ msg }}</p>
      <input v-model="msg" placeholder="Edit me" />
    </section>

    <section class="demo-section">
      <h2>原始 HTML (Raw HTML)</h2>
      <p>Using text interpolation: {{ rawHtml }}</p>
      <p>Using v-html directive: <span v-html="rawHtml"></span></p>
    </section>

    <section class="demo-section">
      <h2>Attribute 绑定 (Attribute Bindings)</h2>
      <div v-bind:id="dynamicId">Div with dynamic ID: {{ dynamicId }}</div>
      <button :disabled="isButtonDisabled">Button is {{ isButtonDisabled ? 'Disabled' : 'Enabled' }}</button>
      <button @click="toggleDisabled">Toggle Disabled</button>
      
      <div v-bind="objectOfAttrs">Div with multiple attributes bound via object</div>
    </section>

    <section class="demo-section">
      <h2>JavaScript 表达式 (JavaScript Expressions)</h2>
      <p>Number + 1: {{ number + 1 }}</p>
      <p>Ok? {{ ok ? 'YES' : 'NO' }}</p>
      <p>Reversed Message: {{ message.split('').reverse().join('') }}</p>
    </section>
  </div>
</template>

<style scoped>
.demo-container {
  padding: 20px;
}
.demo-section {
  margin-bottom: 30px;
  border: 1px solid #eee;
  padding: 20px;
  border-radius: 8px;
}
h2 {
  margin-top: 0;
  color: #42b883;
}
button {
  margin-right: 10px;
  padding: 5px 10px;
}
</style>