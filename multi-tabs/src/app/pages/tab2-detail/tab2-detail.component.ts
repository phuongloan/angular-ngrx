import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-tab2-detail',
  templateUrl: './tab2-detail.component.html',
  styleUrls: ['./tab2-detail.component.css']
})
export class Tab2DetailComponent implements OnInit {

  constructor(private titleService: Title) {
    titleService.setTitle('Tab 2 Detail')
  }
  ngOnInit(): void {
  }

}
