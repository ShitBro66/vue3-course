<script setup lang="ts">
import { ref } from 'vue'
import BlogPost from '../../components/demos/BlogPost.vue'

const posts = ref([
  { id: 1, title: 'My journey with Vue' },
  { id: 2, title: 'Blogging with Vue' },
  { id: 3, title: 'Why Vue is so fun' }
])

const fontSize = ref(1)
</script>

<template>
  <div class="demo-container">
    <h1>Props Demo</h1>
    
    <div class="demo-content">
      <div class="controls" :style="{ fontSize: fontSize + 'em' }">
        <BlogPost
          v-for="post in posts"
          :key="post.id"
          :title="post.title"
          :id="post.id"
        />
      </div>
      
      <div class="actions">
        <button @click="fontSize += 0.1">Enlarge Text</button>
        <button @click="fontSize -= 0.1">Shrink Text</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.demo-container {
  padding: 20px;
}
.actions {
  margin-top: 20px;
}
button {
  margin-right: 10px;
  padding: 5px 10px;
}
</style>