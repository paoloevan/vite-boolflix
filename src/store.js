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
    noFound: false,
    availableLang: ['it', 'en', 'es', 'fr'],

    callApi() {
        this.loadingText = true,
            axios(this.config)
                .then(response => {
                    this.searchFilm = response.data.results
                    if (this.searchFilm.length === 0) {
                        this.noFound = true
                    } else {
                        this.noFound = false
                    }
                })
                .catch(err => {
                    console.log(err.message);
                })
        this.config.params.query = ''
    },
    convertRating(number) {
        const newNumber = number / 2
        const newrating = Math.ceil(newNumber)
        return newrating
    },
    languagueFlag(language) {
        if (this.availableLang.includes(language)) {
            return true
        } else {
            return false
        }
    },
    selectFlag(language) {
        if (language === 'it') {
            return 'Flag_of_Italy.svg.png'
        } else if (language === 'en') {
            return 'Flag_of_the_United_Kingdom.svg.png'

        } else if (language === 'es') {
            return 'Flag_of_Spain.svg.png'

        } else if (language === 'fr') {
            return 'Flag_of_France.svg.png'
        }
    }
}
)