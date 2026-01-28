<script setup lang="ts">
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import CodeComparison from '../../components/CodeComparison.vue'

const { t } = useI18n()

const items = ref([
  { id: 1, message: 'Learn Vue 3', done: true },
  { id: 2, message: 'Build something awesome', done: false }
])

const myObject = ref({
  title: 'Vue 3 Course',
  author: 'ShitBro66',
  publishedAt: '2025-01-01'
})

const newItem = ref('')
const addItem = () => {
  if (newItem.value.trim()) {
    items.value.push({
      id: Date.now(),
      message: newItem.value,
      done: false
    })
    newItem.value = ''
  }
}

const activeItems = computed(() => {
  return items.value.filter(item => !item.done)
})

const vue2Code = `export default {
  data() {
    return {
      items: [
        { id: 1, message: 'Learn Vue 3', done: true },
        { id: 2, message: 'Build something awesome', done: false }
      ],
      myObject: {
        title: 'Vue 3 Course',
        author: 'ShitBro66',
        publishedAt: '2025-01-01'
      },
      newItem: ''
    }
  },
  computed: {
    activeItems() {
      return this.items.filter(item => !item.done)
    }
  },
  methods: {
    addItem() {
      if (this.newItem.trim()) {
        this.items.push({
          id: Date.now(),
          message: this.newItem,
          done: false
        })
        this.newItem = ''
      }
    }
  }
}`

const vue3Code = `import { ref, computed } from 'vue'

const items = ref([
  { id: 1, message: 'Learn Vue 3', done: true },
  { id: 2, message: 'Build something awesome', done: false }
])

const myObject = ref({
  title: 'Vue 3 Course',
  author: 'ShitBro66',
  publishedAt: '2025-01-01'
})

const newItem = ref('')
const addItem = () => {
  if (newItem.value.trim()) {
    items.value.push({
      id: Date.now(),
      message: newItem.value,
      done: false
    })
    newItem.value = ''
  }
}

const activeItems = computed(() => {
  return items.value.filter(item => !item.done)
})`

const templateCode = `
<div class="demo-grid">
  <section class="demo-card">
    <h2>Todo List (v-for)</h2>
    <div class="card-content">
      <div class="add-item">
        <input 
          v-model="newItem" 
          @keyup.enter="addItem"
          placeholder="Add a new task..."
          class="custom-input"
        />
        <button @click="addItem" class="action-btn">Add</button>
      </div>
      
      <ul class="todo-list">
        <li v-for="item in items" :key="item.id" :class="{ done: item.done }">
          <label class="checkbox-label">
            <input type="checkbox" v-model="item.done">
            <span>{{ item.message }}</span>
          </label>
          <button @click="items = items.filter(i => i.id !== item.id)" class="delete-btn">×</button>
        </li>
      </ul>
      
      <div class="stats">
        <span>{{ activeItems.length }} items left</span>
      </div>
    </div>
  </section>

  <section class="demo-card">
    <h2>Object Loop</h2>
    <div class="card-content">
      <div class="object-display">
        <div v-for="(value, key, index) in myObject" :key="key" class="object-row">
          <span class="key-badge">{{ index }}. {{ key }}</span>
          <span class="value-text">{{ value }}</span>
        </div>
      </div>
    </div>
  </section>

  <section class="demo-card">
    <h2>Range Loop (Pagination UI)</h2>
    <div class="card-content centered">
      <div class="pagination">
        <button class="page-btn">&lt;</button>
        <button 
          v-for="n in 5" 
          :key="n" 
          class="page-btn" 
          :class="{ active: n === 1 }"
        >
          {{ n }}
        </button>
        <button class="page-btn">&gt;</button>
      </div>
    </div>
  </section>
</div>`
</script>

<template>
  <div class="demo-container">
    <h1>{{ t('list.title') }}</h1>

    <CodeComparison 
      :vue2-code="vue2Code" 
      :vue3-code="vue3Code"
      :vue2-template="templateCode"
      :vue3-template="templateCode"
    >
      <template #demo>
        <div class="demo-grid">
          <section class="demo-card">
            <h2>{{ t('list.todo_list') }}</h2>
            <div class="card-content">
              <div class="add-item">
                <input 
                  v-model="newItem" 
                  @keyup.enter="addItem"
                  :placeholder="t('list.add_placeholder')"
                  class="custom-input"
                />
                <button @click="addItem" class="action-btn">{{ t('list.add_btn') }}</button>
              </div>
              
              <ul class="todo-list">
                <li v-for="item in items" :key="item.id" :class="{ done: item.done }">
                  <label class="checkbox-label">
                    <input type="checkbox" v-model="item.done">
                    <span>{{ item.message }}</span>
                  </label>
                  <button @click="items = items.filter(i => i.id !== item.id)" class="delete-btn">×</button>
                </li>
              </ul>
              
              <div class="stats">
                <span>{{ activeItems.length }} {{ t('list.items_left') }}</span>
              </div>
            </div>
          </section>

          <section class="demo-card">
            <h2>{{ t('list.object_loop') }}</h2>
            <div class="card-content">
              <div class="object-display">
                <div v-for="(value, key, index) in myObject" :key="key" class="object-row">
                  <span class="key-badge">{{ index }}. {{ key }}</span>
                  <span class="value-text">{{ value }}</span>
                </div>
              </div>
            </div>
          </section>

          <section class="demo-card">
            <h2>{{ t('list.range_loop') }}</h2>
            <div class="card-content centered">
              <div class="pagination">
                <button class="page-btn">&lt;</button>
                <button 
                  v-for="n in 5" 
                  :key="n" 
                  class="page-btn" 
                  :class="{ active: n === 1 }"
                >
                  {{ n }}
                </button>
                <button class="page-btn">&gt;</button>
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
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
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

.card-content.centered {
  align-items: center;
}

.add-item {
  display: flex;
  gap: 10px;
}

.custom-input {
  flex: 1;
  padding: 8px 12px;
  border: 1px solid var(--border-color);
  border-radius: 6px;
  background-color: var(--bg-color);
  color: var(--text-color);
}

.action-btn {
  padding: 8px 16px;
  background-color: var(--primary-color);
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}

.todo-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.todo-list li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid var(--border-color);
  transition: all 0.2s;
}

.todo-list li.done span {
  text-decoration: line-through;
  color: var(--text-color-secondary);
}

.checkbox-label {
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  flex: 1;
}

.delete-btn {
  background: none;
  border: none;
  color: #f56c6c;
  font-size: 1.2rem;
  cursor: pointer;
  padding: 0 5px;
}

.stats {
  font-size: 0.9rem;
  color: var(--text-color-secondary);
  text-align: right;
}

.object-row {
  display: flex;
  justify-content: space-between;
  padding: 8px;
  background-color: var(--bg-color-soft);
  margin-bottom: 5px;
  border-radius: 4px;
}

.key-badge {
  background-color: var(--primary-color);
  color: white;
  padding: 2px 6px;
  border-radius: 4px;
  font-size: 0.85rem;
}

.pagination {
  display: flex;
  gap: 5px;
}

.page-btn {
  width: 36px;
  height: 36px;
  border: 1px solid var(--border-color);
  background-color: var(--bg-color);
  color: var(--text-color);
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

.page-btn.active {
  background-color: var(--primary-color);
  color: white;
  border-color: var(--primary-color);
}

.page-btn:hover:not(.active) {
  background-color: var(--bg-color-soft);
}
</style>