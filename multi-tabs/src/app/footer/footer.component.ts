import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Tab } from '../tabs';
import { Observable } from 'rxjs';
import * as fromRoot from '../store/tabs/tabs.selector';
import { removeItem } from '../store/tabs/tabs.actions';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  tabs!: Tab[];

  constructor(private store: Store<{ tabs: Tab[] }>, private router: Router) {
  }
  ngOnInit(): void {
    this.store.select(fromRoot.getTabstate).subscribe((tabs: Tab[]) => {
      this.tabs = [...tabs];
    });
  }
  remove(item: Tab, index: number) {
    if (index === this.tabs.length - 1) {
      if (index === 0) return;
      this.router.navigate([this.tabs[this.tabs.length - 2].routerLink]);
    }
    this.store.dispatch(removeItem({ item }))
  }
  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.tabs, event.previousIndex, event.currentIndex);
  }
}
