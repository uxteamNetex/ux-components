import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
	selector: 'ntx-card5',
	templateUrl: './card5.component.html',
	styleUrls: ['./card5.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class Card5Component implements OnInit {

	menuOptionsAdvanced: {
		icon: string;
		actions: {
			showmenuOptions: boolean;
			showIconOptions: boolean;
			showDivider: boolean;
			showButtons: boolean;
			iconOptions: string;
			title: string;
			buttonText: string;
			disabled: boolean;
			click: () => void;
		}[];
	};

	@Input() title: string;
	@Input() number: string;
	@Input() options: boolean;
	@Input() disabled: boolean;

	constructor() { }

	ngOnInit() {

		this.menuOptionsAdvanced = {
			icon: 'icon-more-options',
			actions: [
				{
					disabled: false,
					showmenuOptions: true,
					showIconOptions: false,
					showDivider: false,
					showButtons: false,
					iconOptions: '',
					title: 'Archive',
					buttonText: '',
					click: function() { alert('You\'ve clicked in \'Archive\' option'); }
				},
				{
					disabled: false,
					showmenuOptions: true,
					showIconOptions: false,
					showDivider: false,
					showButtons: false,
					iconOptions: '',
					title: 'Notifications',
					buttonText: '',
					click: function() { alert('You\'ve clicked in \'Notifications\' option'); }
				},
				{
					disabled: true,
					showmenuOptions: true,
					showIconOptions: false,
					showDivider: false,
					showButtons: false,
					iconOptions: '',
					title: 'Edit',
					buttonText: '',
					click: function() { alert('You\'ve clicked in \'Edit\' option'); }
				},
				{
					disabled: true,
					showmenuOptions: false,
					showIconOptions: false,
					showDivider: true,
					showButtons: false,
					iconOptions: '',
					title: '',
					buttonText: '',
					click: function() {}
				},
				{
					disabled: false,
					showmenuOptions: true,
					showIconOptions: true,
					showDivider: false,
					showButtons: false,
					iconOptions: 'icon-trash',
					title: 'Delete',
					buttonText: '',
					click: function() { alert('You\'ve clicked in \'Delete\' option'); }
				},
				{
					disabled: true,
					showmenuOptions: true,
					showIconOptions: true,
					showDivider: false,
					showButtons: false,
					iconOptions: 'icon-download',
					title: 'Download and option with a very long text',
					buttonText: '',
					click: function() { alert('You\'ve clicked in \'Download\' option'); }
				},
				{
					disabled: true,
					showmenuOptions: false,
					showIconOptions: false,
					showDivider: true,
					showButtons: false,
					iconOptions: '',
					title: '',
					buttonText: '',
					click: function() {}
				},
				{
					disabled: false,
					showmenuOptions: false,
					showIconOptions: false,
					showDivider: false,
					showButtons: true,
					iconOptions: '',
					title: '',
					buttonText: 'Button',
					click: function() {}
				},
				{
					disabled: false,
					showmenuOptions: false,
					showIconOptions: false,
					showDivider: false,
					showButtons: true,
					iconOptions: '',
					title: '',
					buttonText: 'Button two',
					click: function() {}
				},
			]
		};

	}

}
