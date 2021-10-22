import {bookmark, comments, home, plusCircle, userCog} from 'config/icons'

export const userDashboardMenu = [
    {
        url: '/dashboard',
        icon: home,
        title: 'Dashboard'
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
        title: 'My Places'
    },
    {
        url: '/dashboard/submit',
        icon: plusCircle,
        title: 'Submit A Place'
    }
]
