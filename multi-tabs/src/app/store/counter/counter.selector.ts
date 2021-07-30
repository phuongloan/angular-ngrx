import { createSelector, createFeatureSelector } from "@ngrx/store";
import { AppState } from "..";

export const getAppState = createFeatureSelector<AppState>('appState');

export const getCount = createSelector(
    getAppState,
    (state: AppState) => {
        return state.count
    }
);