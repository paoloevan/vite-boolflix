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


            <div class="row row-cols-5 justify-content-center align-items-start g-1 my-3 py-2 px-5">

                <MovieItem v-for="film in this.store.searchFilm" :movie="film" />

                <div v-if="this.store.noFound" class="not_found">
                    Contenuto non torvato :/</div>
            </div>

        </div>

    </main>

</template>

<style lang="scss" scoped>
main {
    color: white;

    .loading,
    .not_found {
        text-align: center;
        margin: 3rem;
        font-size: 1.5rem;
    }

}
</style>