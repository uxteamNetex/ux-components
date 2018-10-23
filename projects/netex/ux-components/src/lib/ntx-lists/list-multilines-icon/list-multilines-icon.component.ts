import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';

export interface Section {
  title: string;
}

@Component({
  selector: 'ntx-list-multilines-icon',
  templateUrl: './list-multilines-icon.component.html',
  styleUrls: ['./list-multilines-icon.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ListMultilinesIconComponent implements OnInit {

  constructor() { }

  texts: Section[] = [
    {
      title: 'Section one'
    },
    {
      title: 'Section two'
    }
  ];

  links: Section[] = [
    {
      title: 'Subsection one'
    },
    {
      title: 'Subsection two'
    }
  ];

  ngOnInit() {
  }

}
