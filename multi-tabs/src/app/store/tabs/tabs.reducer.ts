import { Action, createReducer, on } from "@ngrx/store";
import { addItem, removeItem, clearItems, updateDataItem } from "./tabs.actions";
import { Tab } from "src/app/tabs";

var initalTabs: Tab[] = [];

const _tabsReducer = createReducer(
    initalTabs,
    on(addItem, (state, { item }) => {
        let tabs: Tab[] = [...state];
        const index: number = tabs.findIndex(i => i.routName === item.routName);
        let tab: Tab;
        if (index < 0) {
            tabs.push(item);
        }
        return tabs;
    }),
    on(removeItem, (state, { item }) => {
        let tabs: Tab[] = [...state];
        const index: number = tabs.findIndex(i => i.routName === item.routName);
        if (index > -1) {
            tabs.splice(index, 1);
        }
        return tabs;
    }),
    on(clearItems, (state) => {
        return [];
    }),
    on(updateDataItem, (state, { item, data }) => {
        let tabs: Tab[] = [...state];
        const index: number = tabs.findIndex(i => i.routName === item.routName);
        tabs[index] = { ...tabs[index], tabData: data };
        return tabs;
    })
);


export function tabsReducer(state: Tab[] | undefined, action: Action) {
    return _tabsReducer(state, action);
}