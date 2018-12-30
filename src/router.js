import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Group from './views/Group.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
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
      path: '/rooms',
      name: 'rooms',
      component: () => import('./views/Rooms.vue'),
    },
    {
      path: '/create',
      name: 'create',
      component: () => import('./views/Create.vue'),
    },
    {
      path: '/group',
      name: 'group',
      props: true,
      component: Group,
    },
  ],
});
