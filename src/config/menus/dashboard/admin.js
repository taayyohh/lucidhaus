import {home, user, userCog} from 'config/icons'

export const adminDashboardMenu = [
    {
        url: '/admin',
        icon: home,
        title: 'Admin Dashboard'
    },
    {
        url: '/admin/artists',
        active: ['artist'],
        icon: user,
        title: 'Manage Artists'
    },
    {
        url: '/admin/users',
        active: ['user'],
        icon: user,
        title: 'Manage Users'
    },
    {
        url: '/admin/shop',
        active: ['shop'],
        icon: user,
        title: 'Manage Shop'
    },
    {
        url: '/admin/orders',
        active: ['order'],
        icon: user,
        title: 'Manage Orders'
    },
    {
        url: '/admin/collaborators',
        active: ['collaborator'],
        icon: user,
        title: 'Manage Collaborators'
    },
    {
        url: '/admin/events',
        active: ['event'],
        icon: user,
        title: 'Manage Events'
    },
    {
        url: '/admin/music',
        active: ['music'],
        icon: user,
        title: 'Manage Music'
    },
    {
        url: '/dashboard/',
        icon: userCog,
        title: 'User Dashboard'
    },
]


export const mobileAdminDashboardMenu = [
    {
        url: '/admin',
        icon: home,
        title: 'Admin Dashboard'
    },
    {
        url: '/admin/users',
        active: ['user'],
        icon: user,
        title: 'Manage Users'
    },
    {
        url: '/admin/artists',
        active: ['artist'],
        icon: user,
        title: 'Manage Artists'
    },
    {
        url: '/admin/shop',
        active: ['shop'],
        icon: user,
        title: 'Manage Shop'
    },
    {
        url: '/admin/orders',
        active: ['order'],
        icon: user,
        title: 'Manage Orders'
    },
    {
        url: '/admin/taxonomy',
        active: ['taxonomy'],
        icon: user,
        title: 'Manage Taxonomy'
    },
    {
        url: '/admin/collaborators',
        active: ['collaborator'],
        icon: user,
        title: 'Manage Collaborators'
    },
    {
        url: '/admin/events',
        active: ['event'],
        icon: user,
        title: 'Manage Events'
    },
    {
        url: '/admin/music',
        active: ['music'],
        icon: user,
        title: 'Manage Music'
    },
    {
        url: '/dashboard/',
        icon: userCog,
        title: 'User Dashboard'
    },
    {
        url: '/dashboard/account',
        icon: userCog,
        title: 'Account Details'
    }
]
