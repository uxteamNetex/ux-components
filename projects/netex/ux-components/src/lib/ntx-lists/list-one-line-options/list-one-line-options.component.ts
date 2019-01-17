import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';

export interface Section {
  title: string;
}

@Component({
  selector: 'ntx-list-one-line-options',
  templateUrl: './list-one-line-options.component.html',
  styleUrls: ['./list-one-line-options.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class ListOneLineOptionsComponent implements OnInit {

  constructor() { }

  texts: Section[] = [
    {
      title: 'List name with a very large name and three dots'
    }
  ];

  ngOnInit() {
  }

}
