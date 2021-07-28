import { Injectable } from '@angular/core';
import { Tab } from '../tabs';

@Injectable({
    providedIn: 'root'
})
export class TabsService {

    constructor() { }

    items: Tab[] = [];

    addItem(item: Tab) {
        this.removeItem(item);
        this.items.push(item);
    }

    removeItem(item: Tab) {
        const index: number = this.items.findIndex(i => i.url === item.url);
        if (index > -1) {
            this.items.splice(index, 1);
        }
    }

    getItems() {
        return this.items;
    }

    clearItems() {
        this.items = [];
        return this.items;
    }



}