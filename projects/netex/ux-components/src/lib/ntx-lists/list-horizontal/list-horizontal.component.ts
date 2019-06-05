import { Component, OnInit, ViewEncapsulation } from '@angular/core';

export interface Section {
  title: string;
  subtitle: string;
}

@Component({
  selector: 'ntx-list-horizontal',
  templateUrl: './list-horizontal.component.html',
  styleUrls: ['./list-horizontal.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class ListHorizontalComponent implements OnInit {

  constructor() { }

  texts: Section[] = [
    {
      title: 'Nº of units',
      subtitle: '102',
    },
    {
      title: 'Used space',
      subtitle: '298MB',
    },
    {
      title: 'Total space',
      subtitle: '500MB',
    },
    {
      title: 'Created by',
      subtitle: 'Andrés Castro Silvoso',
    },
    {
      title: 'Last modification',
      subtitle: '4 January 2019 by Andres Castro Silvoso',
    },
    {
      title: 'Created on',
      subtitle: '10 March 2018',
    }
  ];

  ngOnInit() {
  }

}
