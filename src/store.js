import { reactive } from 'vue'
import axios from 'axios'

export const store = reactive({
    API_url: 'https://api.themoviedb.org/3/search/multi?',
    API_key: 'api_key=e6a92130dd300f6d7b60f8e64ed7292c',
    query: '',
    API_image: 'https://image.tmdb.org/t/p/w92',
    searchFilm: '',

    callApi() {
        const url = this.API_url + this.API_key + '&query=' + this.query
        axios.get(url)
            .then(response => {
                this.searchFilm = response.data.results
                console.log(response.data.results[0].poster_path);
            })
        this.query = ''
    },
    convertRating(number) {
        const newNumber = number / 2
        const newrating = Math.ceil(newNumber)
        return newrating
    }
}
)