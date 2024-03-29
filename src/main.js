import Vue from 'vue'
import App from './App.vue'
import store from './store'
import '@mdi/font/css/materialdesignicons.css'
import vuetify from './plugins/vuetify';
import 'roboto-fontface/css/roboto/roboto-fontface.css'

Vue.config.productionTip = false

new Vue({
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
