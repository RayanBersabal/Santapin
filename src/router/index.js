import { createRouter, createWebHistory } from 'vue-router';

import Home from '../view/Home.vue';
import Menu from '../view/Menu.vue';
import Orders from '../view/Orders.vue';
import Login from '../view/Login.vue';
import Register from '../view/Register.vue';
import Cart from '../view/Cart.vue';
import Checkout from '../view/Checkout.vue';
import AdminDashboard from '../view/AdminDashboard.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/menu', name: 'Menu', component: Menu },
  { path: '/orders', name: 'Orders', component: Orders },
  { path: '/login', name: 'Login', component: Login },
  { path: '/register', name: 'Register', component: Register },
  { path: '/cart', name: 'Cart', component: Cart },
  { path: '/checkout', name: 'Checkout', component: Checkout },
  { path: '/admin', name: 'AdminDashboard', component: AdminDashboard }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;