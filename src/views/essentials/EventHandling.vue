<script setup lang="ts">
import { ref } from 'vue'

const count = ref(0)
const name = ref('Vue.js')

function greet(event: Event) {
  alert(`Hello ${name.value}!`)
  // `event` is the native DOM event
  if (event) {
    alert((event.target as HTMLElement).tagName)
  }
}

function say(message: string) {
  alert(message)
}

function warn(message: string, event: Event) {
  // now we have access to the native event
  if (event) {
    event.preventDefault()
  }
  alert(message)
}
</script>

<template>
  <div class="demo-container">
    <h1>事件处理 (Event Handling)</h1>

    <section class="demo-section">
      <h2>Inline Handlers</h2>
      <button @click="count++">Add 1</button>
      <p>Count is: {{ count }}</p>
    </section>

    <section class="demo-section">
      <h2>Method Handlers</h2>
      <button @click="greet">Greet</button>
    </section>

    <section class="demo-section">
      <h2>Calling Methods in Inline Handlers</h2>
      <button @click="say('hello')">Say hello</button>
      <button @click="say('bye')">Say bye</button>
    </section>

    <section class="demo-section">
      <h2>Accessing Event Argument</h2>
      <button @click="(event) => warn('Form cannot be submitted yet.', event)">
        Submit
      </button>
    </section>
    
    <section class="demo-section">
      <h2>Event Modifiers</h2>
      <!-- the click event's propagation will be stopped -->
      <div @click="say('div clicked')" style="padding: 10px; border: 1px solid #ccc">
        Div (click me)
        <button @click.stop="say('button clicked')">Button (stop propagation)</button>
      </div>
    </section>
  </div>
</template>

<style scoped>
.demo-container {
  padding: 20px;
}
.demo-section {
  margin-bottom: 30px;
  border: 1px solid var(--border-color);
  padding: 20px;
  border-radius: 8px;
}
button {
  margin-right: 10px;
  margin-bottom: 5px;
}
</style>