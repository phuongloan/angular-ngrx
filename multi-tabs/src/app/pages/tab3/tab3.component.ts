import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-tab3',
  templateUrl: './tab3.component.html',
  styleUrls: ['./tab3.component.css']
})
export class Tab3Component implements OnInit {

  constructor(private titleService: Title) {
    titleService.setTitle('Tab 3')
  }

  ngOnInit(): void {
  }

}
