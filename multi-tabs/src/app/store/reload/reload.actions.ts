import { createAction, props } from "@ngrx/store";

export const updateReload = createAction('[Reload] updateReload', props<{ isReload: boolean }>());