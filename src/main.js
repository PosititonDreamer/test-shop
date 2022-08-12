import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueMask from 'v-mask'
import { Plugin } from 'vue-fragment'
Vue.config.productionTip = false
Vue.use(VueMask)
Vue.use(Plugin)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
