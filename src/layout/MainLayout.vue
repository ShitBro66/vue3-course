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
      { name: '模板语法', path: '/essentials/template-syntax' },
      { name: '响应式基础', path: '/essentials/reactivity-fundamentals' },
      { name: '计算属性', path: '/essentials/computed' },
      { name: '类与样式绑定', path: '/essentials/class-and-style' },
      { name: '条件渲染', path: '/essentials/conditional' },
      { name: '列表渲染', path: '/essentials/list' },
      { name: '事件处理', path: '/essentials/event-handling' },
      { name: '表单输入绑定', path: '/essentials/form-input' },
      { name: '生命周期', path: '/essentials/lifecycle' },
      { name: '侦听器', path: '/essentials/watchers' },
      { name: '模板引用', path: '/essentials/template-refs' },
      { name: '组件基础', path: '/essentials/component-basics' },
    ]
  },
  {
    title: t('menu.components_depth'),
    items: [
      { name: '组件注册', path: '/components/registration' },
      { name: 'Props', path: '/components/props' },
      { name: '事件 (Emits)', path: '/components/events' },
      { name: '组件 v-model', path: '/components/v-model' },
      { name: '透传 Attributes', path: '/components/attrs' },
      { name: '插槽 (Slots)', path: '/components/slots' },
      { name: '依赖注入 (Provide/Inject)', path: '/components/provide-inject' },
      { name: '异步组件', path: '/components/async' },
    ]
  },
  {
    title: t('menu.reusability'),
    items: [
      { name: '组合式函数 (Composables)', path: '/reusability/composables' },
      { name: '自定义指令', path: '/reusability/custom-directives' },
      { name: '插件 (Plugins)', path: '/reusability/plugins' },
    ]
  },
  {
    title: t('menu.built_ins'),
    items: [
      { name: 'Transition', path: '/built-ins/transition' },
      { name: 'TransitionGroup', path: '/built-ins/transition-group' },
      { name: 'KeepAlive', path: '/built-ins/keep-alive' },
      { name: 'Teleport', path: '/built-ins/teleport' },
      { name: 'Suspense', path: '/built-ins/suspense' },
    ]
  },
  {
    title: t('menu.ecosystem'),
    items: [
      { name: 'Pinia 状态管理', path: '/ecosystem/pinia' },
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