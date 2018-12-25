import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import testBench from './views/testBench.vue';
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
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
    {
      path: '/testBench',
      name: 'Site test bench',
      component: testBench,
    },
    {
      path: '/group',
      name: 'Group chat',
      component: Group,
    },
  ],
});
