import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { Tab } from '../tabs';
import { addItem } from '../store/tabs/tabs.actions';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BreadcrumbComponent implements OnInit {
  tabName: string = '';
  url: string = '';
  routerParams: any;
  routerLink: string = '';
  title$!: Observable<{ [key: string]: string }>

  constructor(private router: Router,
    private activatedRoute: ActivatedRoute,
    private titleService: Title,
    private store: Store<{ tabs: Tab[] }>) {
    router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map((event) => {
        if (event instanceof NavigationEnd) {
          this.url = event.url == '/' ? '/supplier/index' : event.url;
          this.routerLink = this.url.split('?')[0];
          this.routerParams = null;
          activatedRoute.queryParams.subscribe(params => {
            this.routerParams = params;
          })
        }
        let child = activatedRoute.firstChild;

        while (child) {
          if (child.firstChild) {
            child = child.firstChild;

          } else if (child.snapshot.data) {
            return child.snapshot.data;
          } else {
            return null;
          }
        }
        return null;
      })
    ).subscribe((data: any) => {
      if (data['title']) {
        this.titleService.setTitle('OMC Admin - ' + data['title']);
        this.tabName = data['title'];
      }
      if (data['breadCrumb']) {
        this.breadCrumbs = [...data['breadCrumb']];
      }
      this.addItemToTabs({ tabName: this.tabName, url: this.url, routerParams: this.routerParams, routerLink: this.routerLink });
    });
  }

  breadCrumbs: any[] = [];
  ngOnInit() {

  }

  addItemToTabs(item: Tab) {
    this.store.dispatch(addItem({ item }))
  }
}
