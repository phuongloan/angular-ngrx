import { createSelector, createFeatureSelector } from "@ngrx/store";
import { AppState } from "../app.state";
import { Tab } from "src/app/tabs";

export const getTabs = createSelector(
    (state: AppState) => state.tabs,
    (tabs: Tab[]) => tabs
)