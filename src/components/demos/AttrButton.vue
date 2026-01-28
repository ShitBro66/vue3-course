<script setup lang="ts">
import { useAttrs } from 'vue'

const attrs = useAttrs()
console.log(attrs)
</script>

<template>
  <div class="attr-button-wrapper">
    <button class="btn" v-bind="$attrs">Click Me</button>
    <span>(Attributes are passed to button)</span>
  </div>
</template>

<style scoped>
.btn {
  padding: 8px 16px;
  background-color: #42b883;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>