<script setup lang="ts">
</script>

<template>
  <div class="fancy-button">
    <slot>Default Button Text</slot> <!-- Default slot content -->
  </div>
</template>

<style scoped>
.fancy-button {
  background: linear-gradient(315deg, #42d392 25%, #647eff);
  color: white;
  padding: 5px 15px;
  border-radius: 8px;
  cursor: pointer;
  display: inline-block;
  margin: 5px;
}
</style>