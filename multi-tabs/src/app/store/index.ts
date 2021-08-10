import { ActionReducerMap, MetaReducer } from "@ngrx/store";
import * as fromCounter from './counter/counter.reducer';
import * as fromTabs from './tabs/tabs.reducer';
import * as fromPages from './pages/pages.reducer';
import * as fromReload from './reload/reload.reducer'
import { hydrationMetaReducer } from "./hydration/hydration.reducer";

import { Tab } from '../tabs';

export interface AppState {
    count: number;
    tabs: Tab[];
    pages: any[];
    //isReload: boolean;
}

export const reducers: ActionReducerMap<AppState> = {
    count: fromCounter.counterReducer,
    tabs: fromTabs.tabsReducer,
    pages: fromPages.pagesReducer,
    //isReload: fromReload.reloadReducer
};

export const metaReducers: MetaReducer[] = [
    hydrationMetaReducer
]