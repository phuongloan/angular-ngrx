import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'multi-tabs';
  events: string[] = [];
  opened: boolean = true;
  constructor(private router: Router) {
  }
  public toggleMenu() {
    this.opened = !this.opened;
  }

  ngOnInit() {

  }
}