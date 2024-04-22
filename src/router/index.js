import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

// Import your Vue components for different views/pages
import Home from '../views/Home.vue';
import MatchDetails from '../views/MatchDetails.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/match/:id',
        name: 'MatchDetails',
        component: MatchDetails,
        props: true
    }
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

export default router;
