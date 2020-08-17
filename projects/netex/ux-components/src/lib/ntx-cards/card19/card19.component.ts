import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ntx-card19',
  templateUrl: './card19.component.html',
  styleUrls: ['./card19.component.scss']
})
export class Card19Component implements OnInit {

  @Input() urlImage: string;
  @Input() altImage: string = 'alternative text'
  @Input() subtitle: string = 'subtitle';
  @Input() title: string = 'title';
  @Input() description: string = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur odio ratione quod, maiores porro accusamus quo vitae architecto iusto adipisci atque earum, veniam est eius delectus ab voluptatum consectetur hic.';

  @Output() clickEvent = new EventEmitter();

  constructor() { }

  ngOnInit() { }

  public onClickEvent() {
    console.log('Click event on card19 component');
    this.clickEvent.emit();
  }

}
