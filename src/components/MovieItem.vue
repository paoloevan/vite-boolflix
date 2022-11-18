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
        <img v-else src="../../public/not_ava.jpg" class="poster" alt="">
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

                <img width="20" v-if="store.languagueFlag(movie.original_language)"
                    :src="`../public/${store.selectFlag(movie.original_language)}`" alt="">

                <span v-else>
                    {{ movie.original_language }}</span>
            </div>

            <!-- stelline voto -->
            <div class="rating d-flex">
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
    height: 100%;

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
        height: 350px;
        width: 100%;
        object-fit: cover;
    }
}
</style>