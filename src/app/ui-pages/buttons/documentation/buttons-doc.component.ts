import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-buttons-doc',
	templateUrl: './buttons-doc.component.html',
	styleUrls: ['./buttons-doc.component.scss']
})
export class ButtonsDocComponent implements OnInit {

	code1=`
  <button mat-stroked-button class="mat-stroked-button {{action.state}} {{action.active}} {{action.disabled}}"
          *ngFor="let action of item3.actions">
    <span matTooltip="{{action.label}}">{{action.label}}</span>
  </button>
  `;
	code2=`
  import { Component, OnInit, Input } from '@angular/core';

  @Component({
    selector: 'ntx-stroked-button',
    templateUrl: './stroked-button.component.html',
    styleUrls: ['./stroked-button.component.scss']
  })
  export class StrokedButtonComponent implements OnInit {

    @Input() item3: any;

    constructor() { }

    ngOnInit() {
    }

  }
  `;

	constructor() { }

	ngOnInit() {
	}

}
