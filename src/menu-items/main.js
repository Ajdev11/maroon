// assets
import { IconKey, IconHome, IconWallet, IconBuildingStore } from '@tabler/icons';

// constant
const icons = {
    IconKey,
    IconHome,
    IconWallet,
    IconBuildingStore
};

// ==============================|| EXTRA mainMenu MENU ITEMS ||============================== //

const mainMenu = {
    id: 'pages',
    title: '',
    caption: '',
    type: 'group',
    children: [
        {
            id: 'default',
            title: 'Home',
            type: 'item',
            url: '/home/default',
            icon: icons.IconHome,
            breadcrumbs: false
        },
        {
            id: 'wallet',
            title: 'Wallet',
            type: 'item',
            url: '/dashboard/default',
            icon: icons.IconWallet,
            breadcrumbs: false
        },
        {
            id: 'authentication',
            title: 'Market Place',
            type: 'collapse',
            icon: icons.IconKey,

            children: [
                {
                    id: 'login3',
                    title: 'Login',
                    type: 'item',
                    url: '/pages/login/login3',
                    target: true
                },
                {
                    id: 'register3',
                    title: 'Register',
                    type: 'item',
                    url: '/pages/register/register3',
                    target: true
                }
            ]
        },
        {
            id: 'payment',
            title: 'Payments',
            type: 'item',
            url: '/dashboard/default',
            icon: icons.IconBuildingStore,
            breadcrumbs: false
        },
        {
            id: 'Store',
            title: 'Stores',
            type: 'item',
            url: '/dashboard/default',
            icon: icons.IconBuildingStore,
            breadcrumbs: false
        },
        {
            id: 'loarn',
            title: 'Loarn',
            type: 'item',
            url: '/dashboard/default',
            icon: icons.IconDashboard,
            breadcrumbs: false
        }
    ]
};

export default mainMenu;
