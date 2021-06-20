import Vue from 'vue';
import VueRouter from 'vue-router';
//Importamos los componentes que tendran nuestras vistas
import Home from './views/Home';
import User from './views/User';
import Examples from './views/Examples';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/user',
        name: 'User',
        component: User
    },
    {
        path: '/examples',
        name: 'Examples',
        component: Examples
    }
]

const router = new VueRouter({routes});

export default router;