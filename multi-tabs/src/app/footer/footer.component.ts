import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Tab } from '../tabs';
import { Observable } from 'rxjs';
import * as fromRoot from '../store/tabs/tabs.selector';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  tabs!: Observable<Tab[]>;

  constructor(private store: Store<{ tabs: Tab[] }>) {
  }
  ngOnInit(): void {
    this.tabs = this.store.pipe(select(fromRoot.getTabstate));
  }

}
