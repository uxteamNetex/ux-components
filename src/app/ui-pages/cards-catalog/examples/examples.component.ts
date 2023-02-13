import { AfterContentInit, Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MediaChange, ObservableMedia } from '@angular/flex-layout';
import { MatGridList } from '@angular/material';

@Component({
	selector: 'app-examples',
	templateUrl: './examples.component.html',
	styleUrls: ['./examples.component.scss']
})
export class ExamplesComponent implements OnInit {
	@ViewChild('grid') grid: MatGridList;

	gridByBreakpoint = {
		'ntx.xl': 3,
		'ntx.lg': 2,
		'ntx.md': 2,
		'ntx.sm': 2,
		'ntx.xs': 1
	};

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

	constructor(private router: Router, private observableMedia: ObservableMedia) { }

	card1() {
		this.router.navigate(['card1']);
	}
	card2() {
		this.router.navigate(['card2']);
	}
	card3() {
		this.router.navigate(['card3']);
	}
	card4() {
		this.router.navigate(['card4']);
	}
	card5() {
		this.router.navigate(['card5']);
	}
	card7() {
		this.router.navigate(['card7']);
	}
	card8() {
		this.router.navigate(['card8']);
	}
	card9() {
		this.router.navigate(['card9']);
	}
	card10() {
		this.router.navigate(['card10']);
	}
	card11() {
		this.router.navigate(['card11']);
	}
	card12() {
		this.router.navigate(['card12']);
	}
	card13() {
		this.router.navigate(['card13']);
	}
	card14() {
		this.router.navigate(['card14']);
	}
	card15() {
		this.router.navigate(['card15']);
	}
	card16() {
		this.router.navigate(['card16']);
	}
	card17() {
		this.router.navigate(['card17']);
	}
	card18() {
		this.router.navigate(['card18']);
	}
	card19() {
		this.router.navigate(['card19']);
	}
	card20() {
		this.router.navigate(['card20']);
	}
	card21() {
		this.router.navigate(['card21']);
	}
	card22() {
		this.router.navigate(['card22']);
	}
	card23() {
		this.router.navigate(['card23']);
	}
	card24() {
		this.router.navigate(['card24']);
	}
  card25() {
		this.router.navigate(['card25']);
	}
  card26() {
		this.router.navigate(['card26']);
	}
  card27() {
		this.router.navigate(['card27']);
	}
  card28() {
		this.router.navigate(['card28']);
	}

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

	ngAfterContentInit() {
		this.observableMedia.asObservable().subscribe((change: MediaChange) => {
			this.grid.cols = this.gridByBreakpoint[change.mqAlias];
		});
	}

}
