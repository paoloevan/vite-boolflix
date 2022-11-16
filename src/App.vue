<script>
import { store } from './store.js'


export default {
  name: 'App',
  components: {
    store
  },
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
        originale:
        <span>
          <img width="20" :src="film.original_language === 'en' ? '../public/Flag_of_the_United_Kingdom.svg.png' : ''"
            alt="">
          <img width="20" :src="film.original_language === 'it' ? '../public/Flag_of_Italy.svg.png' : ''" alt="">
          <img width="20" :src="film.original_language === 'es' ? '../public/Flag_of_Spain.svg.png' : ''" alt="">
        </span>,
        voto: {{ film.vote_average }}
      </li>
    </ul>
  </div>
</template>

<style>

</style>