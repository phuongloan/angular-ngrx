import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
// import { TabsService } from '../tabs.service';
//import { getItems } from '../store/tabs/tabs.actions';
import { getTabs } from '../store/tabs/tabs.selector';
import { Tab } from '../tabs';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  //tabs$: Observable<Tab[]>;
  //tabs: Tab[] = [];
  // ts$ = this.store.pipe(select(selectBooks));

  constructor(private store: Store) {
    //this.tabs$ = store.select('tabs');
    console.log('contructor', store.select(state => state))
  }
  tabs = this.store.pipe(select(getTabs));

  ngOnInit(): void {
    //console.log(this.store.select(getTabs()))
  }

}
