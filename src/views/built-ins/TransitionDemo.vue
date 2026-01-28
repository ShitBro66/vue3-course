<script setup lang="ts">
import { ref } from 'vue'

const show = ref(true)
</script>

<template>
  <div class="demo-container">
    <h1>Transition Demo</h1>

    <div class="demo-content">
      <button @click="show = !show">Toggle</button>
      
      <Transition name="fade">
        <p v-if="show" class="box">hello</p>
      </Transition>
      
      <Transition name="slide-fade">
        <p v-if="show" class="box">hello</p>
      </Transition>
    </div>
  </div>
</template>

<style scoped>
.demo-container {
  padding: 20px;
}
.box {
  margin-top: 20px;
  padding: 20px;
  background-color: #42b883;
  color: white;
  border-radius: 4px;
  display: inline-block;
  margin-right: 10px;
}

/* fade */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* slide-fade */
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>