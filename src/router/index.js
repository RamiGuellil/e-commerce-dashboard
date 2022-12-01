import { createWebHistory, createRouter } from "vue-router";

import Login from '@/components/Login'
import MainPage from '@/components/MainPage'
const routes = [
    /*{
        path: '/',
        component: Page,
        children: [
            {
                path: '',
                name: 'Dashboard',
                component: Dashboard,
                auth: true
            },
            {
                path: 'users',
                name: 'Users',
                component: Users,
                auth: true
            }
        ]
    },*/
    {
        path: '/',
        name: 'Home',
        component: MainPage
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    { path: '/:catchAll(.*)', redirect: '/login' }
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

//router.replace({ path: ':catchAll(.*)', redirect: '/login' })

export default router;