import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ntx-card25',
  templateUrl: './card25.component.html',
  styleUrls: ['./card25.component.scss']
})
export class Card25Component implements OnInit {

  @Input() image: string;
  @Input() avatar: string;
  @Input() title: string;
	@Input() subtitle: string;
  @Input() description: string;
  @Input() mobile: boolean;

  constructor() { }

  ngOnInit() {
  }

}
