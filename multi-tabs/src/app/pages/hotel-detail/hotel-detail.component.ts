import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-hotel-detail',
  templateUrl: './hotel-detail.component.html',
  styleUrls: ['./hotel-detail.component.css']
})
export class HotelDetailComponent implements OnInit {

  constructor(private titleService: Title) {
    titleService.setTitle('Hotel Detail')
  }
  ngOnInit(): void {
  }

}
