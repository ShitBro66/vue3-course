<script setup lang="ts">
import { ref } from 'vue'
import CodeComparison from '../../components/CodeComparison.vue'

const items = ref([1, 2, 3, 4, 5])
const nextNum = ref(6)

function randomIndex() {
  return Math.floor(Math.random() * items.value.length)
}

function add() {
  items.value.splice(randomIndex(), 0, nextNum.value++)
}

function remove() {
  items.value.splice(randomIndex(), 1)
}

const vue2Code = `<transition-group name="list" tag="ul">
  <li v-for="item in items" :key="item">
    {{ item }}
  </li>
</transition-group>

<style>
/* Vue 2 Classes */
.list-enter, .list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
.list-leave-active {
  position: absolute; /* for smooth layout transition */
}
</style>`

const vue3Code = `<TransitionGroup name="list" tag="ul">
  <li v-for="item in items" :key="item">
    {{ item }}
  </li>
</TransitionGroup>

<style>
/* Vue 3 Classes (enter -> enter-from) */
.list-enter-from, .list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
.list-leave-active {
  position: absolute;
}
</style>`
</script>

<template>
  <div class="demo-container">
    <h1>TransitionGroup Demo</h1>

    <CodeComparison :vue2-code="vue2Code" :vue3-code="vue3Code">
      <template #demo>
        <div class="demo-grid">
          <section class="demo-card">
            <h2>List Transitions</h2>
            <div class="card-content">
              <div class="controls">
                <button @click="add" class="action-btn">Add Item</button>
                <button @click="remove" class="action-btn secondary">Remove Item</button>
              </div>
              
              <div class="list-container">
                <TransitionGroup name="list" tag="ul" class="demo-list">
                  <li v-for="item in items" :key="item" class="list-item">
                    {{ item }}
                  </li>
                </TransitionGroup>
              </div>
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

.controls {
  display: flex;
  gap: 10px;
  justify-content: center;
}

.action-btn {
  padding: 8px 16px;
  background-color: var(--primary-color);
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: opacity 0.2s;
}

.action-btn.secondary {
  background-color: var(--secondary-color);
}

.action-btn:hover {
  opacity: 0.9;
}

.list-container {
  min-height: 200px;
  background-color: var(--bg-secondary);
  border-radius: 8px;
  padding: 20px;
  overflow: hidden;
}

.demo-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  position: relative;
}

.list-item {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  background-color: white;
  border: 1px solid var(--border-color);
  border-radius: 8px;
  font-weight: bold;
  color: var(--primary-color);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

/* Transition Classes */
.list-move, /* apply transition to moving elements */
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

/* ensure leaving items are taken out of layout flow so others can move smoothly */
.list-leave-active {
  position: absolute;
}
</style>
