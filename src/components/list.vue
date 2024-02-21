<template>
    <div v-for="item in list" :key="item">{{ item }}</div>
</template>
  
<script>
export default {
name: 'ItemList',
props: {
    list: {
    type: Array,
    default: () => []
    }
}
}
</script>
  