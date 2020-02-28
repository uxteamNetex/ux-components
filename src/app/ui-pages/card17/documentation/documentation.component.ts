import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-documentation',
	templateUrl: './documentation.component.html',
	styleUrls: ['./documentation.component.scss']
})
export class DocumentationComponent implements OnInit {

	code1 = `
	<div class="wrapper">
		<div class="header">
			<div class="text utils--text-20 utils--text-grey-800 utils--truncate">{{data.title}}</div>
			<a routerLink=".">
				<span class="icon-netex utils--text-24" [ngClass]="data.icon"></span>
			</a>
		</div>
		<div class="content">
			<ng-content></ng-content>
		</div>
	</div>
	`;

	code2 = `
	import { Component, OnInit, Input } from '@angular/core';

	@Component({
		selector: 'ntx-card17',
		templateUrl: './card17.component.html',
		styleUrls: ['./card17.component.scss']
	})
	export class Card17Component implements OnInit {
		@Input() data: any;
		constructor() { }
		ngOnInit() {}
	}`;

	code3 = `
	@import "././projects/netex/ux-components/src/styles/app/utils";

	.wrapper {
		border-radius: 4px;
		background-color: white;
		min-width: 320px;
		padding: 24px;
		box-sizing: border-box;
		box-shadow: 0 0 8px 0 rgba(0,0,0,.16) ;
		.header {
			font-family: LatoBold;
			display: flex;
			width: 100%;
			margin-bottom: 24px;
			a {
				margin-left: auto;
				span.icon-netex{
					color: $color-primary;
				}
			}
		}
	}`;


	constructor() { }

	ngOnInit() {
	}

}
