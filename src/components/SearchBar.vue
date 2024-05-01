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
    <div class="input-wrapper">
        <input v-model="query" placeholder="Search for a utility here..." class="left form-control me-2 center">
        <button @click="sendQuery()" class="right btn btn-outline-danger center">Search</button>
    </div>
</template>

<style scoped>
    .input-wrapper {
        display: inline-flex;
    }
    .left {
        float: left;
    }

    .right {
        float: right;
    }
</style>