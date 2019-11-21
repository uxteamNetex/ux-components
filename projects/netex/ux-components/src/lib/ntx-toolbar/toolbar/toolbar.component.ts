import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ntx-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  @Input() apps: any[];

  constructor() { }

  ngOnInit() {
  }

}
