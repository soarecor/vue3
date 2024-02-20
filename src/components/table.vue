<script setup>
import { ref, computed, reactive, onMounted } from 'vue'
import TableRow from './tableRow.vue'

const dataRow = ref([])

onMounted(async () => {
  try {
    const response = await fetch('https://reqres.in/api/users?page=1')
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }
    const data = await response.json()

    dataRow.value = [...data.data]
    console.log(dataRow)
    return data
  } catch (error) {
    console.error('Error fetching data:', error)
    return null
  }
})
</script>
<template>
  <div>
    <div v-for="data in dataRow" :key="data.id">
      <TableRow :data="data" />
    </div>
  </div>
</template>

<style scoped></style>
