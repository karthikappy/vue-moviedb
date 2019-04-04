import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

require('dotenv').config()
//require("bootstrap")
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './../node_modules/bootstrap/dist/js/bootstrap.min.js';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faUserSecret)
library.add(faChevronDown)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false


new Vue({
  render: h => h(App),
}).$mount('#app')
