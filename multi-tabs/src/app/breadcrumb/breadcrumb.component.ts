import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { filter, map } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { Tab } from '../tabs';
import { addItem } from '../store/tabs/tabs.actions';
import { Observable } from 'rxjs';
import { Router, Event, NavigationStart, NavigationEnd, NavigationError, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BreadcrumbComponent implements OnInit {
  title$!: Observable<{ [key: string]: string }>

  constructor(private router: Router,
    private activatedRoute: ActivatedRoute,
    private titleService: Title,
    private store: Store<{ tabs: Tab[] }>) {
    router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map((event) => {
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
      }
      if (data['breadCrumb']) {
        this.breadCrumbs = [...data['breadCrumb']];
      }
    });
  }

  breadCrumbs: any[] = [];
  ngOnInit() {

  }

}
