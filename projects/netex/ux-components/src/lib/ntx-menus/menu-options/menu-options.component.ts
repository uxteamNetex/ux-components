import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'ntx-menu-options',
  templateUrl: './menu-options.component.html',
  styleUrls: ['./menu-options.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MenuOptionsComponent implements OnInit {

  private _defaultIcon = 'icon-more-options';

	@Input() icon: string;

  constructor() { }

  ngOnInit() {
    this.icon = this.icon ? this.icon : this._defaultIcon;
  }

}
