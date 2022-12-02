import { createWebHistory, createRouter } from "vue-router";

import Login from '@/components/Login'
import MainPage from '@/components/MainPage'
import Dashboard from '@/components/Dashboard'
import Products from '@/components/Products'
import Orders from '@/components/Orders'
import Analytics from '@/components/Analytics'
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
        path: '/dashboard',
        name: 'Dashboard',
        component: Dashboard
    },
    {
        path: '/',
        name: 'Dashboard-default',
        component: Dashboard
    },
    {
        path: '/products',
        name: 'Products',
        component: Products
    },
    {
        path: '/orders',
        name: 'Orders',
        component: Orders
    },
    {
        path: '/analytics',
        name: 'Analytics',
        component: Analytics
    },
    /*{
        path: '/:catchAll(.*)',
        redirect: '/login'
    }*/
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

//router.replace({ path: ':catchAll(.*)', redirect: '/login' })

export default router;