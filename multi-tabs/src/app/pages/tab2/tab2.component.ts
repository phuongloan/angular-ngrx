import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-tab2',
  templateUrl: './tab2.component.html',
  styleUrls: ['./tab2.component.css']
})
export class Tab2Component implements OnInit {

  constructor(private titleService: Title) {
    titleService.setTitle('Tab 2')
  }

  ngOnInit(): void {
  }

}
