import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'ntx-simple-dialog-content',
  templateUrl: './simple-dialog-content.component.html',
  styleUrls: ['./simple-dialog-content.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SimpleDialogContentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
