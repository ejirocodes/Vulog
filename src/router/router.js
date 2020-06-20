import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

import Homepage from '../views/HomePage.vue';
import UserPosts from '../components/UserPosts.vue';


export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Homepage,
            name: 'Home',

        },
        {
            path: '/user-post/:id',
            component: UserPosts,
            name: 'UserPosts',

        },
        //   {
        //     path: '/single-post',
        //     component: SinglePost,
        //     name: 'SinglePost',

        // },
        {
            path: '*',
            name: 'NotFound',
            //   component: NotFound
        }
    ]
});
