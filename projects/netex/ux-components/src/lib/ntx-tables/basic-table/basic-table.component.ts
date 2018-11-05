import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ntx-basic-table',
  templateUrl: './basic-table.component.html',
  styleUrls: ['./basic-table.component.scss']
})
export class BasicTableComponent implements OnInit {

  displayedColumns: string[] = ['class', 'variable', 'value'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit() {
  }

}

export interface PaddingElements {
  class: string;
  variable: string;
  value: string;
}

const ELEMENT_DATA: PaddingElements[] = [
  {class: '.utils--padding-0', variable: '$separation-0', value: '0 px'},
  {class: '.utils--padding-top-0', variable: '$separation-0', value: '0 px'},
  {class: '.utils--padding-right-0', variable: '$separation-0', value: '0 px'},
  {class: '.utils--padding-bottom-0', variable: '$separation-0', value: '0 px'},
  {class: '.utils--padding-left-0', variable: '$separation-0', value: '0 px'},

  {class: '.utils--padding-4', variable: '$separation-4', value: '4 px'},
  {class: '.utils--padding-top-4', variable: '$separation-4', value: '4 px'},
  {class: '.utils--padding-right-4', variable: '$separation-4', value: '4 px'},
  {class: '.utils--padding-bottom-4', variable: '$separation-4', value: '4 px'},
  {class: '.utils--padding-left-4', variable: '$separation-4', value: '4 px'},

];
