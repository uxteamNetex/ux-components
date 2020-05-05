import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-documentation',
	templateUrl: './documentation.component.html',
	styleUrls: ['./documentation.component.scss']
})
export class DocumentationComponent implements OnInit {

	code1 = `
		<div class="card18 utils--padding-16">
		<div class="card18__avatar">
		<img 
			*ngIf="data.avatar; else elseBlock"
			src="{{data.avatar}}"
			alt="{{data.title + '&#32;image'}}">
		<ng-template #elseBlock>
			<span 
			[style.background-color]="data.color"
			class="card18__avatar--alias">{{data.title | slice:0:1}}</span>
		</ng-template>
		</div>
		<div class="card18__title utils--truncate">
		<span matTooltip="{{data.title}}" class="utils--text-18 utils--text-grey-800">{{data.title}}</span>
		</div>
		<div class="card18__progress-bar">
		<ntx-progress-bar-level value="{{data.progress.value}}" requiredValue="{{data.progress.requiredValue}}"></ntx-progress-bar-level>
		</div>
		<div *ngIf="data.progress.level" class="card18__level">
		<span>{{data.progress.level}}</span>
		</div>
		<div class="card18__subtitle utils--truncate">
		<span matTooltip="{{data.subtitle}}" class="utils--text-14 utils--text-grey-600">{{data.subtitle}}</span>
		</div>
		</div>
	`;
	code2 = `
		import { Component, OnInit, Input } from '@angular/core';

		export interface Data {
			avatar: string;
			progress: {
			value: number,
			requiredValue: number,
			level: string
		};
			color: string;
			title: string;
			subtitle: string;
		}

		@Component({
		selector: 'ntx-card18',
		templateUrl: './card18.component.html',
		styleUrls: ['./card18.component.scss']
		})
		export class Card18Component implements OnInit {

		@Input() data: Data;

		constructor() { }

		ngOnInit() {
		}

		}

	`;
	code3 = `
		@import "././projects/netex/ux-components/src/styles/app/utils";

		$block: "card18";

		.#{$block} {
		background-color: white;
		border-radius: 4px;
		box-sizing: border-box;
		box-shadow: 0 0 8px 0 rgba(0,0,0,.16);
		font-family: Lato;
		width: 100%;
		display: grid;
		grid-template-columns: 40px 60% 1fr fit-content(40px);
		grid-template-rows: 40px 22px;
		grid-template-areas: "avatar title progress-bar level"
								"...... subtitle subtitle subtitle";
		gap: 0 16px;
		.#{$block}__avatar {
			grid-area: avatar;
			img,span{
				width: 100%;
				height: 100%;
			}
			img {
				object-fit: cover;
			}
			&--alias {
				display: block;
				line-height: 40px;
				text-align: center;
				font-size: 23px;
				color: rgba(255,255,255,0.4);
			}
		}
		.#{$block}__title {
			grid-area: title;
			align-self: center;
		}
		.#{$block}__progress-bar {
			grid-area: progress-bar;
			align-self: center;
		}
		.#{$block}__level {
			grid-area: level;
			justify-self: center;
			align-self: center;
		}
		.#{$block}__subtitle {
			grid-area: subtitle;
			font-family: LatoSemibold;
			font-style: italic;
		}
		}
	`;

	constructor() { }

	ngOnInit() {
	}

}
