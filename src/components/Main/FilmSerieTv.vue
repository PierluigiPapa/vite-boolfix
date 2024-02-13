<script>
export default {
    name: "FilmSerieTv",
    props: ['info'],
    data () {
        return {
            hover: false,
            flags: [
                {
                    img: 'img/france.png',
                    lang: "fr"
                },

                {
                    img: 'img/german-flag.png',
                    lang: "de"
                },

                {
                    img: 'img/italy.png',
                    lang: "it"
                },

                {
                    img: 'img/united-kingdom.png',
                    lang: "en"
                },

                {
                    img: 'img/spain.png',
                    lang: "es"
                },
                
                {
                    img: 'img/unflag.png',
                    lang: ""
                },
            ]
        }
    }
}

</script>

<template>
   
</template>

<style lang="scss" scoped>


</style>

