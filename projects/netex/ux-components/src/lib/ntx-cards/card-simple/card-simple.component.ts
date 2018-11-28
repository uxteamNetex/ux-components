import { Component, OnInit, Input } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'ntx-card-simple',
  templateUrl: './card-simple.component.html',
  styleUrls: ['./card-simple.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CardSimpleComponent implements OnInit {

  @Input() title: string;
  @Input() subtitle: string;

  constructor() { }

  ngOnInit() {
   }

}
