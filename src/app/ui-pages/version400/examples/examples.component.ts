import { Component, OnInit, ViewChild } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';

export interface PeriodicElement {
  screensize: string;
  containersize: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {screensize: '>1480px', containersize: '1240px'},
  {screensize: '1479px - 1280px', containersize: '900px'},
  {screensize: '1279px - 1024px', containersize: '768px'},
];

@Component({
  selector: 'app-examples',
  templateUrl: './examples.component.html',
  styleUrls: ['./examples.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ExamplesComponent implements OnInit {

  displayedColumns: string[] = ['screensize', 'containersize'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit() {
  }


}
