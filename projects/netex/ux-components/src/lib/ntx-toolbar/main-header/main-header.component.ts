import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ntx-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss']
})
export class MainHeaderComponent implements OnInit {

  @Input() src: string;
  @Input() apps: any[];

  constructor() { }

  ngOnInit() {
    
  }

}
