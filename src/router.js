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
            path: '/menus',
            name: 'Menu',
            component: () => import('@/components/menuconfig/Menuconfig'),
        },
        {
            path: '/channels',
            name: 'Channels',
            component: () => import('@/components/channels/Channels'),
        },
        {
            path: '/reset',
            name: 'Reset',
            component: () => import('@/components/Resetpassword/Reset'),
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
            path: '/users',
            name: 'Users',
            component: () => import('@/components/users/Users'),
        },
        {
            path: '/email',
            name: 'Email',
            component: () => import('@/components/email/Email'),
        },
        {
            path: '/sms',
            name: 'SMS',
            component: () => import('@/components/sms/SMS'),
        },
        {
            path: '/awards',
            name: 'Awards',
            component: () => import('@/components/awards/Awards'),
        },

        {
            path: '/country',
            name: 'Country',
            component: () => import('@/components/country/Country'),
        },

        {
            path: '/analytics',
            name: 'Analytics',
            component: () => import('@/components/Analytics/Analytics'),
        },
        {
            path: '/participant/login',
            name: 'Participantlogin',
            component: () => import('@/components/participant/Participantlogin'),
        },
        {
            path: '/org/login',
            name: 'Organizationlogin',
            component: () => import('@/components/organization/Organizationlogin'),
        },

    ],
})

export default router
