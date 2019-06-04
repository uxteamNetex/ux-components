import { Component, OnInit, ViewEncapsulation } from '@angular/core';

export interface Section {
  title: string;
}

@Component({
  selector: 'ntx-list-two-lines-avatar-vertical',
  templateUrl: './list-two-lines-avatar-vertical.component.html',
  styleUrls: ['./list-two-lines-avatar-vertical.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ListTwoLinesAvatarVerticalComponent implements OnInit {

  constructor() { }

  texts: Section[] = [
    {
      title: 'List with a very long name and three dots to see how it works'
    }
  ];

  ngOnInit() {
  }

}
