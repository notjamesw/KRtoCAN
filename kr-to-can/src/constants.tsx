import {Icon} from '@iconify/react';

import { SideNavItem } from './types';

const SIDE_NAV_ITEMS: SideNavItem[] = [
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

const KoreanCities = ["Seoul", "Busan", "Incheon", "Daegu", "Daejeon", "Gwangju", "Gyeong", "Suwon", "Ulsan", "Jeju Island"];
const CanadianCities = ["Vancouver", "Toronto", "Montreal", "Calgary", "Edmonton", "Ottawa", "Winnipeg", "Quebec City", "Hamilton", "Kitchener", "Halifax", "Waterloo", "Victoria"];

export { SIDE_NAV_ITEMS, KoreanCities, CanadianCities };