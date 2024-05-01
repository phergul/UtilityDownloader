<script setup>
    import Navbar from './components/Navbar.vue';
    import SearchBar from './components/SearchBar.vue';
import Utilities from './components/Utilities.vue';
</script>

<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-sm-12">
                <Navbar />
            </div>
        </div>
        <div class="row">
            <div class="col-sm-12">
               <SearchBar />
            </div>
        </div>
        <div class="row">
            <div class="col-sm-12">
               <Utilities />
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>
