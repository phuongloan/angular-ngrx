import { createSelector, createFeatureSelector } from "@ngrx/store";
import { AppState } from "..";

export const getAppState = createFeatureSelector<AppState>('appState');

export const getTabstate = createSelector(
    getAppState,
    (state: AppState) => {
        return state.tabs
    }
);