import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';

export class IOptionMenuAvatarComponent {
  src: string;
  id: number;
  label: string;
  active: boolean;
}

@Component({
  selector: 'ntx-menu-avatar',
  templateUrl: './menu-avatar.component.html',
  styleUrls: ['./menu-avatar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MenuAvatarComponent implements OnInit {

  @Input() options: IOptionMenuAvatarComponent[];

  @Output() clickMenuAvatarOption = new EventEmitter<any>();
  
  selectedIndex: number;
  selectedOption: IOptionMenuAvatarComponent;

	constructor() { }

	ngOnInit() {
    this.selectedOption = this.options.find(option => option.active);
  }
  selectOption(option) {
    this.selectedOption = option;
    this.clickMenuAvatarOption.emit(Event);
  }

}
