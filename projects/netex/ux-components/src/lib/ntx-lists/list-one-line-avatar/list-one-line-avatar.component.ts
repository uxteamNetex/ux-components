import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';

export interface Section {
  title: string;
  subtitle: string;
}

@Component({
  selector: 'ntx-list-one-line-avatar',
  templateUrl: './list-one-line-avatar.component.html',
  styleUrls: ['./list-one-line-avatar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ListOneLineAvatarComponent implements OnInit {

  constructor() { }

  texts: Section[] = [
    {
      title: 'Carolina López',
      subtitle: 'carolina.lopez',
    }
  ];

  ngOnInit() {
  }

}
