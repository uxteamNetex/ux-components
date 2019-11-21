import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';

export interface Section {
  title: string;
  subtitle: string;
  link: string;
}

@Component({
  selector: 'ntx-menu-toolbar-profile',
  templateUrl: './menu-toolbar-profile.component.html',
  styleUrls: ['./menu-toolbar-profile.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class MenuToolbarProfileComponent implements OnInit {

  constructor() { }

  texts: Section[] = [
    {
      title: 'Carolina López',
      subtitle: 'carolina.lopez',
      link: 'Accede a tu cuenta',
    }
  ];

  ngOnInit() {
  }

}
