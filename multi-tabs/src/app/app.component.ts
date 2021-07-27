import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'multi-tabs';
  events: string[] = [];
  opened: boolean = true;

  public toggleMenu() {
    this.opened = !this.opened;
  }
}
