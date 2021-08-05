import { createAction, props } from "@ngrx/store";

export const addPage = createAction('[Pages] addPage', props<{ page: any }>());
export const updatePageData = createAction('[Pages] updatePageData', props<{ page: any }>());
export const removePageData = createAction('[Pages] removePageData', props<{ pageId: string }>());