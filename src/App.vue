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
      <template v-for="film in store.searchFilm">
        <li v-if="film.media_type !== 'person'">
          <img :src="store.API_image + film.poster_path" :alt="film.title + film.name">
          Titolo: {{ film.name }} {{ film.title }},
          Titolo
          originale: {{
              film.original_title
          }}{{ film.original_name }}, lingua
          originale:
          <span>
            <img width="20" :src="film.original_language === 'en' ? '../public/Flag_of_the_United_Kingdom.svg.png' : ''"
              alt="">
            <img width="20" :src="film.original_language === 'it' ? '../public/Flag_of_Italy.svg.png' : ''" alt="">
            <img width="20" :src="film.original_language === 'es' ? '../public/Flag_of_Spain.svg.png' : ''" alt="">
          </span> <span
            v-if="film.original_language !== 'en' && film.original_language !== 'it' && film.original_language !== 'es'">{{
                film.original_language
            }}</span>,
          voto: {{ film.vote_average }}

        </li>
      </template>

    </ul>
  </div>
</template>

<style>

</style>