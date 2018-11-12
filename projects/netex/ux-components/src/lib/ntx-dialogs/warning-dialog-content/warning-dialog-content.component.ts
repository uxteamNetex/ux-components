import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'ntx-warning-dialog-content',
  templateUrl: './warning-dialog-content.component.html',
  styleUrls: ['./warning-dialog-content.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class WarningDialogContentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
