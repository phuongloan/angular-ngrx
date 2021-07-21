export interface Tab {
    tabName: string;
    routName: string;
    routerLink: string;
    routerParams?: any
}

export const Tabs = [
    {
        tabName: 'Supplier',
        routName: '/supplier/index',
        routerLink: '/supplier/index'
    },
    {
        tabName: 'Hotel',
        routName: '/hotel/index',
        routerLink: '/hotel/index'
    },
    {
        tabName: 'Mapping',
        routName: '/mapping/index',
        routerLink: '/mapping/index'
    },
    {
        tabName: 'Reservation',
        routName: '/reservation/index',
        routerLink: '/reservation/index'
    },
    {
        tabName: 'Notice',
        routName: '/notice/index',
        routerLink: '/notice/index'
    }
];