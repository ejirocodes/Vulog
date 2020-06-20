import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

import Homepage from '../views/HomePage.vue';
import UserPost from '../components/UsersPost.vue';


export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
          component: Homepage,
      name: 'Home',
      
    },
     {
      path: '/user-post',
          component: UserPost,
      name: 'UserPost',
      
    },
    {
      path: '*',
      name: 'NotFound',
    //   component: NotFound
    }
  ]
});
