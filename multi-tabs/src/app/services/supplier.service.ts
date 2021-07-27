import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})


export class SupplierService {
    items: Supplier[] = SupplierList;
    constructor() { }
    getItems() {
        return this.items;
    }

}
export interface Supplier {
    code: string;
    name: string;
    type: string;
    country: string;
    status: string;
}

export const SupplierList = [
    {
        code: 'CSP000422',
        name: 'Imperial Hotel',
        type: 'Hotel',
        country: 'Viet Nam',
        status: 'Active',
    },
    {
        code: 'CSP000422',
        name: 'Imperial Hotel',
        type: 'Hotel',
        country: 'Viet Nam',
        status: 'Active',
    },
    {
        code: 'CSP000422',
        name: 'Imperial Hotel',
        type: 'Hotel',
        country: 'Viet Nam',
        status: 'Active',
    },
    {
        code: 'CSP000422',
        name: 'Imperial Hotel',
        type: 'Hotel',
        country: 'Viet Nam',
        status: 'Active',
    },
    {
        code: 'CSP000422',
        name: 'Imperial Hotel',
        type: 'Hotel',
        country: 'Viet Nam',
        status: 'Active',
    }
    , {
        code: 'CSP000422',
        name: 'Imperial Hotel',
        type: 'Hotel',
        country: 'Viet Nam',
        status: 'Active',
    }
]