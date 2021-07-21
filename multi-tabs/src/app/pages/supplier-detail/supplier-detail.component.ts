import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-supplier-detail',
  templateUrl: './supplier-detail.component.html',
  styleUrls: ['./supplier-detail.component.css']
})
export class SupplierDetailComponent implements OnInit {

  constructor(private titleService: Title) {
    titleService.setTitle('Supplier Detail')
  }
  ngOnInit(): void {
  }

}
