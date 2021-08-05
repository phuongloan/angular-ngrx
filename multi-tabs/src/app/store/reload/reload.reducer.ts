import { Action, createReducer, on } from "@ngrx/store";
import { updateReload } from "./reload.actions";

var initalState: boolean = false;

const _reloadReducer = createReducer(
    initalState,
    on(updateReload, (state, { isReload }) => {
        return isReload;
    })
);


export function reloadReducer(state: boolean | undefined, action: Action) {
    return _reloadReducer(state, action);
}