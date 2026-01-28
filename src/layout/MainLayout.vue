<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { useTheme } from '../composables/useTheme'
import { computed } from 'vue'

const { t, locale } = useI18n()
const { isDark, toggleTheme } = useTheme()

const toggleLanguage = () => {
  locale.value = locale.value === 'zh' ? 'en' : 'zh'
}

const menuGroups = computed(() => [
  {
    title: t('menu.essentials'),
    items: [
      { name: t('routes.template_syntax'), path: '/essentials/template-syntax' },
      { name: t('routes.reactivity'), path: '/essentials/reactivity-fundamentals' },
      { name: t('routes.computed'), path: '/essentials/computed' },
      { name: t('routes.class_style'), path: '/essentials/class-and-style' },
      { name: t('routes.conditional'), path: '/essentials/conditional' },
      { name: t('routes.list'), path: '/essentials/list' },
      { name: t('routes.events'), path: '/essentials/event-handling' },
      { name: t('routes.form'), path: '/essentials/form-input' },
      { name: t('routes.lifecycle'), path: '/essentials/lifecycle' },
      { name: t('routes.watchers'), path: '/essentials/watchers' },
      { name: t('routes.template_refs'), path: '/essentials/template-refs' },
      { name: t('routes.component_basics'), path: '/essentials/component-basics' },
    ]
  },
  {
    title: t('menu.components_depth'),
    items: [
      { name: t('routes.registration'), path: '/components/registration' },
      { name: t('routes.props'), path: '/components/props' },
      { name: t('routes.emits'), path: '/components/events' },
      { name: t('routes.v_model'), path: '/components/v-model' },
      { name: t('routes.attrs'), path: '/components/attrs' },
      { name: t('routes.slots'), path: '/components/slots' },
      { name: t('routes.provide_inject'), path: '/components/provide-inject' },
      { name: t('routes.async_components'), path: '/components/async' },
    ]
  },
  {
    title: t('menu.reusability'),
    items: [
      { name: t('routes.composables'), path: '/reusability/composables' },
      { name: t('routes.directives'), path: '/reusability/custom-directives' },
      { name: t('routes.plugins'), path: '/reusability/plugins' },
    ]
  },
  {
    title: t('menu.built_ins'),
    items: [
      { name: t('routes.transition'), path: '/built-ins/transition' },
      { name: t('routes.transition_group'), path: '/built-ins/transition-group' },
      { name: t('routes.keep_alive'), path: '/built-ins/keep-alive' },
      { name: t('routes.teleport'), path: '/built-ins/teleport' },
      { name: t('routes.suspense'), path: '/built-ins/suspense' },
    ]
  },
  {
    title: t('menu.ecosystem'),
    items: [
      { name: t('routes.pinia'), path: '/ecosystem/pinia' },
    ]
  }
])
</script>

<template>
  <div class="app-container">
    <aside class="sidebar">
      <div class="logo">
        <router-link to="/" style="color: inherit; text-decoration: none;">Vue 3 Course</router-link>
      </div>
      
      <div class="settings">
        <button @click="toggleTheme" class="icon-btn" :title="t('common.toggle_theme')">
          {{ isDark ? '🌞' : '🌙' }}
        </button>
        <button @click="toggleLanguage" class="icon-btn" :title="t('common.language')">
          {{ locale === 'zh' ? 'EN' : '中文' }}
        </button>
      </div>

      <nav>
        <div v-for="(group, index) in menuGroups" :key="index" class="menu-group">
          <h3>{{ group.title }}</h3>
          <ul>
            <li v-for="item in group.items" :key="item.path">
              <router-link :to="item.path">{{ item.name }}</router-link>
            </li>
          </ul>
        </div>
      </nav>
    </aside>
    <main class="content">
      <router-view />
    </main>
  </div>
</template>

<style scoped>
.app-container {
  display: flex;
  height: 100vh;
}
.sidebar {
  width: 260px;
  background-color: var(--sidebar-bg, #f8f9fa);
  border-right: 1px solid var(--border-color, #ddd);
  overflow-y: auto;
  padding: 20px;
  flex-shrink: 0;
  transition: background-color 0.3s, border-color 0.3s;
}
.logo {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 20px;
  color: #42b883;
}
.settings {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}
.icon-btn {
  background: none;
  border: 1px solid var(--border-color, #ddd);
  border-radius: 4px;
  cursor: pointer;
  padding: 5px 10px;
  font-size: 1.2rem;
}
.menu-group h3 {
  font-size: 1rem;
  margin-top: 15px;
  margin-bottom: 8px;
  color: var(--text-color, #333);
}
.menu-group ul {
  list-style: none;
  padding: 0;
}
.menu-group li {
  margin-bottom: 4px;
}
.menu-group a {
  text-decoration: none;
  color: var(--text-color-secondary, #666);
  display: block;
  padding: 5px 8px;
  border-radius: 4px;
  transition: background-color 0.2s;
}
.menu-group a:hover, .menu-group a.router-link-active {
  background-color: var(--hover-bg, #e2e6ea);
  color: #42b883;
}
.content {
  flex: 1;
  padding: 40px;
  overflow-y: auto;
  background-color: var(--bg-color, #ffffff);
  color: var(--text-color, #213547);
}
</style>