import { ActionReducer, INIT, UPDATE } from "@ngrx/store";
import { AppState } from "..";

export const hydrationMetaReducer = (
    reducer: ActionReducer<AppState>
): ActionReducer<AppState> => {
    return (state, action) => {
        if (action.type === INIT || action.type === UPDATE) {
            const storageValue = localStorage.getItem("state");
            if (storageValue) {
                try {
                    let tabs = JSON.parse(storageValue)
                    let next: AppState = {
                        tabs: tabs,
                        count: 0,
                        pages: []
                    }
                    return next;
                } catch {
                    localStorage.removeItem("state");
                }
            }
        }
        const nextState = reducer(state, action);
        if (action.type.indexOf('[Tabs Component]') !== -1) {
            localStorage.setItem("state", JSON.stringify(nextState.tabs));
        }
        return nextState;
    };
};
