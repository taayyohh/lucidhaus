import {home, signOut, user} from 'config/icons'

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
    }
]
