import { createApp } from 'vue'
import './style.scss'
import App from './App.vue'

import Vue from 'vue'
import CountryFlag from 'vue-country-flag-next'

createApp(App).mount('#app')
Vue.component('country-flag', CountryFlag)


