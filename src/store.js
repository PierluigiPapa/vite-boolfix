import {reactive} from 'vue';

export const store = reactive({
    movieList: [],
    apiUrl: 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=it-IT&page=1&sort_by=popularity.desc&api_key=9711d2b2e34497ce2672c19925f1edf1',
    searchFilm: '',
    searchMovieUrl: 'https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc&api_key=9711d2b2e34497ce2672c19925f1edf1',
})