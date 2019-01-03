import { Component, OnInit } from '@angular/core';
import { speedDialFabAnimations } from './fab-speed-dial-animations';
import { Input } from '@angular/core';

@Component({
  selector: 'ntx-fab-speed-dial-button',
  templateUrl: './fab-speed-dial-button.component.html',
  styleUrls: ['./fab-speed-dial-button.component.scss'],
  animations: speedDialFabAnimations
})
export class FabSpeedDialButtonComponent implements OnInit {

  @Input() color: string;
  @Input() disabled: string;

  fabButtons = [
    {
      icon: 'icon-briefcase'
    },
    {
      icon: 'icon-channel'
    },
    {
      icon: 'icon-download'
    }
  ];
  buttons = [];
  fabTogglerState = 'inactive';

  constructor() { }

  ngOnInit() {
  }

  showItems() {
    this.fabTogglerState = 'active';
    this.buttons = this.fabButtons;
  }

  hideItems() {
    this.fabTogglerState = 'inactive';
    this.buttons = [];
  }

  onToggleFab() {
    this.buttons.length ? this.hideItems() : this.showItems();
  }

}

