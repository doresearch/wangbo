import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Ceshi from './views/Ceshi.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  scrollBehavior(to, from, savePosition){
    // console.log('to', to)
    // console.log('from', from)
    // console.log(savePosition)
  },
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/ceshi/:str?',
      name: 'ceshi',
      component: Ceshi,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
  ],
});
