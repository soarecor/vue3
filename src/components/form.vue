<script setup>
import { ref, computed, reactive, onMounted } from 'vue'

const username = ref('')
const password = ref('')
let submitting = ref(false)
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

const complete = computed(() => {
  return username.value.includes('@') && password.value.length > 6
})

const submitCreds = async e => {
  console.log(e)
  submitting.value = true
  await setTimeout(() => {
    submitting.value = false
  }, 4000)
}
</script>
<template>
  <div class="form-style">
    <div>
      <label for="">USERNAME</label>
      <input v-model="username" type="text" />
    </div>

    <div>
      <label for="">PASSWORD</label>
      <input v-model="password" type="text" />
    </div>

    <button @click="submitCreds" :disabled="!complete || submitting">Submit</button>
  </div>
</template>

<style scoped>
.form-style {
  display: block;
  text-align: center;
}
</style>

// //
<script>
// export default {
//   data() {
//     return {
//       username: '',
//       password: '',
//       submitting: false
//     }
//   },
//   computed: {
//     complete() {
//       return this.username.includes('@') && this.password.length > 6
//     }
//   },
//   methods: {
//     async submitCreds() {
//       this.submitting = true
//       await setTimeout(() => {
//         this.submitting = false
//       }, 4000)
//     }
//   }
// }
//
</script>
