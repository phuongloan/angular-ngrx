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
    getSupplierDetail(code: string | null) {
        return this.items.find(supplier => supplier.code === code)
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
        code: 'CSP000423',
        name: 'Asan-si Korean Hotel',
        type: 'Hotel',
        country: 'Korean',
        status: 'Active',
    },
    {
        code: 'CSP000424',
        name: 'The Busan Hotel',
        type: 'Hotel',
        country: 'Korean',
        status: 'Active',
    },
    {
        code: 'CSP000425',
        name: 'The Tahara Hotel',
        type: 'Hotel',
        country: 'Japan',
        status: 'Active',
    },
    {
        code: 'CSP000426',
        name: 'Chitose Cabin',
        type: 'Hotel',
        country: 'Japan',
        status: 'Active',
    }
    , {
        code: 'CSP000427',
        name: 'Mori Hotel',
        type: 'Hotel',
        country: 'Japan',
        status: 'Active',
    }
]

