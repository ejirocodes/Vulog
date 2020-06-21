import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

import Homepage from '../views/HomePage.vue';
import UserDetails from '../components/UserDetails.vue';
import Post from '../components/Post.vue';


export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Homepage,
            name: 'Home',

        },
        {
            path: '/user-details/:id',
            component: UserDetails,
            name: 'UserDetails',

        },
          {
            path: '/post',
            component:Post,
            name: 'Post',

        },
        {
            path: '*',
            name: 'NotFound',
            //   component: NotFound
        }
    ]
});
