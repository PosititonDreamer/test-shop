import Vue from 'vue'
import Vuex from 'vuex'
import catalog from './catalog'
import basket from './basket'
import reviews from './reviews'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    catalog, basket, reviews
  }
})
