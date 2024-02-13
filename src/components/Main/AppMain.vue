<script>
import { store } from '../../store.js';
import FilmSerieTv from './FilmSerieTv.vue';

export default {
    name: 'AppMain',
    components: {
    FilmSerieTv,
},
    data() {
        return {
            store,
        }
    },
}
</script>

<template>
    <section>
        <div class="container cards "> <!-- to add d-flex % flex wrap -->
            <div class="row" v-for="film in store.movieList" :key="film.id">
                <FilmSerieTv :info="film" />
            </div>
        </div>
    </section>
</template>

<style lang="scss">

.cards {
    display: flex;
    justify-content: center;
    gap: 1.25rem;
    width: calc(100% / 6 - 20px);
    flex-wrap: wrap;
    height: 90vh;
    overflow: auto;
}
</style>