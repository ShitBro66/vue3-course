<script setup lang="ts">
import { inject } from 'vue'

const i18n = inject('i18n')
</script>

<template>
  <div class="demo-container">
    <h1>插件 (Plugins)</h1>

    <div class="demo-content">
      <p>Plugins are self-contained code that usually add global-level functionality to Vue.</p>
      <p>We are using <code>vue-router</code>, <code>pinia</code>, and <code>vue-i18n</code> which are all plugins.</p>
      
      <p>Example: <code>vue-i18n</code> plugin provides global <code>$t</code> function or <code>useI18n</code> composable.</p>
    </div>
  </div>
</template>

<style scoped>
.demo-container {
  padding: 20px;
}
</style>