import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent implements OnInit {

  constructor(private titleService: Title) {
    titleService.setTitle('Hotel')
  }

  ngOnInit(): void {
  }

}
