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
			image: '',
			title: '',
		},
		{
			image: '',
			title: '',
		}
	];

	constructor(private observableMedia: ObservableMedia) { }

	ngOnInit() {

		setTimeout(() => {

			this.card21 = [
				{
					image: 'assets/images/writting.jpg',
					title: 'Project name that could be longer than just one line and will be shown with three dots',
				},
				{
					image: 'assets/images/background-profile-header.jpg',
					title: 'Project name',
				}
			];

		}, 5000);

	}

	setPath(value: string) {
		//this.tabsHeaderService.setPath(value);
	}

}
