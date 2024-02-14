<script>
export default {
    name: 'SingleFilm',
    props: ['info'],
    data() {
        return {
            hover: false,
        }
    },
    computed: {
        flagUrl() {
            console.log("Lingua originale del film:", this.info.original_language);
            const languageCode = this.info.original_language.toLowerCase();
            const flag = this.flags.find(flag => flag.lang === languageCode);
            if (flag) {
                return `${this.flagBaseUrl}${languageCode}.png`;
            } else {
                return `${this.flagBaseUrl}unknown.png`;
            }
        },
        rateFilm() {
            return Math.round(this.info.vote_average / 2);
        }
    }
}   
</script>

<template>
    <div class="cards-hover">
        <img :src="`https://image.tmdb.org/t/p/w342/${info.poster_path}`" alt="">

        <div class="details">
            <div>
                <span>
                    <strong>Titolo:</strong>
                    {{ info.title }}
                </span>
            </div>
            <div>
                <strong>Titolo Originale:</strong>
                {{ info.original_title }}
            </div>

            <div class="flags">
                <span>Lingua originale:</span>
                <span :class="`lang-icon lang-icon-${info.original_language}`"></span>
            </div>

            <div class="stars">
                <span>Voto:</span>

                <div v-for="star in rateFilm">
                    <font-awesome-icon icon="fa-solid fa-star" class="yellowstar" />
                </div>

                <div v-for="star in 5 - rateFilm">
                    <font-awesome-icon icon="fa-solid fa-star" class="blackstar" />
                </div>
            </div>

            <div class="my-5">
                <strong>Descrizione:</strong>
                {{ info.overview }}
            </div>
        </div>

    </div>
</template>

<style lang="scss">
.cards-hover {
    position: relative;
}

.stars {
    display: flex;

    .yellowstar {
        color: yellow;
    }

    .blackstar {
        color: lightgrey;
    }
}

.details {
    width: 100%;
    height: 100%;
    display: none;
    position: absolute;
    background-color: rgba(0, 0, 0, 0.439);
    color: white;
    top: 0;
    left: 0;
    padding: 30px;
    overflow: auto;
}

.cards-hover:hover .details {
    display: block;
}

.flags {
    margin-top: 20px;
    margin-bottom: 20px;

    .lang-icon {
        margin-bottom: -3px;
        margin-left: 5px;
        box-shadow: 11px 9px 15px 0px rgba(0,0,0,0.75);
    }

    img {
        margin-left: 10px;
        width: 30px;
    }
}
</style>