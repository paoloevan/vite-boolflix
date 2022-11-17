import { reactive } from 'vue'
import axios from 'axios'

export const store = reactive({
    config: {
        method: 'GET',
        url: 'https://api.themoviedb.org/3/search/multi?',
        params: {
            api_key: 'e6a92130dd300f6d7b60f8e64ed7292c',
            query: ''
        }
    },
    API_image: 'https://image.tmdb.org/t/p/w342',
    searchFilm: '',
    error: false,

    callApi() {
        axios(this.config)
            .then(response => {
                this.searchFilm = response.data.results
                console.log(response.data.results[0].poster_path);
            })
            .catch(err => {
                console.log(err.message);
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