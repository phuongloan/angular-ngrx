export interface Tab {
    tabName: string;
    url: string;
    pageId?: string;
    routerLink: string;
    routerParams?: any;
    isChangedData?: boolean;
}

export const Menu = [
    {
        tabName: 'Supplier',
        url: '/supplier/index',
        routerLink: '/supplier/index',
        icon: 'supervisor_account',
        children: [
            {
                tabName: 'List',
                url: '/supplier/index',
                routerLink: '/supplier/index',
            },
            {
                tabName: 'Create Supplier',
                url: '/supplier/create',
                routerLink: '/supplier/create',
            },
        ]
    },
    {
        tabName: 'Hotel',
        url: '/hotel/index',
        routerLink: '/hotel/index',
        icon: 'edit_location',
        children: [
            {
                tabName: 'List',
                url: '/hotel/index',
                routerLink: '/hotel/index',
            },
            {
                tabName: 'Create Hotel',
                url: '/hotel/detail',
                routerLink: '/hotel/detail',
            },
        ]
    },
    {
        tabName: 'Mapping',
        url: '/mapping/index',
        routerLink: '/mapping/index',
        icon: 'share',
        children: [
            {
                tabName: 'List',
                url: '/mapping/index',
                routerLink: '/mapping/index',
            }]
    },
    {
        tabName: 'Reservation',
        url: '/reservation/index',
        routerLink: '/reservation/index',
        icon: 'clear_all',
        children: [
            {
                tabName: 'List',
                url: '/reservation/index',
                routerLink: '/reservation/index',
            }]
    },
    {
        tabName: 'Notice',
        url: '/notice/index',
        routerLink: '/notice/index',
        icon: 'notifications',
        children: [
            {
                tabName: 'List',
                url: '/notice/index',
                routerLink: '/notice/index',
            }]
    }
];