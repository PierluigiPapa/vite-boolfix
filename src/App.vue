<script>
import AppHeader from './components/Header/AppHeader.vue';
import AppMain from './components/Main/AppMain.vue';

import {store} from './store.js';
import axios from "axios";

export default {
    components: {
        AppHeader,
        AppMain,
    },
    data () {
        return {
            store,
        }
    },
    methods: {
        getFilm () {
            let api = store.apiUrl;

            if (store.searchFilm !="") {
                api = `${store.searchMovieUrl}&query=${store.searchFilm}`
            }

            axios.get (api).then (res => {
                store.movieList = res.data.results
            })
            .catch(err => {
                console.log('errore', err)
            }) 
        }
    },
    mounted () {
        this.getFilm()
    }
}

</script>

<template>
    <AppHeader @search="getFilm"></AppHeader>
    <AppMain></AppMain>
</template>

<style lang="scss">
@use "./styles/general.scss" as *;

</style>