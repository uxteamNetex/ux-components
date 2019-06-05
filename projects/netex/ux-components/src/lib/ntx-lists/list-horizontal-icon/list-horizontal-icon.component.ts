import { Component, OnInit, ViewEncapsulation } from '@angular/core';

export interface Section {
  icon: string;
  title: string;
  subtitle: string;
}

@Component({
  selector: 'ntx-list-horizontal-icon',
  templateUrl: './list-horizontal-icon.component.html',
  styleUrls: ['./list-horizontal-icon.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ListHorizontalIconComponent implements OnInit {

  constructor() { }

  texts: Section[] = [
    {
      icon: 'icon-telephone',
      title: 'Telephone',
      subtitle: '981234567',
    },
    {
      icon: 'icon-envelope',
      title: 'Email',
      subtitle: 'myname@something.com',
    }
  ];

  ngOnInit() {
  }

}
