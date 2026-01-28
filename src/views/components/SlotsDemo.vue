<script setup lang="ts">
import FancyButton from '../../components/demos/FancyButton.vue'
</script>

<template>
  <div class="demo-container">
    <h1>插槽 (Slots) Demo</h1>

    <section class="demo-section">
      <h2>Default Slot</h2>
      <FancyButton>
        Click me!
      </FancyButton>
      
      <FancyButton>
        <span style="color: yellow">Icon</span> Save
      </FancyButton>

      <FancyButton /> <!-- Fallback content -->
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
</style>