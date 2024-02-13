<script>
import { store } from '../../store.js';


export default {
    name: "AppMain",
    data () {
        return {
            store,
        }
    }
}

</script>

<template>
    <section>
        <div class="container cards">
            <div class="row" v-for="film in store.movieList" :key="film.id">
                <FilmSerieTV :info="film"/>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.cards {
    background-color: red;

    display: flex;
    justify-content: center;
    gap: 20px;
    width: calc(100% / 6 - 20px);
    flex-wrap: wrap;
    margin: 20px;
    height: 50vh;
    overflow: auto;
}


</style>