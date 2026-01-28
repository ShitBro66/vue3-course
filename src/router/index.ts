import { createRouter, createWebHistory } from 'vue-router'
import MainLayout from '../layout/MainLayout.vue'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: MainLayout,
      children: [
        {
          path: '',
          name: 'home',
          component: HomeView
        },
        // Essentials
        { path: 'essentials/template-syntax', component: () => import('../views/essentials/TemplateSyntax.vue') },
        { path: 'essentials/reactivity-fundamentals', component: () => import('../views/essentials/ReactivityFundamentals.vue') },
        { path: 'essentials/computed', component: () => import('../views/essentials/ComputedDemo.vue') },
        { path: 'essentials/class-and-style', component: () => import('../views/essentials/ClassStyleDemo.vue') },
        { path: 'essentials/conditional', component: () => import('../views/essentials/ConditionalRendering.vue') },
        { path: 'essentials/list', component: () => import('../views/essentials/ListRendering.vue') },
        { path: 'essentials/event-handling', component: () => import('../views/essentials/EventHandling.vue') },
        { path: 'essentials/form-input', component: () => import('../views/essentials/FormInput.vue') },
        { path: 'essentials/lifecycle', component: () => import('../views/essentials/LifecycleHooks.vue') },
        { path: 'essentials/watchers', component: () => import('../views/essentials/WatchersDemo.vue') },
        { path: 'essentials/template-refs', component: () => import('../views/essentials/TemplateRefs.vue') },
        { path: 'essentials/component-basics', component: () => import('../views/essentials/ComponentBasics.vue') },
        
        // Components Depth
        { path: 'components/registration', component: () => import('../views/components/RegistrationDemo.vue') },
        { path: 'components/props', component: () => import('../views/components/PropsDemo.vue') },
        { path: 'components/events', component: () => import('../views/components/EventsDemo.vue') },
        { path: 'components/v-model', component: () => import('../views/components/VModelDemo.vue') },
        { path: 'components/attrs', component: () => import('../views/components/AttrsDemo.vue') },
        { path: 'components/slots', component: () => import('../views/components/SlotsDemo.vue') },
        { path: 'components/provide-inject', component: () => import('../views/components/ProvideInject.vue') },
        { path: 'components/async', component: () => import('../views/components/AsyncComponents.vue') },

        // Reusability
        { path: 'reusability/composables', component: () => import('../views/reusability/ComposablesDemo.vue') },
        { path: 'reusability/custom-directives', component: () => import('../views/reusability/CustomDirectives.vue') },
        { path: 'reusability/plugins', component: () => import('../views/reusability/PluginsDemo.vue') },

        // Built-ins
        { path: 'built-ins/transition', component: () => import('../views/built-ins/TransitionDemo.vue') },
        { path: 'built-ins/transition-group', component: () => import('../views/built-ins/TransitionGroupDemo.vue') },
        { path: 'built-ins/keep-alive', component: () => import('../views/built-ins/KeepAliveDemo.vue') },
        { path: 'built-ins/teleport', component: () => import('../views/built-ins/TeleportDemo.vue') },
        { path: 'built-ins/suspense', component: () => import('../views/built-ins/SuspenseDemo.vue') },

        // Ecosystem
        { path: 'ecosystem/pinia', component: () => import('../views/ecosystem/PiniaDemo.vue') },
      ]
    }
  ]
})

export default router