import { AfterContentInit, Component, OnInit, ViewChild } from '@angular/core';
import { MediaChange, ObservableMedia } from '@angular/flex-layout';
import { MatGridList } from '@angular/material';

@Component({
	selector: 'app-examples',
	templateUrl: './examples.component.html',
	styleUrls: ['./examples.component.scss']
})
export class ExamplesComponent implements OnInit {
	// @ViewChild('grid') grid: MatGridList;

	// gridByBreakpoint = {
	// 	'ntx.xl': 4,
	// 	'ntx.lg': 3,
	// 	'ntx.md': 2,
	// 	'ntx.sm': 2,
	// 	'ntx.xs': 1
	// };

	card19: any[] = [];
	card19B: any[] = [];
	card19C: any[] = [];

	// constructor(private observableMedia: ObservableMedia) { }

	ngOnInit() {

		this.card19 = [
			{
				badge: true,
				BlockBadge: true,
				urlImage: 'assets/images/writting.jpg',
				altImage: 'Project image',
				title: 'Disabled state: Project name that could be longer than just one line and will be shown with three dots',
				subtitle: 'Subtitle',
				description: 'Has maiorum habemus detraxit at. Timeam fabulas splendide et his. Facilisi aliquando sea ad, vel ne consetetur adversarium. Integre admodum et his, nominavi urbanitas et per, alii reprehendunt et qui. His ei meis legere nostro, eu kasd fabellas definiebas mei, in sea augue iriure.',
				options: '',
				disabled: true
			}
		];
		this.card19B = [
			{
				badge: true,
				BlockBadge: false,
				urlImage: '',
				altImage: '',
				title: '',
				subtitle: '',
				description: '',
				options: '',
				disabled: false
			},
			{
				badge: true,
				BlockBadge: true,
				urlImage: '',
				altImage: 'Project image',
				title: 'Project name',
				subtitle: 'Subtitle',
				description: 'Babellas definiebas mei.',
				options: '',
				disabled: false
			},
			{
				badge: true,
				BlockBadge: true,
				urlImage: 'assets/images/writting.jpg',
				altImage: 'Project image',
				title: 'Project name that could be longer than just one line and will be shown with three dots',
				subtitle: 'Subtitle with a very long text to see how it works',
				description: 'Has maiorum habemus detraxit at. Timeam fabulas splendide et his. Facilisi aliquando sea ad, vel ne consetetur adversarium. Integre admodum et his, nominavi urbanitas et per, alii reprehendunt et qui. His ei meis legere nostro, eu kasd fabellas definiebas mei, in sea augue iriure.',
				options: 'true',
				disabled: false
			}
		];
		this.card19C = [
			{
				badge: true,
				BlockBadge: true,
				urlImage: 'assets/images/bg-01.png',
				altImage: 'Project image',
				title: 'Project name',
				subtitle: 'Subtitle',
				description: 'Babellas definiebas mei.',
				options: '',
				disabled: false
			},
			{
				badge: true,
				BlockBadge: true,
				urlImage: 'assets/images/bg-02.png',
				altImage: 'Project image',
				title: 'Project name that could be longer than just one line and will be shown with three dots',
				subtitle: 'Subtitle with a very long text to see how it works',
				description: 'Has maiorum habemus detraxit at. Timeam fabulas splendide et his. Facilisi aliquando sea ad, vel ne consetetur adversarium. Integre admodum et his, nominavi urbanitas et per, alii reprehendunt et qui. His ei meis legere nostro, eu kasd fabellas definiebas mei, in sea augue iriure.',
				options: 'true',
				disabled: false
			},
			{
				badge: true,
				BlockBadge: true,
				urlImage: 'assets/images/bg-03.png',
				altImage: 'Project image',
				title: 'Card name',
				subtitle: '',
				description: 'Integre admodum et his, nominavi urbanitas et per, alii reprehendunt et qui. His ei meis legere nostro, eu kasd fabellas definiebas mei, in sea augue iriure.',
				options: '',
				disabled: false
			},
			{
				badge: true,
				BlockBadge: true,
				urlImage: 'assets/images/coffee.jpg',
				altImage: 'Project image',
				title: 'Card name',
				subtitle: '',
				description: 'Integre admodum et his, nominavi urbanitas et per, alii reprehendunt et qui. His ei meis legere nostro, eu kasd fabellas definiebas mei, in sea augue iriure.',
				options: 'true',
				disabled: false
			}
		];

	}

	// // tslint:disable-next-line:use-life-cycle-interface
	// ngAfterContentInit() {
	// 	this.observableMedia.asObservable().subscribe((change: MediaChange) => {
	// 		this.grid.cols = this.gridByBreakpoint[change.mqAlias];
	// 	});
	// }

}
