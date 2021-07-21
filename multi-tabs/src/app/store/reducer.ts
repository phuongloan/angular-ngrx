import { ActionReducerMap } from '@ngrx/store';
import * as fromCounter from './counter/counter.reducer';
import * as fromTabs from './tabs/tabs.reducer';

import { Tab } from '../tabs';

export interface AppState {
    count: number;
    tabs: Tab[];
}

export const reducers: ActionReducerMap<AppState> = {
    count: fromCounter.counterReducer,
    tabs: fromTabs.tabsReducer,
};
