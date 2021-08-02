import { Action, createReducer, on } from "@ngrx/store";
import { environment } from '../../../environments/environment.local';
import { addItem, removeItem, clearItems, switchItems } from "./tabs.actions";
import { Tab } from "src/app/tabs";

var initalTabs: Tab[] = [];
var limitTabs = environment.limitTabs;

const _tabsReducer = createReducer(
    initalTabs,
    on(addItem, (state, { item }) => {
        let tabs: Tab[] = [...state];
        const index: number = tabs.findIndex(i => i.url === item.url);
        if (index < 0) {
            tabs.push(item);
        }
        if (tabs.length > limitTabs) {
            tabs.splice(0, 1);
        }
        return tabs;
    }),
    on(removeItem, (state, { item }) => {
        let tabs: Tab[] = [...state];
        const index: number = tabs.findIndex(i => i.url === item.url);
        if (index > -1) {
            tabs.splice(index, 1);
        }
        return tabs;
    }),
    on(clearItems, (state) => {
        return [];
    }),
    on(switchItems, (state, { items }) => {
        return items;
    })
);


export function tabsReducer(state: Tab[] | undefined, action: Action) {
    return _tabsReducer(state, action);
}