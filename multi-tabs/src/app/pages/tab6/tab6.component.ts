import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-tab6',
  templateUrl: './tab6.component.html',
  styleUrls: ['./tab6.component.css']
})
export class Tab6Component implements OnInit {

  constructor(private titleService: Title) {
    titleService.setTitle('Tab 6')
  }
  ngOnInit(): void {
  }

}
