import {home, signOut, userCog} from 'config/icons'

export const userDashboardMenu = [
    {
        url: '/dashboard',
        icon: home,
        title: 'Home'
    },
    {
        url: '/dashboard/settings',
        icon: userCog,
        title: 'Settings'
    },
    {
        dispatchAction: 'user/signOut',
        icon: signOut,
        title: 'Sign Out'
    }
]
