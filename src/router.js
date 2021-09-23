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
            path: '/roles',
            name: 'Roles',
            component: () => import('@/components/roles/Roles'),
        },
        {
            path: '/reset',
            name: 'Reset',
            component: () => import('@/components/reset/Reset'),
        },
        {
            path: '/permissions',
            name: 'Permissions',
            component: () => import('@/components/permissions/Permissions'),
        },
        {
            path: '/survey',
            name: 'Survey',
            component: () => import('@/components/survey/Survey'),
        },
        {
            path: '/profile',
            name: 'Profile',
            component: () => import('@/components/profile/Profile'),
        },
        {
            path: '/sms',
            name: 'SMS',
            component: () => import('@/components/sms/SMS'),
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
