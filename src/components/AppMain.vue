<script>
import { store } from '../store.js'

export default {
    name: 'AppMain',
    data() {
        return {
            store
        }
    }
}
</script>

<template>



    <ul>
        <template v-for="film in store.searchFilm">
            <!-- film item -->
            <li v-if="film.media_type !== 'person'">
                <img :src="store.API_image + film.poster_path" :alt="film.title + film.name">
                Titolo: {{ film.name }} {{ film.title }},
                Titolo
                originale: {{
                        film.original_title
                }}{{ film.original_name }}, lingua
                originale:
                <span>
                    <!-- bandierina lingue -->
                    <img width="20"
                        :src="film.original_language === 'en' ? '../public/Flag_of_the_United_Kingdom.svg.png' : ''"
                        alt="">
                    <img width="20" :src="film.original_language === 'fr' ? '../public/Flag_of_France.svg.png' : ''"
                        alt="">
                    <img width="20" :src="film.original_language === 'it' ? '../public/Flag_of_Italy.svg.png' : ''"
                        alt="">
                    <img width="20" :src="film.original_language === 'es' ? '../public/Flag_of_Spain.svg.png' : ''"
                        alt="">
                </span>
                <span
                    v-if="film.original_language !== 'en' && film.original_language !== 'it' && film.original_language !== 'es' && film.original_language !== 'fr'">{{
                            film.original_language
                    }}</span>
                <!-- stelline voto -->
                <div v-for="n in store.convertRating(film.vote_average)"><i class="fa-solid fa-star"></i></div>
                <div v-for="n in 5 - store.convertRating(film.vote_average)"><i class="fa-regular fa-star"></i></div>

            </li>
        </template>

    </ul>
</template>