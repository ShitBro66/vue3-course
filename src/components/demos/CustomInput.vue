<script setup lang="ts">
defineProps(['modelValue'])
defineEmits(['update:modelValue'])
</script>

<template>
  <div class="custom-input">
    <label>Custom Input: </label>
    <input
      :value="modelValue"
      @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
    />
  </div>
</template>

<style scoped>
.custom-input {
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 4px;
  display: inline-block;
}
input {
  padding: 5px;
}
</style>