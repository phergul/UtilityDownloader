<script>
import Modal from './Modal.vue';

export default {
    components: { Modal },
    data() {
        return {
            query: '',
        }
    },
    methods: {
        sendQuery() {
            console.log(this.query);
        },
        openModal() {
            this.$emit('open');
        }
    }
}
</script>


<template>
    <div class="input-wrapper">
        <button @click="openModal()" class="button">
            <span class="button-content">Create</span>
        </button>
        <input v-model="query" placeholder="Search for a utility here..." class="input">
        <button @click="sendQuery()" class="button">
            <span class="button-content">Search</span>
        </button>
    </div>
</template>

<style scoped>
.input-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 8px;
}

.input {
    border: 2px solid transparent;
    width: 15em;
    height: 2.5em;
    padding-left: 0.8em;
    outline: none;
    overflow: hidden;
    background-color: #F3F3F3;
    border-radius: 10px;
    transition: all 0.5s;
    margin-right: 5px;
    margin-left: 5px;
}

.input:hover,
.input:focus {
    border: 2px solid #4A9DEC;
    box-shadow: 0px 0px 0px 7px rgb(74, 157, 236, 20%);
    background-color: white;
}


/* .button {
    margin-left: 5px;
    margin-right: 5px;
    position: relative;
    overflow: hidden;
    height: 2rem;
    padding: 0 2rem;
    border-radius: 1.5rem;
    background: #3d3a4e;
    background-size: 400%;
    color: #fff;
    border: none;
    cursor: pointer;
}

.button:hover::before {
    transform: scaleX(1);
}

.button-content {
    position: relative;
    /* z-index: 1; 
}

.button::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    transform: scaleX(0);
    transform-origin: 0 50%;
    width: 100%;
    height: inherit;
    border-radius: inherit;
    background: linear-gradient(82.3deg,
            rgb(54, 174, 249) 10.8%,
            rgb(142, 234, 255) 94.3%);
    transition: all 0.475s;
} */
</style>