import { Action, createReducer, on } from "@ngrx/store";
import { addItem, removeItem, getItems, clearItems } from "./tabs.actions";
import { Tab } from "src/app/tabs";

var initalTabs: Tab[] = [];

const _tabsReducer = createReducer(
    initalTabs,
    on(addItem, (state, { item }) => {
        let tabs: Tab[] = [...state];

        const index: number = tabs.findIndex(i => i.routName === item.routName);
        if (index > -1) {
            tabs.splice(index, 1);
        }
        tabs.push(item)
        console.log('state ', state, tabs);

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
    on(getItems, (state) => state),
    on(clearItems, (state) => [])
);


export function tabsReducer(state: Tab[] | undefined, action: Action) {
    return _tabsReducer(state, action);
}