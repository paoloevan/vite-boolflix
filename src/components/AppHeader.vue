<script>
import SearchBox from '../components/SearchBox.vue'

export default {
    name: 'AppHeader',
    components: {
        SearchBox
    },
}
</script>

<template>
    <header>

        <h1 class="text-center my-3">
            Boolflix
        </h1>

        <SearchBox />
        <!-- / searchBox -->
    </header>
</template>

<style lang="scss" scoped>
header {
    h1 {
        font-size: 6rem;
        color: red;
        font-weight: 700;
    }
}
</style>