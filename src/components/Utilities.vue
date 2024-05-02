<script>
export default {
    props: {
        utilities: {
            type: Array,
            required: true
        }
    },
    data() {
        return {
            // utilities: [],
            icon_url: "http://www.google.com/s2/favicons?sz=64&domain=",
        }
    },
    methods: {

    },
}
</script>

<template>
    <div class="container">
        <div v-for="util in utilities" class="util-body card">
            <div class="card-content">
                <div id="cssgrid">
                    <div id="div1"><span class="s1">{{ util.name }} - </span></div>
                    <div id="div2"><img height="64" width="64" :src="icon_url + util.url" /></div>
                    <div id="div3">
                        <button class="button">
                            <a :href="util.url">
                                <span class="button-content">Download Link</span>
                            </a>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
a {
    color: blue;
    text-decoration: none;
}

#css-grid {
    display: grid;
    grid-template-rows: repeat(6, 1fr);
    grid-template-columns: repeat(6, 1fr);
    gap: 0;
    width: 100%;
    height: 100%;
}

#div1 {
    grid-area: 2 / 2 / 4 / 4;
}

#div2 {
    grid-area: 2 / 4 / 4 / 6;
}

#div3 {
    grid-area: 5 / 3 / 6 / 5;
}

.s1 {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 20px;
    color: black;
    justify-content: center;
}

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

/* .plus {
    border-style: solid;
    border: 1;
    border-color: linear-gradient(43deg, #89d2ff 0%, #4996fa 46%, #8a51e5 100%);
    background-color: rgb(37, 37, 37);
}

.plus-icon {
    font-size: 100px;
    position: relative;
    top: 50%;
    vertical-align: center;
} */

.card {
    background-color: #4158D0;
    background-image: linear-gradient(43deg, #89d2ff 0%, #4996fa 46%, #8a51e5 100%);
    border-radius: 15px;
    color: white;
    overflow: hidden;
    position: relative;
    transform-style: preserve-3d;
    perspective: 1000px;
    transition: all 0.5s cubic-bezier(0.23, 1, 0.320, 1);
    cursor: pointer;
}

.card-content {
    padding: 20px;
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    gap: 10px;
    color: white;
    align-items: center;
    justify-content: center;
    text-align: center;
    height: 100%;
}

.card-content .card-title {
    font-size: 24px;
    font-weight: 700;
    color: inherit;
    text-transform: uppercase;
}

.card-content .card-para {
    color: inherit;
    opacity: 0.8;
    font-size: 14px;
}

.card:hover {
    transform: rotateY(10deg) rotateX(10deg) scale(1.05);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

.card:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(transparent, rgba(0, 0, 0, 0.1));
    transition: transform 0.5s cubic-bezier(0.23, 1, 0.320, 1);
    z-index: 1;
}

.card:hover:before {
    transform: translateX(-100%);
}

.card:after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(transparent, rgba(0, 0, 0, 0.1));
    transition: transform 0.5s cubic-bezier(0.23, 1, 0.320, 1);
    z-index: 1;
}

.card:hover:after {
    transform: translateX(100%);
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
    z-index: 1;
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