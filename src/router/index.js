import { createRouter, createWebHistory } from 'vue-router';

import LoginForm from '../pages/LoginForm.vue';
import HomeView from '../pages/HomeView.vue';


const routes = [
  {
    path: '/',
    component: LoginForm,
    name: 'login',
  },

  {
    path: '/home',
    component: HomeView,
    name : 'home',
  }

];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
