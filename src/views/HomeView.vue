<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <div class="home">
    <h1>{{ t('common.welcome') }}</h1>
    <p>{{ t('common.desc') }}</p>
    <p>{{ t('common.check_sidebar') }}</p>
    
    <div class="features">
      <h2>{{ t('common.features') }}</h2>
      <ul>
        <li>{{ t('common.core_concepts') }}</li>
        <li>{{ t('common.components_depth') }}</li>
        <li>{{ t('common.reusability') }}</li>
        <li>{{ t('common.built_ins') }}</li>
        <li>{{ t('common.ecosystem') }}</li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.home {
  max-width: 800px;
}
h1 {
  color: #42b883;
  margin-bottom: 20px;
}
p {
  line-height: 1.6;
  margin-bottom: 10px;
}
.features {
  margin-top: 40px;
  background-color: var(--sidebar-bg);
  padding: 20px;
  border-radius: 8px;
  border: 1px solid var(--border-color);
}
li {
  margin-bottom: 8px;
}
</style>