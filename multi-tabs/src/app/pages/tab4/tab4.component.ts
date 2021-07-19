import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.component.html',
  styleUrls: ['./tab4.component.css']
})
export class Tab4Component implements OnInit {

  constructor(private titleService: Title) {
    titleService.setTitle('Tab 4')
  }
  ngOnInit(): void {
  }

}
