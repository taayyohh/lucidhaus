import {home, signOut, userCog} from 'config/icons'

export const userDashboardMenu = [
    {
        url: '/dashboard',
        icon: home,
        title: 'Home'
    },
    {
        url: '/dashboard/profile',
        icon: userCog,
        title: 'Profile'
    },
    {
        dispatchAction: 'user/signOut',
        icon: signOut,
        title: 'Sign Out'
    }
]
