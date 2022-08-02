import Vue from 'vue'
import Vuex from 'vuex'
import catalog from './catalog'
import basket from './basket'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    catalog, basket
  }
})
