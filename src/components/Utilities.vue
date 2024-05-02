<script>
export default {
    data() {
        return {
            utilities: [1, 2],
        }
    },
    methods: {

    },
}
</script>

<template>
    <div class="container">
        <div v-for="util in utilities" class="util-body">

        </div>
        <div class="util-body plus">
            <!-- <span class="plus-icon">+</span> -->
        </div>
    </div>
</template>

<style scoped>
.container {
    display: grid;
    grid-template-columns: repeat(3, 505px);
    grid-template-rows: 1fr 1fr;
    justify-content: center;
}

@media screen and (max-width: 768px) {
  .container {
      grid-template-columns: 1fr;
      grid-template-rows: 1fr;
   }
}

.util-body {
    background-color: rgb(186, 247, 247);
    /* width: 500px; */
    min-width: 200px;
    height: 300px;
    border-radius: 15px;
    margin: 40px;
}

.plus {
    border-style: solid;
    border: 1;
    border-color: rgb(186, 247, 247);
    background-color: rgb(37, 37, 37);
}

.plus-icon {
    font-size: 100px;
    position: relative;
    top: 50%;
    vertical-align: center;
}
</style>