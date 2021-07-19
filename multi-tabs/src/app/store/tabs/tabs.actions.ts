import { createAction, props } from "@ngrx/store";
import { Tab } from "src/app/tabs";

export const addItem = createAction('[Tabs Component] AddItem', props<{ item: Tab }>());
export const removeItem = createAction('[Tabs Component] RemoveItem', props<{ item: Tab }>());
export const getItems = createAction('[Tabs Component] GetItems');
export const clearItems = createAction('[Tabs Component] ClearItems');