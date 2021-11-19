import {bookmark, building, comments, exclamationTriangle, home, plusCircle, user, userCog} from 'config/icons'

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
        url: '/admin/places/pending',
        icon: building,
        title: 'Pending Place Submissions'
    },
    {
        url: '/admin/flagged/reviews',
        active: ['flagged', 'reviews'],
        icon: exclamationTriangle,
        title: 'Flagged Reviews'
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
        url: '/admin/places',
        active: ['place'],
        icon: user,
        title: 'Manage Places'
    },
    {
        url: '/admin/places/pending',
        icon: building,
        title: 'Pending Place Submissions'
    },
    {
        url: '/admin/flagged/reviews',
        active: ['flagged', 'reviews'],
        icon: exclamationTriangle,
        title: 'Flagged Reviews'
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
    },
    {
        url: '/dashboard/profile',
        icon: userCog,
        title: 'Identity Profile'
    },
    {
        url: '/dashboard/reviews',
        icon: comments,
        title: 'My Reviews'
    },
    {
        url: '/dashboard/places',
        icon: bookmark,
        title: '    My Places'
    },
    {
        url: '/dashboard/submit',
        icon: plusCircle,
        title: 'Submit A Place'
    }
]
