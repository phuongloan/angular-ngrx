import { createSelector, createFeatureSelector } from "@ngrx/store";
import { AppState } from "..";

export const getAppState = createFeatureSelector<AppState>('appState');

export const getPageState = (pageId: string) => createSelector(
    getAppState,
    (state: AppState) => {
        let page = state.pages.find(p => p.pageId == pageId)
        return page;
    }
);