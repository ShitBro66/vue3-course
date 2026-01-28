<script setup lang="ts">
defineProps<{
  title: string
  id: number
}>()
</script>

<template>
  <div class="blog-post">
    <h4>{{ title }} (ID: {{ id }})</h4>
    <p>This is the content of the blog post...</p>
  </div>
</template>

<style scoped>
.blog-post {
  border: 1px solid #ddd;
  padding: 15px;
  margin-bottom: 10px;
  border-radius: 6px;
  background-color: #fff;
}
h4 {
  margin-top: 0;
  color: #35495e;
}
</style>