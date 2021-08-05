import { createSelector, createFeatureSelector } from "@ngrx/store";
import { AppState } from "..";

export const getAppState = createFeatureSelector<AppState>('appState');

export const getIsReload = createSelector(
    getAppState,
    (state: AppState) => {
        return state.isReload
    }
);