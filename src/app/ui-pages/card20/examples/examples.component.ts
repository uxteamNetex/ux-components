import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MediaChange, ObservableMedia } from '@angular/flex-layout';
import { MatGridList } from '@angular/material';

@Component({
	selector: 'app-examples',
	templateUrl: './examples.component.html',
	styleUrls: ['./examples.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class ExamplesComponent implements OnInit {
	@ViewChild('grid') grid: MatGridList;

	gridByBreakpoint = {
		'ntx.xl': 4,
		'ntx.lg': 3,
		'ntx.md': 2,
		'ntx.sm': 1,
		'ntx.xs': 1
	};

	card20: any[] = [
		{
			showLink: '',
			link: '',
			image: '',
			title: '',
			subtitle: '',
		},
		{
			showLink: '',
			link: '',
			image: '',
			title: '',
			subtitle: '',
		},
		{
			showLink: '',
			link: '',
			image: '',
			title: '',
			subtitle: '',
		},
		{
			showLink: '',
			link: '',
			image: '',
			title: '',
			subtitle: '',
		}
	];

	constructor(private observableMedia: ObservableMedia) { }

	ngOnInit() {

		setTimeout(() => {

			this.card20 = [
				{
					showLink: false,
					link: '',
					image: 'assets/images/writting.jpg',
					title: 'Card title',
					subtitle: 'Card subtitle',
				},
				{
					showLink: false,
					link: '',
					image: 'assets/images/bg-01.png',
					title: 'Title that could not be longer than one line and will be shown with three dots',
					subtitle: 'Os alunos e alunas realizaram uma excursão no sábado passado.',
				},
				{
					showLink: true,
					link: 'blog.tucole.com',
					image: 'assets/images/bg-02.png',
					title: 'Card title',
					subtitle: 'Card subtitle',
				},
				{
					showLink: true,
					link: 'tublog.com',
					image: 'assets/images/bg-03.png',
					title: 'Title that could not be longer than one line and will be shown with three dots',
					subtitle: 'Os alunos e alunas realizaram uma excursão no sábado passado com a equipe docente do primário para realizar uma reportaxe.',
				}
			];

		}, 5000);

	}

	ngAfterContentInit() {
		this.observableMedia.asObservable().subscribe((change: MediaChange) => {
			this.grid.cols = this.gridByBreakpoint[change.mqAlias];
		});
	}

}
