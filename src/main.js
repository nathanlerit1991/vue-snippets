import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import 'vue-croppa/dist/vue-croppa.css'
import Croppa from 'vue-croppa'
import Axios from 'axios'

//SASS LOADER https://flaviocopes.com/vue-using-scss/


Vue.use(Croppa)
Vue.config.productionTip = false

let axiosInstance = Axios.create({
	// baseURL: 'https://reqres.in/api/',
	baseURL: 'http://localhost:3000/'
})

window.axios = axiosInstance

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
