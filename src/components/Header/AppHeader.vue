<script>
import { store } from '../../store.js';

export default {
    name: 'AppHeader',
    props: ["title"],
    data () {
        return {
            store,
            toggle: false
        }
    },
}

</script>

<template>
    <header class="d-flex justify-content-between">
        <div class="header-nav">
            <img class="bool-logo" src="../../assets/img/Boolflix.png" alt="">

            <nav>
                <a href="">Home</a>
                <a href="">Serie Tv</a>
                <a href="">Film</a>
                <a href="">Nuovi e popolari</a>
                <a href="">La mia lista</a>
                <a href="">Categorie</a>
            </nav>
        </div>

        <div class="search-bar">
            <button class="button-search" type="submit" @click.prevent="$emit('search')">
                <font-awesome-icon icon="fas fa-search"/>
            </button>
            <input class="search-input" type="text" v-model="store.searchFilm" @keyup.enter="$emit('search')" placeholder="Cerca un film o una serie tv">
        </div>
    </header>
</template>

<style lang="scss" scoped>
    header {
        height: 10vh;

        .header-nav {
            width: 70%;
            gap: 20px;
            display: flex;
            margin: 20px;
            align-items: center;

            nav {
                display: flex;
                gap: 20px;
                align-items: center;
            }
        }

        .bool-logo {
            width: 10%;
            cursor: pointer;
        }

        .search-bar {
            display: flex;
            gap: 10px;
            align-items: center;
            margin: 20px;
            &:hover>.search-input {
                width: 240px;
                padding: 0 5px;
            }
        }

        .button-search {
            border: none;
            color: white;
            background: none;
        }

        .search-input {
            border: 1px solid white;
            color: white;
            background: none;
            transition: 0.5s;
            width: 0px;
            padding: 0px;
        }
    }
</style>