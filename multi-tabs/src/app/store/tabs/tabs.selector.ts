import { createSelector, createFeatureSelector } from "@ngrx/store";
import { AppState } from "..";

export const getAppState = createFeatureSelector<AppState>('appState');

export const getTabstate = createSelector(
    getAppState,
    (state: AppState) => {
        return state.tabs
    }
);
export const getLengthOfTabs = createSelector(
    getAppState,
    (state: AppState) => {
        return state.tabs.length
    }
);
export const isInTabs = (url: string) => createSelector(
    getAppState,
    (state: AppState) => {
        let tabIndex = state.tabs.findIndex(t => t.url == url)
        return tabIndex >= 0;
    }
);