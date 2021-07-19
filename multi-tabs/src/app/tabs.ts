export interface Tab {
    tabName: string;
    routName: string;
    routerLink: string;
    routerParams?: any
}

export const Tabs = [
    {
        tabName: 'Tab 1',
        routName: '/tab-1',
        routerLink: '/tab-1'
    },
    {
        tabName: 'Tab 2',
        routName: '/tab-2',
        routerLink: '/tab-2'
    },
    {
        tabName: 'Tab 3',
        routName: '/tab-3',
        routerLink: '/tab-3'
    },
    {
        tabName: 'Tab 4',
        routName: '/tab-4',
        routerLink: '/tab-4'
    },
    {
        tabName: 'Tab 5',
        routName: '/tab-5',
        routerLink: '/tab-5'
    },
    {
        tabName: 'Tab 6',
        routName: '/tab-6',
        routerLink: '/tab-6'
    }
];