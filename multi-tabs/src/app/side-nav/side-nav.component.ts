import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Menu } from '../tabs';
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
  constructor() {
    this.dataSource.data = Menu;
  }
  treeControl = new NestedTreeControl<any>(node => node.children);
  dataSource = new MatTreeNestedDataSource<any>();


  hasChild = (_: number, node: any) => !!node.children && node.children.length > 0;
  ngOnInit(): void {
  }

}
