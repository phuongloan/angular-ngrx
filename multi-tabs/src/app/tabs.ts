export interface Tab {
    tabName: string;
    routName: string;
    routerLink: string;
    routerParams?: any;
    tabData?: any;
}

export const Menu = [
    {
        tabName: 'Supplier',
        routName: '/supplier/index',
        routerLink: '/supplier/index',
        icon: 'supervisor_account',
        children: [
            {
                tabName: 'List',
                routName: '/supplier/index',
                routerLink: '/supplier/index',
            },
            {
                tabName: 'Create Supplier',
                routName: '/supplier/detail/1',
                routerLink: '/supplier/detail/1',
            },
        ]
    },
    {
        tabName: 'Hotel',
        routName: '/hotel/index',
        routerLink: '/hotel/index',
        icon: 'edit_location',
        children: [
            {
                tabName: 'List',
                routName: '/hotel/index',
                routerLink: '/hotel/index',
            },
            {
                tabName: 'Create Hotel',
                routName: '/hotel/detail',
                routerLink: '/hotel/detail',
            },
        ]
    },
    {
        tabName: 'Mapping',
        routName: '/mapping/index',
        routerLink: '/mapping/index',
        icon: 'share',
        children: [
            {
                tabName: 'List',
                routName: '/mapping/index',
                routerLink: '/mapping/index',
            }]
    },
    {
        tabName: 'Reservation',
        routName: '/reservation/index',
        routerLink: '/reservation/index',
        icon: 'clear_all',
        children: [
            {
                tabName: 'List',
                routName: '/reservation/index',
                routerLink: '/reservation/index',
            }]
    },
    {
        tabName: 'Notice',
        routName: '/notice/index',
        routerLink: '/notice/index',
        icon: 'notifications',
        children: [
            {
                tabName: 'List',
                routName: '/notice/index',
                routerLink: '/notice/index',
            }]
    }
];