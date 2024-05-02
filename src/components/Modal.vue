<script>
export default {
    data() {
        return {
            name: "",
            url: ""
        }
    },
    methods: {
        closeModal() {
            this.$emit('close');
        }
    }
}
</script>

<template>
    <div class="backdrop" @click="closeModal">
        <div class="modal">
            <form>
                <input type="text" v-model="name" placeholder="Utility Name">
                <input type="text" v-model="url" placeholder="URL to download page">
            </form>
        </div>
    </div>
</template>

<style scoped>
.backdrop {
    top: 0px;
    position: fixed;
    background: rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 100%;
}

.modal {
    width: 500px;
    height: 300px;
    margin: 100px auto;
    background: rgb(40, 40, 40);
    border-radius: 10px;
}
</style>