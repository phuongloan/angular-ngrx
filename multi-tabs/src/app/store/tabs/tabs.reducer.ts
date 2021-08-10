import { Action, createReducer, on } from "@ngrx/store";
import { addItem, removeItem, clearItems, switchItems, updateTabName, updatePageId, updateChangedStatus } from "./tabs.actions";
import { Tab } from "src/app/tabs";

var initalTabs: Tab[] = [{
    tabName: 'Home',
    url: '/home',
    routerLink: '/home',
    isDefault: true
}];

const _tabsReducer = createReducer(
    initalTabs,
    on(addItem, (state, { item }) => {
        let tabs: Tab[] = [...state];
        const index: number = tabs.findIndex(i => i.url === item.url);
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
        return initalTabs;
    }),
    on(switchItems, (state, { items }) => {
        return items;
    }),
    on(updateTabName, (state, { currentName, newName }) => {
        let tabs: Tab[] = [...state];
        let index: number = tabs.findIndex(t => t.tabName === currentName);
        tabs[index] = { ...state[index], tabName: newName };
        return tabs;
    }),
    on(updatePageId, (state, { tabName, pageId }) => {
        let tabs: Tab[] = [...state];
        let index: number = tabs.findIndex(t => t.tabName === tabName);
        tabs[index] = { ...state[index], pageId: pageId };
        return tabs;
    }),
    on(updateChangedStatus, (state, { tabName, changedStatus }) => {
        let tabs: Tab[] = [...state];
        let index: number = tabs.findIndex(t => t.tabName === tabName);
        tabs[index] = { ...state[index], isChangedData: changedStatus };
        return tabs;
    })
);


export function tabsReducer(state: Tab[] | undefined, action: Action) {
    return _tabsReducer(state, action);
}