import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'ntx-toolbar-searchbox',
  templateUrl: './toolbar-searchbox.component.html',
  styleUrls: ['./toolbar-searchbox.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ToolbarSearchboxComponent implements OnInit {

  @Input() apps: any[];
  @Input() label: string;
  @Input() src: string;

  constructor() { }

  ngOnInit() {
  }

}
