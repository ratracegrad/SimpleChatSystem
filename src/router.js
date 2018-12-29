import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('./views/Home.vue'),
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue'),
    },
    {
      path: '/testBench',
      name: 'Site test bench',
      component: () => import('./views/testBench.vue'),
    },
    {
      path: '/group',
      name: 'group',
      props: true,
      component: () => import('./views/Group.vue'),
    },
    {
      path: '/rooms',
      name: 'rooms',
      component: () => import('./views/Rooms.vue'),
    },
  ],
});
