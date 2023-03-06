import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ntx-card26',
  templateUrl: './card26.component.html',
  styleUrls: ['./card26.component.scss']
})
export class Card26Component implements OnInit {

  @Input() image: string;
  @Input() avatar: string;
  @Input() title: string;
	@Input() subtitle: string;
  @Input() label: string;
  @Input() sizeCard!: 'tablet' | 'mobile';
  @Input() sizeText!: 'mobile';
  @Input() highlighted: boolean;
  @Input() textUnlimited: boolean;

  constructor() { }

  ngOnInit() {
  }

}
