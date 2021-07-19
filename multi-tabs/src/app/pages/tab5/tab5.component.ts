import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-tab5',
  templateUrl: './tab5.component.html',
  styleUrls: ['./tab5.component.css']
})
export class Tab5Component implements OnInit {

  constructor(private titleService: Title) {
    titleService.setTitle('Tab 5')
  }
  ngOnInit(): void {
  }

}
