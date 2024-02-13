import { createApp } from 'vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faStar, faSearch } from '@fortawesome/free-solid-svg-icons'

import App from './App.vue'

library.add(faStar, faSearch)

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
