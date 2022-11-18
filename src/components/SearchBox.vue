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
    <div class="search text-center py-2">
        <input @keyup.enter="this.store.callApi()" v-model="this.store.config.params.query" type="search"
            placeholder="Cerca film o serie">
        <button @click="this.store.callApi()">Go
        </button>
    </div>
</template>

<style lang="scss" scoped>
.search {
    input {
        color: white;
        background-color: rgb(75, 75, 75);
        border: none;
        border-radius: 20px;
        padding: 0.5rem 1rem;
        margin-right: 1rem;
    }

    button {
        background-color: rgb(75, 75, 75);
        color: gray;
        border: none;
        width: 46px;
        padding: 0.5rem;
        aspect-ratio: 1;
        border-radius: 50%;
    }
}
</style>