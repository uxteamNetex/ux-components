import { AfterContentInit, Component, OnInit, ViewChild } from '@angular/core';
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
		'ntx.xl': 4,
		'ntx.lg': 3,
		'ntx.md': 2,
		'ntx.sm': 2,
		'ntx.xs': 1
	};

	card4: any[] = [];

	constructor(private observableMedia: ObservableMedia) { }

	ngOnInit() {

			this.card4 = [
				{
					image: '',
					initials: '',
					badgeColor: '',
					title: '',
					subtitle: '',
					options: '',
				},
				{
					image: 'assets/images/perfil.jpg',
					initials: '',
					badgeColor: '',
					title: 'María Cristina Martínez Casanueva',
					subtitle: 'UX designer and web developer',
					options: '',
					disabled: true
				},
				{
					image: '',
					initials: ' ',
					badgeColor: '#EE9A37',
					title: 'Ana Pérez Lago',
					subtitle: 'Front developer',
					options: 'true',
				},
				{
					image: 'assets/images/user_male_01.png',
					initials: '',
					badgeColor: '',
					title: 'Juan Ramón Suarez García',
					subtitle: 'Marketing',
					options: '',
				},
				{
					image: 'assets/images/user_female_02.jpg',
					initials: '',
					badgeColor: '',
					title: 'Laura Vila Pazos',
					subtitle: 'Project manager',
					options: 'true',
				},
				{
					image: 'assets/images/user_female_03.jpg',
					initials: '',
					badgeColor: '',
					title: 'Beatriz Carrasco Pereira',
					subtitle: 'Analist',
					options: 'true',
				}
			];

	}

	// tslint:disable-next-line:use-life-cycle-interface
	ngAfterContentInit() {
		this.observableMedia.asObservable().subscribe((change: MediaChange) => {
			this.grid.cols = this.gridByBreakpoint[change.mqAlias];
		});
	}

}
