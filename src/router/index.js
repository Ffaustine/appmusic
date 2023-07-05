import { createRouter, createWebHistory } from 'vue-router';

import LoginForm from '../views/LoginForm.vue';
import HomeView from '../views/HomeView.vue';


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
