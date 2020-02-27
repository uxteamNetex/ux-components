import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-documentation',
	templateUrl: './documentation.component.html',
	styleUrls: ['./documentation.component.scss']
})
export class DocumentationComponent implements OnInit {

	code1 = `
	<div class="wrapper utils--text-14 utils--bc-white" [ngClass]="data.state">
	<span class="icon-netex icon-check-circle-solid utils--text-28"></span>
	<span class="icon-netex icon-editor-circle utils--text-32"></span>
	<div class="text utils--text-grey-700 utils--truncate">{{data.description}}</div>
	<div class="link utils--truncate">
		<a href="#">link</a>
	</div>
	</div>
	`;

	code2 = `
	import { Component, OnInit, Input } from '@angular/core';

	@Component({
		selector: 'ntx-card16',
		templateUrl: './card16.component.html',
		styleUrls: ['./card16.component.scss']
	})
	export class Card16Component implements OnInit {

		@Input() data: any;

		constructor() { }

		ngOnInit() {}

	}`;

	code3 = `
	@import "././projects/netex/ux-components/src/styles/app/utils";

	.wrapper {
		display: flex;
		align-items: center;
		width: 620px;
		height: 60px;
		border-radius: 30px;
		padding: 0 44px 0 20px;
		box-sizing: border-box;
		&.next {
			opacity: 0.6;
			span.icon-check-circle-solid, .link{
				display: none;
			}
		}
		&.current {
			box-shadow: 0 3px 6px rgba(0,0,0,.16);
			span.icon-check-circle-solid {
				display: none;
			}
		}
		&.completed {
			span.icon-editor-circle, .link{
				display: none;
			}
		}
		.icon-check-circle-solid {
			color: $color-primary;
		}
		.icon-editor-circle {
			color: $color-grey-600;
		}
		.text{
			padding: 0 20px;
			font-family: LatoMedium;
		}
		.link {
			margin-left: auto;
			font-family: Lato;
		}
	}`;


	constructor() { }

	ngOnInit() {
	}

}
