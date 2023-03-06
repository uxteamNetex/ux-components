import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ntx-card28',
  templateUrl: './card28.component.html',
  styleUrls: ['./card28.component.scss']
})
export class Card28Component implements OnInit {

  @Input() image: string;
  @Input() title: string;
  @Input() subtitle: string;
	@Input() description: string;
  @Input() label: string;

  constructor() { }

  ngOnInit() {
  }

}
