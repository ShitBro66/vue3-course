<script setup lang="ts">
import AttrButton from '../../components/demos/AttrButton.vue'

const onClick = () => {
  alert('Clicked!')
}
</script>

<template>
  <div class="demo-container">
    <h1>透传 Attributes (Fallthrough Attributes)</h1>

    <div class="demo-content">
      <p>Passing <code>class</code>, <code>style</code>, and <code>@click</code> to the child component.</p>
      
      <AttrButton
        class="large-btn"
        style="background-color: #35495e"
        @click="onClick"
      />
    </div>
  </div>
</template>

<style scoped>
.demo-container {
  padding: 20px;
}
</style>