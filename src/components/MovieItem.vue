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

    <div class="col position-relative mb-2 text-center" v-if="movie.media_type !== 'person'">
        <!-- immagine -->
        <img v-if="movie.poster_path" class="poster" :src="store.API_image + movie.poster_path"
            :alt="movie.title + movie.name">
        <img v-else src="../../public/not_ava.jpg" alt="">
        <!-- decrizione  -->
        <div class="description position-absolute text-start top-0 p-2">

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

            <div class="overview">
                <strong>Overview: </strong>{{ movie.overview }} {{ movie.overview }}

            </div>

        </div>

    </div>



</template>

<style lang="scss" scoped>
.col {
    border: 1px solid transparent;

    &:hover {
        border: 1px solid red;
        overflow: hidden;
    }

    &:hover .description {
        display: block;
    }

    &:hover img {
        filter: opacity(5%);
    }

    .description {
        display: none;
        font-size: 0.75rem;
        font-weight: 200;

        .language img {
            filter: opacity(100%);
        }
    }


    .poster {
        height: 300px;
        width: 100%;

        img {
            object-fit: cover;
            width: 100%;
        }
    }
}
</style>