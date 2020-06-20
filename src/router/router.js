import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

import Homepage from '../views/HomePage.vue';
import UserPost from '../components/UserPost.vue';
import UserDetails from '../components/UserDetails.vue';
import SinglePost from '../components/SinglePost.vue';


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
            path: '/user-details/:id',
            component: UserDetails,
            name: 'UserDetails',

        },
          {
            path: '/single-post',
            component: SinglePost,
            name: 'SinglePost',

        },
        {
            path: '*',
            name: 'NotFound',
            //   component: NotFound
        }
    ]
});
