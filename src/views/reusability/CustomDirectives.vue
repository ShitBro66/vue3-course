<script setup lang="ts">
const vFocus = {
  mounted: (el: HTMLElement) => el.focus()
}

const vColor = {
  mounted: (el: HTMLElement, binding: any) => {
    el.style.color = binding.value
  }
}
</script>

<template>
  <div class="demo-container">
    <h1>自定义指令 (Custom Directives)</h1>

    <section class="demo-section">
      <h2>v-focus</h2>
      <input v-focus placeholder="I will be focused automatically" />
    </section>

    <section class="demo-section">
      <h2>v-color</h2>
      <p v-color="'red'">This text is colored red by a directive.</p>
      <p v-color="'blue'">This text is colored blue by a directive.</p>
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