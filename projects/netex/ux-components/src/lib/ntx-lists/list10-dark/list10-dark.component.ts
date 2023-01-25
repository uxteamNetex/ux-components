import { Component, OnInit, Input } from '@angular/core';

export interface Item {
	icon: string;
	iconColor: string;
}

@Component({
  selector: 'ntx-list10-dark',
  templateUrl: './list10-dark.component.html',
  styleUrls: ['./list10-dark.component.scss']
})
export class List10DarkComponent implements OnInit {

  @Input() items: Item[];

  constructor() { }

  ngOnInit() {
  }

}
