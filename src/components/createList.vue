<script>
import TableRow from './tableRow.vue';

export default {
    data() {
        return {
            list:[],
            listItem:''
        }
    },
    methods: {
        submitItem() {
            this.list.push(this.listItem)
        }
    }
}
</script>

<template>
<div>
    <div>
        <input v-model="listItem" type="text">
        <button @click="submitItem">Submit</button>
    </div>
    <ItemList :list="list" />
</div>
</template>
