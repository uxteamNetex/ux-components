import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'ntx-card23',
  templateUrl: './card23.component.html',
  styleUrls: ['./card23.component.scss']
})
export class Card23Component implements OnInit {

  @Input() urlImage: string;
	@Input() altImage: string = 'Alternative text'
	@Input() suptitle: string = 'Suptitle';
	@Input() stColor: string = '#333';
	@Input() title: string = 'Title';
	@Input() description: string = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur odio ratione quod, maiores porro accusamus quo vitae architecto iusto adipisci atque earum, veniam est eius delectus ab voluptatum consectetur hic.';

	@Output() clickEvent = new EventEmitter();

	constructor() {}

	ngOnInit() {}

	public onClickEvent() {
		console.log('Click event on card23 component');
		this.clickEvent.emit();
	}

}
