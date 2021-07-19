import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.component.html',
  styleUrls: ['./tab1.component.css']
})
export class Tab1Component implements OnInit {

  constructor(private titleService: Title) {
    titleService.setTitle('Tab 1')
  }

  ngOnInit(): void {
  }

}
