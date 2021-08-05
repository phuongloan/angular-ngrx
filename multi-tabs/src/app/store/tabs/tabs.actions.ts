import { createAction, props } from "@ngrx/store";
import { Tab } from "src/app/tabs";

export const addItem = createAction('[Tabs Component] AddItem', props<{ item: Tab }>());
export const removeItem = createAction('[Tabs Component] RemoveItem', props<{ item: Tab }>());
export const clearItems = createAction('[Tabs Component] ClearItems');
export const switchItems = createAction('[Tabs Component] SwitchItems', props<{ items: Tab[] }>());
export const updateTabName = createAction('[Tabs Component] UpdateTabName', props<{ currentName: string, newName: string }>());
