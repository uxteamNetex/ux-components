import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ntx-toolbar-back',
  templateUrl: './toolbar-back.component.html',
  styleUrls: ['./toolbar-back.component.scss']
})
export class ToolbarBackComponent implements OnInit {

  @Input() apps: any[];

  constructor() { }

  ngOnInit() {
  }

}
