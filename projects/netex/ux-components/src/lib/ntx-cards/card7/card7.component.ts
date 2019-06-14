import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { MatCheckboxChange } from '@angular/material';

@Component({
  selector: 'ntx-card7',
  templateUrl: './card7.component.html',
  styleUrls: ['./card7.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class Card7Component implements OnInit {

  data: any = {
    title: 'Competency title with a very long text',
    description: 'Description in a few words that could be one or two lines maximum and then three dots'
  };

    selected: boolean;

  constructor() { }

  ngOnInit() { }

}
