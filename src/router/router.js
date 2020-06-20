import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

import Homepage from '../views/HomePage.vue';
import UsersPost from '../components/UsersPost.vue';


export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
          component: Homepage,
      name: 'Home',
      
    },
     {
      path: '/',
          component: Homepage,
      name: 'Home',
      
    },
    {
      path: '*',
      name: 'NotFound',
    //   component: NotFound
    }
  ]
});
