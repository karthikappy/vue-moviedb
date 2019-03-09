import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

require('dotenv').config()
//require("bootstrap")
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './../node_modules/bootstrap/dist/js/bootstrap.min.js';

new Vue({
  render: h => h(App),
}).$mount('#app')
