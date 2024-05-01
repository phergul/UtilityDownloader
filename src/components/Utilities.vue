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
        <div class="row">
            <div v-for="util in utilities" class="col-4-lg util-body">

            </div>
            <div class="util-body plus">
                <span class="plus-icon">+</span>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .util-body {
        background-color: rgb(186, 247, 247);
        display: inline-flex;
        justify-content: center;
        width: 500px;
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
        top:50%;
        vertical-align: center;
    }

</style>