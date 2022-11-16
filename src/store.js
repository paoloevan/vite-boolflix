import { reactive } from 'vue'
import axios from 'axios'

export const store = reactive({
    API_url: 'https://api.themoviedb.org/3/search/movie?',
    API_key: 'api_key=e6a92130dd300f6d7b60f8e64ed7292c',
    query: '',
    searchFilm: '',

    callApi() {
        const url = this.API_url + this.API_key + '&query=' + this.query
        axios.get(url)
            .then(response => {
                this.searchFilm = response.data.results
            })

    }
}
)