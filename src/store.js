import { reactive } from 'vue'

export const store = reactive({
    API_url: 'https://api.themoviedb.org/3/search/movie?',
    API_key: 'api_key=e6a92130dd300f6d7b60f8e64ed7292c',
    query: ''
})