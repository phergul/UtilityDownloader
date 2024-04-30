<script setup>
    import { RouterLink, RouterView } from 'vue-router';
    import Navbar from './components/Navbar.vue';
    import SearchBar from './components/SearchBar.vue';
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
    </div>
</template>

<style scoped>

#app {
    width: 100%;
    margin: 0;
    padding: 0;
    justify-content: center;
}

.container-fluid {
    /* width: 100%; */
    margin: 0;
    padding: 0;
}

.row, .col {
    width: 100%;
    border: 1px;
    border-color: black;
    border-style: solid;
}

.col-sm-12 {
    justify-content: center;
}

</style>
