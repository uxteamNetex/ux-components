import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  class: string;
  variable: string;
  value: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
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

  {class: '.utils--padding-8', variable: '$separation-8', value: '8 px'},
  {class: '.utils--padding-top-8', variable: '$separation-8', value: '8 px'},
  {class: '.utils--padding-right-8', variable: '$separation-8', value: '8 px'},
  {class: '.utils--padding-bottom-8', variable: '$separation-8', value: '8 px'},
  {class: '.utils--padding-left-8', variable: '$separation-8', value: '8 px'},

  {class: '.utils--padding-12', variable: '$separation-12', value: '12 px'},
  {class: '.utils--padding-top-12', variable: '$separation-12', value: '12 px'},
  {class: '.utils--padding-right-12', variable: '$separation-12', value: '12 px'},
  {class: '.utils--padding-bottom-12', variable: '$separation-12', value: '12 px'},
  {class: '.utils--padding-left-12', variable: '$separation-12', value: '12 px'},

  {class: '.utils--padding-16', variable: '$separation-16', value: '16 px'},
  {class: '.utils--padding-top-16', variable: '$separation-16', value: '16 px'},
  {class: '.utils--padding-right-16', variable: '$separation-16', value: '16 px'},
  {class: '.utils--padding-bottom-16', variable: '$separation-16', value: '16 px'},
  {class: '.utils--padding-left-16', variable: '$separation-16', value: '16 px'},

  {class: '.utils--padding-20', variable: '$separation-20', value: '20 px'},
  {class: '.utils--padding-top-20', variable: '$separation-20', value: '20 px'},
  {class: '.utils--padding-right-20', variable: '$separation-20', value: '20 px'},
  {class: '.utils--padding-bottom-20', variable: '$separation-20', value: '20 px'},
  {class: '.utils--padding-left-20', variable: '$separation-20', value: '20 px'},

  {class: '.utils--padding-24', variable: '$separation-24', value: '24 px'},
  {class: '.utils--padding-top-24', variable: '$separation-24', value: '24 px'},
  {class: '.utils--padding-right-24', variable: '$separation-24', value: '24 px'},
  {class: '.utils--padding-bottom-24', variable: '$separation-24', value: '24 px'},
  {class: '.utils--padding-left-24', variable: '$separation-24', value: '24 px'},

  {class: '.utils--padding-28', variable: '$separation-28', value: '28 px'},
  {class: '.utils--padding-top-28', variable: '$separation-28', value: '28 px'},
  {class: '.utils--padding-right-28', variable: '$separation-28', value: '28 px'},
  {class: '.utils--padding-bottom-28', variable: '$separation-28', value: '28 px'},
  {class: '.utils--padding-left-28', variable: '$separation-28', value: '28 px'},

  {class: '.utils--padding-32', variable: '$separation-32', value: '32 px'},
  {class: '.utils--padding-top-32', variable: '$separation-32', value: '32 px'},
  {class: '.utils--padding-right-32', variable: '$separation-32', value: '32 px'},
  {class: '.utils--padding-bottom-32', variable: '$separation-32', value: '32 px'},
  {class: '.utils--padding-left-32', variable: '$separation-32', value: '32 px'},

  {class: '.utils--padding-36', variable: '$separation-36', value: '36 px'},
  {class: '.utils--padding-top-36', variable: '$separation-36', value: '36 px'},
  {class: '.utils--padding-right-36', variable: '$separation-36', value: '36 px'},
  {class: '.utils--padding-bottom-36', variable: '$separation-36', value: '36 px'},
  {class: '.utils--padding-left-36', variable: '$separation-36', value: '36 px'},

  {class: '.utils--padding-40', variable: '$separation-40', value: '40 px'},
  {class: '.utils--padding-top-40', variable: '$separation-40', value: '40 px'},
  {class: '.utils--padding-right-40', variable: '$separation-40', value: '40 px'},
  {class: '.utils--padding-bottom-40', variable: '$separation-40', value: '40 px'},
  {class: '.utils--padding-left-40', variable: '$separation-40', value: '40 px'},

  {class: '.utils--padding-44', variable: '$separation-44', value: '44 px'},
  {class: '.utils--padding-top-44', variable: '$separation-44', value: '44 px'},
  {class: '.utils--padding-right-44', variable: '$separation-44', value: '44 px'},
  {class: '.utils--padding-bottom-44', variable: '$separation-44', value: '44 px'},
  {class: '.utils--padding-left-44', variable: '$separation-44', value: '44 px'},

  {class: '.utils--padding-48', variable: '$separation-48', value: '48 px'},
  {class: '.utils--padding-top-48', variable: '$separation-48', value: '48 px'},
  {class: '.utils--padding-right-48', variable: '$separation-48', value: '48 px'},
  {class: '.utils--padding-bottom-48', variable: '$separation-48', value: '48 px'},
  {class: '.utils--padding-left-48', variable: '$separation-48', value: '48 px'},

  {class: '.utils--padding-60', variable: '$separation-60', value: '60 px'},
  {class: '.utils--padding-top-60', variable: '$separation-60', value: '60 px'},
  {class: '.utils--padding-right-60', variable: '$separation-60', value: '60 px'},
  {class: '.utils--padding-bottom-60', variable: '$separation-60', value: '60 px'},
  {class: '.utils--padding-left-60', variable: '$separation-60', value: '60 px'},

  {class: '.utils--padding-80', variable: '$separation-80', value: '80 px'},
  {class: '.utils--padding-top-80', variable: '$separation-80', value: '80 px'},
  {class: '.utils--padding-right-80', variable: '$separation-80', value: '80 px'},
  {class: '.utils--padding-bottom-80', variable: '$separation-80', value: '80 px'},
  {class: '.utils--padding-left-80', variable: '$separation-80', value: '80 px'},

  {class: '.utils--padding-100', variable: '$separation-100', value: '100 px'},
  {class: '.utils--padding-top-100', variable: '$separation-100', value: '100 px'},
  {class: '.utils--padding-right-100', variable: '$separation-100', value: '100 px'},
  {class: '.utils--padding-bottom-100', variable: '$separation-100', value: '100 px'},
  {class: '.utils--padding-left-100', variable: '$separation-100', value: '100 px'},
];

@Component({
  selector: 'app-examples',
  templateUrl: './examples.component.html',
  styleUrls: ['./examples.component.scss']
})
export class ExamplesComponent implements OnInit {

  displayedColumns: string[] = ['class', 'variable', 'value'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit() {
  }

}

