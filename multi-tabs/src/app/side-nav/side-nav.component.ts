import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { addItem } from '../store/tabs/tabs.actions';
import { Tab, Menu } from '../tabs';
import { NestedTreeControl } from '@angular/cdk/tree';
import { MatTreeNestedDataSource } from '@angular/material/tree';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
  @Input() isExpanded!: boolean;
  @Output() toggleMenu = new EventEmitter();

  menu = Menu;
  constructor(private store: Store<{ tabs: Tab[] }>, private router: Router, private route: ActivatedRoute, private titleService: Title) {
    router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        let routerParams = null;
        let routerLink: string = val.url.split('?')[0];
        route.queryParams.subscribe(params => {
          routerParams = params
        }
        );
        this.addItemToTabs({ tabName: titleService.getTitle(), routName: val.url, routerParams, routerLink, tabData: null });
      }
    });
    this.dataSource.data = Menu;

  }
  treeControl = new NestedTreeControl<any>(node => node.children);
  dataSource = new MatTreeNestedDataSource<any>();


  hasChild = (_: number, node: any) => !!node.children && node.children.length > 0;
  ngOnInit(): void {
  }

  addItemToTabs(item: Tab) {
    this.store.dispatch(addItem({ item }))
  }
}
