const app = new Vue ({
    el: '#app',
    data: {
        database: null,
    },
    created() {
        this.getData();
    },
    methods: {
        getData() {
            //richiamo i dati dal file locale database.php
            axios.get('http://localhost/php-ajax-dischi/database.php')
            .then(response => {
                console.log(response.data);
                this.database = response.data;
            })
            .catch(err => {
                console.log(err);
            })
        }
    }
})