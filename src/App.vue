<script>
import Navbar from './components/Navbar.vue';
import SearchBar from './components/SearchBar.vue';
import Utilities from './components/Utilities.vue';
import Modal from './components/Modal.vue';

export default {
    name: 'App',
    data() {
        return {
            modalOpen: false,
        }
    },
    components: {
        Navbar,
        SearchBar,
        Utilities,
        Modal
    },
    methods: {
        toggleModal() {
            this.modalOpen = !this.modalOpen;
        }
    }
}
</script>

<template>
    <div class="container">
        <div v-if="modalOpen">
            <Modal @close="toggleModal"/>
        </div>
        <div>
            <Navbar />
        </div>
        <div>
            <SearchBar @open="toggleModal"/>
        </div>
        <div>
            <Utilities />
        </div>
    </div>
</template>

<style scoped>
.container {
    display: grid;
}
</style>
