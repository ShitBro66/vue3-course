<script setup lang="ts">
import { ref } from 'vue'

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
</script>

<template>
  <div class="demo-container">
    <h1>TransitionGroup Demo</h1>

    <div class="demo-content">
      <button @click="add">Add</button>
      <button @click="remove">Remove</button>
      
      <TransitionGroup name="list" tag="ul">
        <li v-for="item in items" :key="item">
          {{ item }}
        </li>
      </TransitionGroup>
    </div>
  </div>
</template>

<style scoped>
.demo-container {
  padding: 20px;
}
button {
  margin-right: 10px;
  margin-bottom: 20px;
}
ul {
  list-style: none;
  padding: 0;
}
li {
  display: inline-block;
  margin-right: 10px;
  background-color: #eee;
  padding: 5px 10px;
}
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>