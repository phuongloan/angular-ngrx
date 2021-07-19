import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-tab1-detail',
  templateUrl: './tab1-detail.component.html',
  styleUrls: ['./tab1-detail.component.css']
})
export class Tab1DetailComponent implements OnInit {

  constructor(private titleService: Title) {
    titleService.setTitle('Tab 1 Detail')
  }
  ngOnInit(): void {
  }

}
