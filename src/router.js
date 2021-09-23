import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            name: 'Login',
            component: () => import('@/components/Login'),
        },
        {
            path: '/register',
            name: 'Register',
            component: () => import('@/components/Register'),
        },
        {
            path: '/dashboard',
            name: 'Dashboard',
            component: () => import('@/components/dashboard/Dashboard'),
        },
        {
            path: '/org/login',
            name: 'Organizationlogin',
            component: () => import('@/components/organization/Organizationlogin'),
        },
        {
            path: '/participant/login',
            name: 'Participantlogin',
            component: () => import('@/components/participant/Participantlogin'),
        },

    ],
})

export default router
