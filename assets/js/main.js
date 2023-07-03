const { createApp } = Vue

createApp({
    data() {
        return {


        }
    },
    methods: {


    },
    mounted() {


        axios.get(this.requestPath).then((risposta) => {
            this.pokemon = risposta.data;
        })
    }
}).mount('#app')