import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-notice',
  templateUrl: './notice.component.html',
  styleUrls: ['./notice.component.css']
})
export class NoticeComponent implements OnInit {

  constructor(private titleService: Title) {
    titleService.setTitle('Notice')
  }
  ngOnInit(): void {
  }

}
