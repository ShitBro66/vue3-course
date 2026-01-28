<script setup lang="ts">
import { ref, computed, reactive } from 'vue'
import { useI18n } from 'vue-i18n'
import CodeComparison from '../../components/CodeComparison.vue'

const { t } = useI18n()

// Shopping Cart Example
const cart = reactive([
  { id: 1, name: 'Vue 3 Guide', price: 29.99, quantity: 1 },
  { id: 2, name: 'TypeScript Handbook', price: 19.50, quantity: 2 }
])

const totalPrice = computed(() => {
  return cart.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2)
})

const addToCart = () => {
  cart.push({ 
    id: Date.now(), 
    name: 'New Course', 
    price: 49.99, 
    quantity: 1 
  })
}

// Writable Computed Example
const firstName = ref('John')
const lastName = ref('Doe')

const fullName = computed({
  get() {
    return firstName.value + ' ' + lastName.value
  },
  set(newValue) {
    const parts = newValue.split(' ')
    firstName.value = parts[0] ?? ''
    lastName.value = parts.length > 1 ? (parts[parts.length - 1] ?? '') : ''
  }
})

const vue2Code = `export default {
  data() {
    return {
      cart: [
        { name: 'Vue 3 Guide', price: 29.99, quantity: 1 },
        { name: 'TypeScript Handbook', price: 19.50, quantity: 2 }
      ],
      firstName: 'John',
      lastName: 'Doe'
    }
  },
  computed: {
    totalPrice() {
      return this.cart.reduce((sum, item) => {
        return sum + item.price * item.quantity
      }, 0).toFixed(2)
    },
    fullName: {
      get() {
        return this.firstName + ' ' + this.lastName
      },
      set(newValue) {
        const parts = newValue.split(' ')
        this.firstName = parts[0]
        this.lastName = parts[parts.length - 1]
      }
    }
  },
  methods: {
    addToCart() {
      this.cart.push({ name: 'New Course', price: 49.99, quantity: 1 })
    }
  }
}`

const vue3Code = `import { ref, reactive, computed } from 'vue'

const cart = reactive([
  { name: 'Vue 3 Guide', price: 29.99, quantity: 1 },
  { name: 'TypeScript Handbook', price: 19.50, quantity: 2 }
])

const totalPrice = computed(() => {
  return cart.reduce((sum, item) => {
    return sum + item.price * item.quantity
  }, 0).toFixed(2)
})

const firstName = ref('John')
const lastName = ref('Doe')

const fullName = computed({
  get() {
    return firstName.value + ' ' + lastName.value
  },
  set(newValue) {
    const parts = newValue.split(' ')
    firstName.value = parts[0]
    lastName.value = parts[parts.length - 1]
  }
})`

const templateCode = `
<div class="demo-grid">
  <section class="demo-card">
    <h2>Basic Computed (Shopping Cart)</h2>
    <div class="card-content">
      <ul class="cart-list">
        <li v-for="item in cart" :key="item.id">
          {{ item.name }} - \${{ item.price }} x {{ item.quantity }}
        </li>
      </ul>
      <p class="total">Total Price: \${{ totalPrice }}</p>
      <button @click="addToCart" class="action-btn">Add Item</button>
    </div>
  </section>

  <section class="demo-card">
    <h2>Writable Computed</h2>
    <div class="card-content">
      <div class="form-group">
        <label>Full Name:</label>
        <input v-model="fullName" class="custom-input" />
      </div>
      <p class="preview">First Name: <strong>{{ firstName }}</strong></p>
      <p class="preview">Last Name: <strong>{{ lastName }}</strong></p>
    </div>
  </section>
</div>`
</script>

<template>
  <div class="demo-container">
    <h1>{{ t('computed.title') }}</h1>
    
    <CodeComparison 
      :vue2-code="vue2Code" 
      :vue3-code="vue3Code"
      :vue2-template="templateCode"
      :vue3-template="templateCode"
    >
      <template #demo>
        <div class="demo-grid">
          <section class="demo-card">
            <h2>{{ t('computed.shopping_cart') }}</h2>
            <div class="card-content">
              <ul class="cart-list">
                <li v-for="item in cart" :key="item.id">
                  {{ item.name }} - ${{ item.price }} x {{ item.quantity }}
                </li>
              </ul>
              <p class="total">{{ t('computed.total_price') }} ${{ totalPrice }}</p>
              <button @click="addToCart" class="action-btn">{{ t('computed.add_item') }}</button>
            </div>
          </section>

          <section class="demo-card">
            <h2>{{ t('computed.writable') }}</h2>
            <div class="card-content">
              <div class="form-group">
                <label>{{ t('computed.full_name') }}</label>
                <input v-model="fullName" class="custom-input" />
              </div>
              <p class="preview">First Name: <strong>{{ firstName }}</strong></p>
              <p class="preview">Last Name: <strong>{{ lastName }}</strong></p>
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
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
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
  margin-bottom: 20px;
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

.cart-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.cart-list li {
  display: flex;
  justify-content: space-between;
  padding: 8px 0;
  border-bottom: 1px dashed var(--border-color);
}

.price {
  color: var(--text-color-secondary);
  font-family: monospace;
}

.total-row {
  display: flex;
  justify-content: space-between;
  font-weight: bold;
  font-size: 1.2rem;
  margin-top: 10px;
}

.total-price {
  color: var(--primary-color);
}

.user-display {
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 15px;
  background-color: var(--bg-color-soft);
  border-radius: 8px;
}

.avatar {
  width: 50px;
  height: 50px;
  background-color: var(--primary-color);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 1.2rem;
}

.user-info h3 {
  margin: 0;
  font-size: 1.1rem;
}

.text-muted {
  margin: 5px 0 0;
  font-size: 0.85rem;
  color: var(--text-color-secondary);
}

.input-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.custom-input {
  padding: 10px;
  border: 1px solid var(--border-color);
  border-radius: 6px;
  font-size: 1rem;
  background-color: var(--bg-color);
  color: var(--text-color);
}

.custom-input:focus {
  outline: none;
  border-color: var(--primary-color);
  box-shadow: 0 0 0 2px rgba(66, 184, 131, 0.2);
}

.action-btn {
  padding: 10px;
  background-color: var(--primary-color);
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;
  transition: background-color 0.2s;
}

.action-btn:hover {
  background-color: var(--primary-color-dark);
}
</style>