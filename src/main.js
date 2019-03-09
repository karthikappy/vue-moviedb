import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

require('dotenv').config()

new Vue({
  render: h => h(App),
}).$mount('#app')
