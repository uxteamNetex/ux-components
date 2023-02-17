import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ntx-main-header-apps',
  templateUrl: './main-header-apps.component.html',
  styleUrls: ['./main-header-apps.component.scss']
})
export class MainHeaderAppsComponent implements OnInit {

  @Input() src: string;
  @Input() apps: any[];

  constructor() { }

  ngOnInit() {
    
  }

}
