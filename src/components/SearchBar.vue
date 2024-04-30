<script>
    export default {
        data() {
            return {
                query: '',
            }
        },
        methods: {
            sendQuery() {
                console.log(this.query);
            }
        }
    }
</script>


<template>
    <div>
        <input v-model="query" placeholder="Search for a utility here..." class="form-control me-2 center">
        <button @click="sendQuery()" class="btn btn-outline-danger center">Search</button>
    </div>
</template>

<style scoped>
    div {
        display: flex;
        justify-content: center ;
        margin: 30px;
        align-items: center;
    }

    input {
        width: 30%;
    }
</style>