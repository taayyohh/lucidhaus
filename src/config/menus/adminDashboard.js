import {
    cogs,
    home,
    newsPaper,
    receipt,
    signOut,
    store
} from 'config/icons/fa'

export const adminDashboardMenu = [
    {
        url: '/admin',
        icon: home,
        title: 'Dashboard'
    },
    {
        url: '/admin/posts',
        active: ['post'],
        icon: newsPaper,
        title: 'Manage Posts'
    },
    {
        url: '/admin/shop',
        active: ['product'],
        icon: store,
        title: 'Manage Shop'
    },
    {
        url: '/admin/orders',
        icon: receipt,
        title: 'Manage Orders'
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