import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/home.vue';
import Login from './components/auth/login.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
