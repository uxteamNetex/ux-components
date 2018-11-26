import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  class: string;
  variable: string;
  value: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {class: '.utils--margin-0', variable: '$separation-0', value: '0 px'},
  {class: '.utils--margin-top-0', variable: '$separation-0', value: '0 px'},
  {class: '.utils--margin-right-0', variable: '$separation-0', value: '0 px'},
  {class: '.utils--margin-bottom-0', variable: '$separation-0', value: '0 px'},
  {class: '.utils--margin-left-0', variable: '$separation-0', value: '0 px'},

  {class: '.utils--margin-4', variable: '$separation-4', value: '4 px'},
  {class: '.utils--margin-top-4', variable: '$separation-4', value: '4 px'},
  {class: '.utils--margin-right-4', variable: '$separation-4', value: '4 px'},
  {class: '.utils--margin-bottom-4', variable: '$separation-4', value: '4 px'},
  {class: '.utils--margin-left-4', variable: '$separation-4', value: '4 px'},

  {class: '.utils--margin-8', variable: '$separation-8', value: '8 px'},
  {class: '.utils--margin-top-8', variable: '$separation-8', value: '8 px'},
  {class: '.utils--margin-right-8', variable: '$separation-8', value: '8 px'},
  {class: '.utils--margin-bottom-8', variable: '$separation-8', value: '8 px'},
  {class: '.utils--margin-left-8', variable: '$separation-8', value: '8 px'},

  {class: '.utils--margin-12', variable: '$separation-12', value: '12 px'},
  {class: '.utils--margin-top-12', variable: '$separation-12', value: '12 px'},
  {class: '.utils--margin-right-12', variable: '$separation-12', value: '12 px'},
  {class: '.utils--margin-bottom-12', variable: '$separation-12', value: '12 px'},
  {class: '.utils--margin-left-12', variable: '$separation-12', value: '12 px'},

  {class: '.utils--margin-16', variable: '$separation-16', value: '16 px'},
  {class: '.utils--margin-top-16', variable: '$separation-16', value: '16 px'},
  {class: '.utils--margin-right-16', variable: '$separation-16', value: '16 px'},
  {class: '.utils--margin-bottom-16', variable: '$separation-16', value: '16 px'},
  {class: '.utils--margin-left-16', variable: '$separation-16', value: '16 px'},

  {class: '.utils--margin-20', variable: '$separation-20', value: '20 px'},
  {class: '.utils--margin-top-20', variable: '$separation-20', value: '20 px'},
  {class: '.utils--margin-right-20', variable: '$separation-20', value: '20 px'},
  {class: '.utils--margin-bottom-20', variable: '$separation-20', value: '20 px'},
  {class: '.utils--margin-left-20', variable: '$separation-20', value: '20 px'},

  {class: '.utils--margin-24', variable: '$separation-24', value: '24 px'},
  {class: '.utils--margin-top-24', variable: '$separation-24', value: '24 px'},
  {class: '.utils--margin-right-24', variable: '$separation-24', value: '24 px'},
  {class: '.utils--margin-bottom-24', variable: '$separation-24', value: '24 px'},
  {class: '.utils--margin-left-24', variable: '$separation-24', value: '24 px'},

  {class: '.utils--margin-28', variable: '$separation-28', value: '28 px'},
  {class: '.utils--margin-top-28', variable: '$separation-28', value: '28 px'},
  {class: '.utils--margin-right-28', variable: '$separation-28', value: '28 px'},
  {class: '.utils--margin-bottom-28', variable: '$separation-28', value: '28 px'},
  {class: '.utils--margin-left-28', variable: '$separation-28', value: '28 px'},

  {class: '.utils--margin-32', variable: '$separation-32', value: '32 px'},
  {class: '.utils--margin-top-32', variable: '$separation-32', value: '32 px'},
  {class: '.utils--margin-right-32', variable: '$separation-32', value: '32 px'},
  {class: '.utils--margin-bottom-32', variable: '$separation-32', value: '32 px'},
  {class: '.utils--margin-left-32', variable: '$separation-32', value: '32 px'},

  {class: '.utils--margin-36', variable: '$separation-36', value: '36 px'},
  {class: '.utils--margin-top-36', variable: '$separation-36', value: '36 px'},
  {class: '.utils--margin-right-36', variable: '$separation-36', value: '36 px'},
  {class: '.utils--margin-bottom-36', variable: '$separation-36', value: '36 px'},
  {class: '.utils--margin-left-36', variable: '$separation-36', value: '36 px'},

  {class: '.utils--margin-40', variable: '$separation-40', value: '40 px'},
  {class: '.utils--margin-top-40', variable: '$separation-40', value: '40 px'},
  {class: '.utils--margin-right-40', variable: '$separation-40', value: '40 px'},
  {class: '.utils--margin-bottom-40', variable: '$separation-40', value: '40 px'},
  {class: '.utils--margin-left-40', variable: '$separation-40', value: '40 px'},

  {class: '.utils--margin-44', variable: '$separation-44', value: '44 px'},
  {class: '.utils--margin-top-44', variable: '$separation-44', value: '44 px'},
  {class: '.utils--margin-right-44', variable: '$separation-44', value: '44 px'},
  {class: '.utils--margin-bottom-44', variable: '$separation-44', value: '44 px'},
  {class: '.utils--margin-left-44', variable: '$separation-44', value: '44 px'},

  {class: '.utils--margin-48', variable: '$separation-48', value: '48 px'},
  {class: '.utils--margin-top-48', variable: '$separation-48', value: '48 px'},
  {class: '.utils--margin-right-48', variable: '$separation-48', value: '48 px'},
  {class: '.utils--margin-bottom-48', variable: '$separation-48', value: '48 px'},
  {class: '.utils--margin-left-48', variable: '$separation-48', value: '48 px'},

  {class: '.utils--margin-60', variable: '$separation-60', value: '60 px'},
  {class: '.utils--margin-top-60', variable: '$separation-60', value: '60 px'},
  {class: '.utils--margin-right-60', variable: '$separation-60', value: '60 px'},
  {class: '.utils--margin-bottom-60', variable: '$separation-60', value: '60 px'},
  {class: '.utils--margin-left-60', variable: '$separation-60', value: '60 px'},

  {class: '.utils--margin-80', variable: '$separation-80', value: '80 px'},
  {class: '.utils--margin-top-80', variable: '$separation-80', value: '80 px'},
  {class: '.utils--margin-right-80', variable: '$separation-80', value: '80 px'},
  {class: '.utils--margin-bottom-80', variable: '$separation-80', value: '80 px'},
  {class: '.utils--margin-left-80', variable: '$separation-80', value: '80 px'},

  {class: '.utils--margin-100', variable: '$separation-100', value: '100 px'},
  {class: '.utils--margin-top-100', variable: '$separation-100', value: '100 px'},
  {class: '.utils--margin-right-100', variable: '$separation-100', value: '100 px'},
  {class: '.utils--margin-bottom-100', variable: '$separation-100', value: '100 px'},
  {class: '.utils--margin-left-100', variable: '$separation-100', value: '100 px'},
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
