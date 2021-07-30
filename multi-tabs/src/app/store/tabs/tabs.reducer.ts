import { Action, createReducer, on } from "@ngrx/store";
import { addItem, removeItem, clearItems, switchItems } from "./tabs.actions";
import { Tab } from "src/app/tabs";

var initalTabs: Tab[] = [];

const _tabsReducer = createReducer(
    initalTabs,
    on(addItem, (state, { item }) => {
        let tabs: Tab[] = [...state];
        const index: number = tabs.findIndex(i => i.url === item.url);
        let tab: Tab;
        if (index < 0) {
            tabs.push(item);
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