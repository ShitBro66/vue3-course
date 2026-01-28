<script setup lang="ts">
import { ref } from 'vue'
import CodeComparison from '../../components/CodeComparison.vue'

const open = ref(false)

const vue2Code = `<!-- Vue 2 (No built-in Teleport) -->
<!-- Usually requires a third-party library like portal-vue -->
<portal to="destination">
  <div class="modal">...</div>
</portal>

<!-- Or manual DOM manipulation in mounted() hook -->
mounted() {
  document.body.appendChild(this.$el)
}`

const vue3Code = `<!-- Vue 3 (Built-in Teleport) -->
<button @click="open = true">Open Modal</button>

<Teleport to="body">
  <div v-if="open" class="modal">
    <p>Hello from the modal!</p>
    <button @click="open = false">Close</button>
  </div>
</Teleport>`
</script>

<template>
  <div class="demo-container">
    <h1>Teleport Demo</h1>

    <CodeComparison :vue2-code="vue2Code" :vue3-code="vue3Code">
      <template #demo>
        <div class="demo-grid">
          <section class="demo-card">
            <h2>Portal to Body</h2>
            <div class="card-content centered">
              <p class="description">
                Clicking the button will render the modal as a direct child of <code>&lt;body&gt;</code>,
                breaking out of the component's DOM hierarchy.
              </p>
              
              <button @click="open = true" class="action-btn">Open Modal</button>

              <Teleport to="body">
                <div v-if="open" class="modal-overlay">
                  <div class="modal">
                    <h3>I am a Teleported Modal!</h3>
                    <p>My parent component is deep in the DOM tree, but I am rendered directly under body.</p>
                    <button @click="open = false" class="close-btn">Close</button>
                  </div>
                </div>
              </Teleport>
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
}

.action-btn {
  padding: 10px 20px;
  background-color: var(--primary-color);
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 1rem;
}

/* Modal Styles - these will be global when teleported, but scoped styles apply to the content */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.modal {
  background-color: white;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  text-align: center;
  max-width: 400px;
  width: 90%;
  color: #333;
}

.modal h3 {
  margin-top: 0;
  color: var(--primary-color);
}

.close-btn {
  margin-top: 20px;
  padding: 8px 16px;
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  border-radius: 4px;
  cursor: pointer;
}

.close-btn:hover {
  background-color: #e0e0e0;
}
</style>
