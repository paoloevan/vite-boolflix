<script>
import { store } from './store.js'

export default {
  name: 'App',
  components: store,
  data() {
    return {
      store
    }
  }
}
</script>

<template>
  <div class="search">
    <input v-model="store.query" type="search" placeholder="Digita film">
    <button @click="this.store.callApi()">Cerca</button>
    <ul>
      <li v-for="film in store.searchFilm">Titolo: {{ film.title }}, Titolo originale: {{ film.original_title }}, lingua
        originale: {{ film.original_language }},
        voto: {{ film.vote_average }}</li>
    </ul>
  </div>
</template>

<style>

</style>