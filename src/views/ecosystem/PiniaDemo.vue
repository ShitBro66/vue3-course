<script setup lang="ts">
import { useCounterStore } from '../../stores/counter'
import { useI18n } from 'vue-i18n'
import CodeComparison from '../../components/CodeComparison.vue'

const { t } = useI18n()
const counter = useCounterStore()

const vue2Code = `// Vuex Store (store.js)
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0
  },
  getters: {
    doubleCount: state => state.count * 2
  },
  mutations: {
    increment(state) {
      state.count++
    }
  }
})

// Usage in Component
import { mapState, mapActions } from 'vuex'

export default {
  computed: {
    ...mapState(['count']),
    ...mapGetters(['doubleCount'])
  },
  methods: {
    ...mapMutations(['increment'])
  }
}`

const vue3Code = `// Pinia Store (stores/counter.js)
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }

  return { count, doubleCount, increment }
})

// Usage in Component
import { useCounterStore } from '@/stores/counter'
const counter = useCounterStore()`

const templateCode = `
<div class="counter-box">
  <p>Count: <strong>{{ counter.count }}</strong></p>
  <p>Double: <strong>{{ counter.doubleCount }}</strong></p>
  
  <div class="actions">
    <button @click="counter.increment">Increment</button>
    <button @click="counter.reset">Reset</button>
  </div>
</div>`
</script>

<template>
  <div class="demo-container">
    <h1>{{ t('pinia.title') }}</h1>
    
    <CodeComparison 
      :vue2-code="vue2Code" 
      :vue3-code="vue3Code"
      :vue3-template="templateCode"
    >
      <template #demo>
        <div class="demo-content">
          <p>{{ t('pinia.intro') }}</p>
          
          <div class="counter-box">
            <p>{{ t('pinia.count') }} <strong>{{ counter.count }}</strong></p>
            <p>{{ t('pinia.double_count') }} <strong>{{ counter.doubleCount }}</strong></p>
            
            <div class="actions">
              <button @click="counter.increment">{{ t('pinia.increment') }}</button>
              <button @click="counter.reset">{{ t('pinia.reset') }}</button>
            </div>
          </div>

          <div class="info">
            <p>{{ t('pinia.persistence_hint') }}</p>
          </div>
        </div>
      </template>
    </CodeComparison>
  </div>
</template>

<style scoped>
.demo-container {
  padding: 20px;
}
.counter-box {
  border: 1px solid #ccc;
  padding: 20px;
  border-radius: 8px;
  margin-top: 20px;
  max-width: 400px;
}
.actions {
  margin-top: 15px;
}
button {
  margin-right: 10px;
  padding: 8px 16px;
  background-color: #42b883;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  button:hover {
  background-color: #3aa876;
}
}
.info {
  margin-top: 20px;
  color: #666;
  font-size: 0.9em;
}
</style>