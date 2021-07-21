import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-mapping',
  templateUrl: './mapping.component.html',
  styleUrls: ['./mapping.component.css']
})
export class MappingComponent implements OnInit {

  constructor(private titleService: Title) {
    titleService.setTitle('Mapping')
  }

  ngOnInit(): void {
  }

}
