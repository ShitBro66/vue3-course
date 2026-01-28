<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import CodeComparison from '../../components/CodeComparison.vue'

const { t } = useI18n()
const show = ref(true)

const vue2Code = `<script>
export default {
  data() {
    return {
      show: true
    }
  }
}
<\/script>`

const vue2Template = `<transition name="fade">
  <p v-if="show">hello</p>
</transition>

<style>
/* Vue 2 Classes */
.fade-enter, .fade-leave-to {
  opacity: 0;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
</style>`

const vue3Code = `<script setup>
import { ref } from 'vue'
const show = ref(true)
<\/script>`

const vue3Template = `<Transition name="fade">
  <p v-if="show">hello</p>
</Transition>

<style>
/* Vue 3 Classes (enter -> enter-from) */
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
</style>`
</script>

<template>
  <div class="demo-container">
    <h1>{{ t('transition.title') }}</h1>

    <CodeComparison 
      :vue2-code="vue2Code" 
      :vue3-code="vue3Code"
      :vue2-template="vue2Template"
      :vue3-template="vue3Template"
    >
      <template #demo>
        <div class="demo-grid">
          <section class="demo-card">
            <h2>{{ t('transition.css_transitions') }}</h2>
            <div class="card-content centered">
              <button @click="show = !show" class="action-btn">
                {{ t('transition.toggle') }}
              </button>
              
              <div class="transition-area">
                <div class="transition-box">
                  <h3>{{ t('transition.fade') }}</h3>
                  <Transition name="fade">
                    <p v-if="show" class="box">{{ t('transition.fade_me') }}</p>
                  </Transition>
                </div>

                <div class="transition-box">
                  <h3>{{ t('transition.slide_fade') }}</h3>
                  <Transition name="slide-fade">
                    <p v-if="show" class="box secondary">{{ t('transition.slide_me') }}</p>
                  </Transition>
                </div>
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

.card-content.centered {
  align-items: center;
}

.action-btn {
  padding: 10px 20px;
  background-color: var(--primary-color);
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 1rem;
  margin-bottom: 20px;
}

.transition-area {
  display: flex;
  gap: 40px;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
}

.transition-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 150px;
  height: 150px;
}

.transition-box h3 {
  font-size: 1rem;
  margin-bottom: 10px;
  color: var(--text-light);
}

.box {
  padding: 20px;
  background-color: var(--primary-color);
  color: white;
  border-radius: 8px;
  font-weight: bold;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.box.secondary {
  background-color: var(--secondary-color);
}

/* fade */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* slide-fade */
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
