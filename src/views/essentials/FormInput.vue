<script setup lang="ts">
import { ref } from 'vue'

const message = ref('')
const multilineMessage = ref('')
const checked = ref(false)
const checkedNames = ref([])
const picked = ref('')
const selected = ref('')
const multiSelected = ref([])
const lazyMsg = ref('')
</script>

<template>
  <div class="demo-container">
    <h1>表单输入绑定 (Form Input Bindings)</h1>

    <section class="demo-section">
      <h2>Text</h2>
      <input v-model="message" placeholder="edit me" />
      <p>Message is: {{ message }}</p>
    </section>

    <section class="demo-section">
      <h2>Multiline Text</h2>
      <textarea v-model="multilineMessage" placeholder="add multiple lines"></textarea>
      <p style="white-space: pre-line;">{{ multilineMessage }}</p>
    </section>

    <section class="demo-section">
      <h2>Checkbox</h2>
      <input type="checkbox" id="checkbox" v-model="checked" />
      <label for="checkbox">{{ checked }}</label>
      
      <h3>Multiple Checkboxes</h3>
      <div>
        <input type="checkbox" id="jack" value="Jack" v-model="checkedNames" />
        <label for="jack">Jack</label>
        
        <input type="checkbox" id="john" value="John" v-model="checkedNames" />
        <label for="john">John</label>
        
        <input type="checkbox" id="mike" value="Mike" v-model="checkedNames" />
        <label for="mike">Mike</label>
      </div>
      <p>Checked names: {{ checkedNames }}</p>
    </section>

    <section class="demo-section">
      <h2>Radio</h2>
      <div>
        <input type="radio" id="one" value="One" v-model="picked" />
        <label for="one">One</label>
        
        <input type="radio" id="two" value="Two" v-model="picked" />
        <label for="two">Two</label>
      </div>
      <p>Picked: {{ picked }}</p>
    </section>

    <section class="demo-section">
      <h2>Select</h2>
      <select v-model="selected">
        <option disabled value="">Please select one</option>
        <option>A</option>
        <option>B</option>
        <option>C</option>
      </select>
      <p>Selected: {{ selected }}</p>
      
      <h3>Multiple Select</h3>
      <select v-model="multiSelected" multiple>
        <option>A</option>
        <option>B</option>
        <option>C</option>
      </select>
      <p>Selected: {{ multiSelected }}</p>
    </section>
    
    <section class="demo-section">
      <h2>Modifiers</h2>
      <label>.lazy (sync after change): </label>
      <input v-model.lazy="lazyMsg" />
      <p>Value: {{ lazyMsg }}</p>
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
input, textarea, select {
  margin-right: 10px;
  margin-bottom: 10px;
}
</style>