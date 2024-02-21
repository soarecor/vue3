<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { ref } from 'vue'
import Form from './components/form.vue'
import Table from './components/table.vue'
import CreateList from './components/createList.vue'

</script>

<template>
  <div class="app">
    <CreateList/>
  </div>
</template>

<style>
.app {
  width: 100%;
}
</style>
