import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import router from './router/router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


Vue.config.productionTip = false

Vue.use(VueResource);
// Install BootstrapVue
Vue.use(BootstrapVue)
// install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
Vue.http.options.root = 'https://jsonplaceholder.typicode.com';

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
