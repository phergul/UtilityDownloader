<script setup>
import Navbar from './components/Navbar.vue';
import SearchBar from './components/SearchBar.vue';
import Utilities from './components/Utilities.vue';
</script>

<template>
    <div class="container">
        <div>
            <Navbar />
        </div>
        <div>
            <SearchBar />
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
