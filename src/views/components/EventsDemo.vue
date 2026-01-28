<script setup lang="ts">
import { ref } from 'vue'
import EventChild from '../../components/demos/EventChild.vue'

const count = ref(0)

function increaseCount(n: number) {
  count.value += n
}
</script>

<template>
  <div class="demo-container">
    <h1>事件 (Component Events) Demo</h1>

    <div class="demo-content">
      <p>Total Count: {{ count }}</p>
      <EventChild @increase-by="increaseCount" />
      <EventChild @increase-by="increaseCount" />
    </div>
  </div>
</template>

<style scoped>
.demo-container {
  padding: 20px;
}
</style>