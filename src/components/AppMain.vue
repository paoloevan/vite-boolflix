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
            <ul>
                <MovieItem v-for="film in store.searchFilm" :movie="film" />

            </ul>
        </div>

    </main>

</template>

<style lang="scss" scoped>
main {
    color: white;
}
</style>