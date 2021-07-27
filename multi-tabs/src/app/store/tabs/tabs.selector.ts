import { createSelector, createFeatureSelector } from "@ngrx/store";
import { AppState } from "../app.state";

export const getAppState = createFeatureSelector<AppState>('appState');

export const getTabstate = createSelector(
    getAppState,
    (state: AppState) => {
        return state.tabs
    }
);
export const getCurrentTab = createSelector(
    getAppState,
    (state: AppState) => {
        return state.tabs[state.tabs.length - 1]
    }
)