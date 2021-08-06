import { Action, createReducer, on } from "@ngrx/store";
import { addPage, updatePageData, removePageData } from "./pages.actions";

var initalPages: any[] = [];

const _pagesReducer = createReducer(
    initalPages,
    on(addPage, (state, { page }) => {
        let pages: any[] = [...state];
        pages.push(page);
        return pages;
    }),
    on(updatePageData, (state, { page }) => {
        let pages: any[] = [...state];
        const index: number = pages.findIndex(p => p.pageId == page.pageId);
        if (index > -1) {
            pages.splice(index, 1);
            //pages[index] = { ...page[index], page }
        }
        pages.push(page);
        return pages;
    }),
    on(removePageData, (state, { pageId }) => {
        let pages: any[] = [...state];
        const index: number = pages.findIndex(p => p.pageId === pageId);
        if (index > -1) {
            pages.splice(index, 1);
        }
        return pages;
    })
);


export function pagesReducer(state: any[] | undefined, action: Action) {
    return _pagesReducer(state, action);
}