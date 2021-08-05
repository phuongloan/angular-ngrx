import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Tab } from '../tabs';
import { Observable } from 'rxjs';
import * as fromRoot from '../store/tabs/tabs.selector';
import { removeItem, switchItems } from '../store/tabs/tabs.actions';
import { removePageData } from '../store/pages/pages.actions';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  tabs!: Tab[];
  isFitInkBarToContent: boolean = true;
  constructor(private store: Store<{ tabs: Tab[] }>, private router: Router) {
  }
  ngOnInit(): void {
    this.store.select(fromRoot.getTabstate).subscribe((tabs: Tab[]) => {
      this.tabs = [...tabs];
    });
  }
  remove(item: Tab, index: number, isActive: boolean) {
    if (isActive) {
      if (this.tabs.length === 1) return;
      this.router.navigate([this.tabs[(index < this.tabs.length - 1) ? index + 1 : index - 1].routerLink]);
    }
    this.store.dispatch(removeItem({ item }))
    if (item.pageId)
      this.store.dispatch(removePageData({ pageId: item.pageId }))
  }
  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.tabs, event.previousIndex, event.currentIndex);
    this.store.dispatch(switchItems({ items: this.tabs }))
  }
}
