<script setup lang="ts">
import { ref } from 'vue'
import BlogPost from '../../components/demos/BlogPost.vue'
import CodeComparison from '../../components/CodeComparison.vue'

const posts = ref([
  { id: 1, title: 'My journey with Vue' },
  { id: 2, title: 'Blogging with Vue' },
  { id: 3, title: 'Why Vue is so fun' }
])

const fontSize = ref(1)

const vue2Code = `export default {
  components: { BlogPost },
  data() {
    return {
      posts: [
        { id: 1, title: 'My journey with Vue' },
        { id: 2, title: 'Blogging with Vue' },
        { id: 3, title: 'Why Vue is so fun' }
      ],
      fontSize: 1
    }
  }
}`

const vue3Code = `import { ref } from 'vue'
import BlogPost from './BlogPost.vue'

const posts = ref([
  { id: 1, title: 'My journey with Vue' },
  { id: 2, title: 'Blogging with Vue' },
  { id: 3, title: 'Why Vue is so fun' }
])

const fontSize = ref(1)`
</script>

<template>
  <div class="demo-container">
    <h1>Props Demo</h1>
    
    <CodeComparison :vue2-code="vue2Code" :vue3-code="vue3Code">
      <template #demo>
        <div class="demo-grid">
          <section class="demo-card">
            <h2>Blog Feed</h2>
            <div class="card-content">
              <div class="controls">
                <button @click="fontSize += 0.1" class="action-btn">Enlarge Text</button>
                <button @click="fontSize -= 0.1" class="action-btn secondary">Shrink Text</button>
              </div>
              
              <div class="feed" :style="{ fontSize: fontSize + 'em' }">
                <BlogPost
                  v-for="post in posts"
                  :key="post.id"
                  :title="post.title"
                  :id="post.id"
                />
              </div>
            </div>
          </section>
        </div>
      </template>
    </CodeComparison>
  </div>
</template>

<style scoped>
.demo-container {
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
}

.demo-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
}

.demo-card {
  border: 1px solid var(--border-color);
  border-radius: 12px;
  padding: 20px;
  background-color: var(--bg-color);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

h2 {
  margin-top: 0;
  margin-bottom: 15px;
  font-size: 1.2rem;
  color: var(--text-color);
  border-bottom: 1px solid var(--border-color);
  padding-bottom: 10px;
}

.card-content {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.controls {
  display: flex;
  gap: 10px;
}

.feed {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.action-btn {
  padding: 8px 16px;
  background-color: var(--primary-color);
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;
  transition: opacity 0.2s;
}

.action-btn:hover {
  opacity: 0.9;
}

.action-btn.secondary {
  background-color: #606266;
}
</style>