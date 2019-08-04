import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Room from './views/Room.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'About',
      component: () => import('./views/About.vue'),
    },
    {
      path: '/contact',
      name: 'Contact',
      component: () => import('./views/Contact.vue'),
    },
    {
      path: '/guide',
      name: 'Guide',
      component: () => import('./views/Guide.vue'),
    },
    {
      path: '/join',
      name: 'Join',
      component: () => import('./views/Join.vue'),
    },
    {
      path: '/create',
      name: 'Create',
      component: () => import('./views/Create.vue'),
    },
    {
      path: '/room/:randomString/:password',
      name: 'Room',
      props: true,
      component: Room,
    },
    {
      path: '/error',
      name: 'Error',
      component: () => import('./views/Error.vue'),
    },
  ],
});
