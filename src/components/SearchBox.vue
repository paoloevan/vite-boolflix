<script>
import { store } from '../store.js'

export default {
    name: 'SearchBox',
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <div class="search">
        <input @keyup.enter="this.store.callApi()" v-model="this.store.query" type="search" placeholder="Digita film">
        <button @click="this.store.callApi()">Cerca</button>
    </div>
</template>