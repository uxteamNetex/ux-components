import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MediaChange, ObservableMedia } from '@angular/flex-layout';

@Component({
	selector: 'app-examples',
	templateUrl: './examples.component.html',
	styleUrls: ['./examples.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class ExamplesComponent implements OnInit {

	card21: any[] = [
		{
			bar: '',
			barColor: '',
			image: '',
			title: '',
		},
		{
			bar: '',
			barColor: '',
			image: '',
			title: '',
		}
	];

	card22: any[] = [
		{
			image: '',
			title: '',
			subtitle: '',
			icon: '',
			iconName: '',
		},
		{
			image: '',
			title: '',
			subtitle: '',
			icon: '',
			iconName: '',
		}
	];

	constructor(private observableMedia: ObservableMedia) { }

	ngOnInit() {

		setTimeout(() => {

			this.card21 = [
				{
					bar: true,
					barColor: '#5cce88',
					image: 'assets/images/writting.jpg',
					title: 'Project name that could be longer than just one line and will be shown with three dots',
				},
				{
					bar: '',
					barColor: '',
					image: 'assets/images/background-profile-header.jpg',
					title: 'Project name',
				}
			];

			this.card22 = [
				{
					image: 'assets/images/bengal.jpg',
					title: 'Project name that could be longer than just one line and will be shown with three dots',
					subtitle: '13 contenidos',
					icon: 'Card bloqueada',
			    iconName: 'icon-lock'
				},
				{
					image: 'assets/images/coffee.jpg',
					title: 'Project name',
					subtitle: '13 contenidos con texto muy largo',
					icon: '',
			    iconName: ''
				}
			];

		}, 5000);

	}

	setPath(value: string) {
		//this.tabsHeaderService.setPath(value);
	}

}
