import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
// import { TabsService } from '../tabs.service';
import { addItem } from '../store/tabs/tabs.actions';
import { Tab, Menu } from '../tabs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  menu = Menu;
  name: any;
  tabs$: Observable<Tab[]>;
  constructor(private store: Store<{ tabs: Tab[] }>, private router: Router, private route: ActivatedRoute, private titleService: Title) {
    this.tabs$ = store.select('tabs');
    router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        let routerParams = null;
        let routerLink: string = val.url.split('?')[0];
        route.queryParams.subscribe(params => {
          routerParams = params;
          console.log('params', params)
        }
        );
        this.addItemToTabs({ tabName: titleService.getTitle(), url: val.url, routerParams, routerLink, tabData: null });
      }
    });

  }

  ngOnInit(): void {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(() => {
        let child = this.route.firstChild;
        while (child) {
          if (child.firstChild) {
            child = child.firstChild;
          } else if (child.snapshot.data && child.snapshot.data['title']) {
            return child.snapshot.data['title'];
          } else {
            return null;
          }
        }
        return null;
      })
    ).subscribe((data: any) => {
      if (data) {
        this.titleService.setTitle(data + ' - Website Name');
      }
    });
  }

  addItemToTabs(item: Tab) {
    this.store.dispatch(addItem({ item }))
  }
}
