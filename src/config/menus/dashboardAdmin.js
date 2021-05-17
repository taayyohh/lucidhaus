import {cogs, home, signOut, user} from 'config/icons/fa'

export const adminDashboardMenu = [
    {
        url: '/admin',
        icon: home,
        title: 'Dashboard'
    },
    {
        url: '/admin/users',
        active: ['user'],
        icon: user,
        title: 'Manage Users'
    },
    {
        url: '/admin/places',
        active: ['place'],
        icon: user,
        title: 'Manage Places'
    },
    {
        url: '/admin/taxonomy',
        active: ['product-category'],
        icon: cogs,
        title: 'Manage Taxonomy'
    },
    {
        dispatchAction: 'user/signOut',
        icon: signOut,
        title: 'Sign Out'
    }
]
