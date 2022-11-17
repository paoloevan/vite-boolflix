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
    <li v-if="movie.media_type !== 'person'">
        <img :src="store.API_image + movie.poster_path" :alt="movie.title + movie.name">
        Titolo: {{ movie.name }} {{ movie.title }},
        Titolo
        originale: {{
                movie.original_title
        }}{{ movie.original_name }}, lingua
        originale:
        <span>
            <!-- bandierina lingue -->
            <img width="20"
                :src="movie.original_language === 'en' ? '../public/Flag_of_the_United_Kingdom.svg.png' : ''" alt="">
            <img width="20" :src="movie.original_language === 'fr' ? '../public/Flag_of_France.svg.png' : ''" alt="">
            <img width="20" :src="movie.original_language === 'it' ? '../public/Flag_of_Italy.svg.png' : ''" alt="">
            <img width="20" :src="movie.original_language === 'es' ? '../public/Flag_of_Spain.svg.png' : ''" alt="">
        </span>
        <span
            v-if="movie.original_language !== 'en' && movie.original_language !== 'it' && movie.original_language !== 'es' && movie.original_language !== 'fr'">{{
                    movie.original_language
            }}</span>
        <!-- stelline voto -->
        <div v-for="n in store.convertRating(movie.vote_average)"><i class="fa-solid fa-star"></i></div>
        <div v-for="n in 5 - store.convertRating(movie.vote_average)"><i class="fa-regular fa-star"></i>
        </div>

    </li>

</template>