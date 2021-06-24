import {comments, home, star, user, userCog} from 'config/icons'

export const adminDashboardMenu = [
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
        url: '/admin/places',
        active: ['place'],
        icon: user,
        title: 'Manage Places'
    },
    {
        url: '/dashboard/',
        icon: userCog,
        title: 'User Dashboard'
    }
]
