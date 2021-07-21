import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-suppllier',
  templateUrl: './suppllier.component.html',
  styleUrls: ['./suppllier.component.css']
})
export class SuppllierComponent implements OnInit {

  constructor(private titleService: Title) {
    titleService.setTitle('Suppllier')
  }

  ngOnInit(): void {
  }

}
