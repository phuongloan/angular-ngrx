import { ActionReducer, INIT, UPDATE } from "@ngrx/store";
import { AppState } from "..";
import { HostListener } from '@angular/core';

export const hydrationMetaReducer = (
    reducer: ActionReducer<AppState>
): ActionReducer<AppState> => {
    return (state, action) => {
        if (action.type === INIT || action.type === UPDATE) {
            const storageValue = localStorage.getItem("state");
            let pageReloaded = window.performance
                .getEntriesByType('navigation')
                .map((nav) => (nav as any).type)
                .includes('reload');
            if (storageValue && pageReloaded) {
                try {
                    return JSON.parse(storageValue);
                } catch {
                    localStorage.removeItem("state");
                }
            }
        }
        const nextState = reducer(state, action);
        localStorage.setItem("state", JSON.stringify(nextState));
        return nextState;
    };
};
