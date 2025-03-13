import {Icon} from '@iconify/react';

import { SideNavItem } from './types';

export const SIDE_NAV_ITEMS: SideNavItem[] = [
    {
        title: 'Home',
        path: '/',
        icon: <Icon icon="lucide:home" />,
    },
    {
        title: 'Currency',
        path: '/currency',
        icon: <Icon icon="bi:currency-dollar" />,     
    },
    {
        title: 'Weather',
        path: '/weather',
        icon: <Icon icon="bi:cloud-sun-fill" />,
    }
]