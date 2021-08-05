import { Action, createReducer, on } from "@ngrx/store";
import { addPage, updatePageData } from "./pages.actions";

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
        }
        console.log(page.count)
        pages.push(page);
        return pages;
    })
);


export function pagesReducer(state: any[] | undefined, action: Action) {
    return _pagesReducer(state, action);
}