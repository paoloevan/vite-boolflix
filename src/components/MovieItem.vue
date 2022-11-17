<script>
import { store } from '../store.js'

export default {
    name: 'MovieItem',
    props: {
        movie: Object
    },
    data() {
        return {
            store
        }
    }
}
</script>

<template>


    <!-- movie item -->

    <div class="col" v-if="movie.media_type !== 'person'">
        <img class="poster" :src="store.API_image + movie.poster_path" :alt="movie.title + movie.name">
        <div class="description">
            <div class="title">
                <strong>Titolo: </strong>{{ movie.name }} {{ movie.title }}
            </div>

            <div class="original_title">
                <strong>Titolo Originale: </strong>{{ movie.original_title }}{{ movie.original_name }}
            </div>

            <div class="language">
                <strong>Lingua: </strong>
                <span>
                    <!-- bandierina lingue -->
                    <img width="20"
                        :src="movie.original_language === 'en' ? '../public/Flag_of_the_United_Kingdom.svg.png' : ''"
                        alt="">
                    <img width="20" :src="movie.original_language === 'fr' ? '../public/Flag_of_France.svg.png' : ''"
                        alt="">
                    <img width="20" :src="movie.original_language === 'it' ? '../public/Flag_of_Italy.svg.png' : ''"
                        alt="">
                    <img width="20" :src="movie.original_language === 'es' ? '../public/Flag_of_Spain.svg.png' : ''"
                        alt="">
                </span>
                <span
                    v-if="movie.original_language !== 'en' && movie.original_language !== 'it' && movie.original_language !== 'es' && movie.original_language !== 'fr'">{{
                            movie.original_language
                    }}</span>
            </div>

            <div class="rating d-flex">
                <!-- stelline voto -->
                <strong class="me-1">Voto: </strong>
                <div v-for="n in store.convertRating(movie.vote_average)"><i class="fa-solid fa-star"></i></div>
                <div v-for="n in 5 - store.convertRating(movie.vote_average)"><i class="fa-regular fa-star"></i>
                </div>
            </div>

        </div>

    </div>



</template>

<style lang="scss" scoped>
.col {


    .poster {
        height: 300px;
    }
}
</style>