import { createSelector, createFeatureSelector } from "@ngrx/store";
import { AppState } from "../app.state";

export const getAppState = createFeatureSelector<AppState>('appState');

export const getTabstate = createSelector(
    getAppState,
    (state: AppState) => {
        state.tabs
        return state.tabs
    }
);