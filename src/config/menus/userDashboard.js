import {
    home,
    receipt,
    signOut,
    userCog
} from 'config/icons/fa'

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
        url: '/dashboard/orders',
        icon: receipt,
        title: 'Orders'
    },
    {
        dispatchAction: 'user/signOut',
        icon: signOut,
        title: 'Sign Out'
    }
]