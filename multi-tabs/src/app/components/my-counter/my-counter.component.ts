import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { increment, decrement, reset } from '../../store/counter/counter.actions';
import { getCount } from '../../store/counter/counter.selector';

@Component({
    selector: 'app-my-counter',
    templateUrl: './my-counter.component.html',
})
export class MyCounterComponent {
    count$: Observable<number>;

    constructor(private store: Store<{ count: number }>) {
        this.count$ = this.store.select(getCount);
    }

    increment() {
        this.store.dispatch(increment());
    }

    decrement() {
        this.store.dispatch(decrement());
    }

    reset() {
        this.store.dispatch(reset());
    }
}
