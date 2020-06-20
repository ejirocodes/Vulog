import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import router from './router/router'

Vue.config.productionTip = false

Vue.use(VueResource);

Vue.http.options.root = 'https://jsonplaceholder.typicode.com'

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
