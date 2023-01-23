import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ntx-card27',
  templateUrl: './card27.component.html',
  styleUrls: ['./card27.component.scss']
})
export class Card27Component implements OnInit {

  @Input() image: string;
  @Input() title: string;
	@Input() description: string;
  @Input() label: string;
  @Input() sizeCard!: 'tablet' | 'mobile';
  @Input() sizeText!: 'mobile';
  @Input() highlighted: boolean;
  @Input() textUnlimited: boolean;

  constructor() { }

  ngOnInit() {
  }

}
