import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Buefy from 'buefy'
import VueCookie from 'vue-cookie'
import axios from 'axios'
import vuetify from './plugins/vuetify'


Vue.use(axios);
Vue.use(Buefy)
Vue.use(VueCookie)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
