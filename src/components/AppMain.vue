<script>
import { store } from '../store.js'
import MovieItem from '../components/MovieItem.vue';

export default {
    name: 'AppMain',
    components: {
        MovieItem
    },
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <main>

        <div class="container">
            <div class="row row-cols-6 justify-content-center align-items-start g-1 my-3 py-2">
                <MovieItem v-for="film in store.searchFilm" :movie="film" />

            </div>
        </div>

    </main>

</template>

<style lang="scss" scoped>
main {
    color: white;
}
</style>