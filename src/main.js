import Vue from 'vue'
import App from './App'
import Vuetify from 'vuetify'

import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

export const shareBus = new Vue();

new Vue({
  el: '#app',
  render: function (createElement) {
    return createElement(App);
}
})