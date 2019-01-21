import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'ntx-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TabsComponent implements OnInit {

  constructor() { }

  links = [
    'Tab one',
    'Tab two',
    'Tab three',
    'Tab four',
    'Tab five',
    'Tab six',
    'Tab seven',
    'Tab eight',
    'Tab nine',
    'Tab ten',
    'Tab eleven',
    'Tab twelve',
    'Tab thirteen',
    'Tab fourteen',
    'Tab fifteen',
    'Tab sixteen'
    ];
  selectedIndex = 0;

  ngOnInit() {
  }

}
