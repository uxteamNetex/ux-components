import { Component, OnInit } from '@angular/core';

export interface Section {
  title: string;
  subtitle: string;
}

@Component({
  selector: 'ntx-list-two-lines-avatar',
  templateUrl: './list-two-lines-avatar.component.html',
  styleUrls: ['./list-two-lines-avatar.component.scss']
})

export class ListTwoLinesAvatarComponent implements OnInit {

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
