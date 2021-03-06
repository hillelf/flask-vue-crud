import Vue from 'vue';
import Router from 'vue-router';
import Ping from './components/Ping.vue';
import index from './components/index.vue';
import Books from './components/Books.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
		{
      path: '/',
      name: 'index',
      component: index
    },
		{
      path: '/ping',
      name: 'Ping',
      component: Ping,
    },
		{
      path: '/books',
      name: 'Books',
      component: Books,
    },
  ],
});