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

	card2: any[] = [
		{
			image: '',
			backgroundColor: '',
			icon: '',
			title: '',
			options: ''
		},
		{
			image: '',
			backgroundColor: '',
			icon: '',
			title: '',
			options: ''
		},
		{
			image: '',
			backgroundColor: '',
			icon: '',
			title: '',
			options: ''
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

			this.card2 = [
				{
					image: '',
					backgroundColor: '#E53B78',
					icon: 'icon-palette-color-solid',
					title: 'Project name that could be longer than just one line and will be shown with three dots',
					options: 'true',
					hoverable: true
				},
				{
					image: 'assets/images/bg-02.png',
					backgroundColor: '#E53B78',
					icon: 'icon-palette-color-solid',
					title: 'Project name that could be longer than just one line and will be shown with three dots',
					subtitle: 'Subtitle',
					disabled: true
				},
				{
					image: 'assets/images/background-profile-header.jpg',
					backgroundColor: '#E53B78',
					icon: 'icon-palette-color-solid',
					title: 'Project name that could be longer than just one line and will be shown with three dots',
					selected: true
				}
			];

		}, 5000);

	}

	setPath(value: string) {
		//this.tabsHeaderService.setPath(value);
	}

	mtp1User = {
		'avatar': 'assets/images/perfil.jpg',
		'fullname': 'Carolina López',
		'username': 'carolina.lopez',
		'companyLogo': 'assets/images/icon-netex.png',
		'companyName': 'Logo netex',
		'link': 'http://www.netexlearning.es',
		'linkLabel': 'Accede a tu cuenta'
	};

	mtp1Options = [
		{
			'label': 'Notificaciones',
			'badge': 29
		},
		{
			'label': 'Novedades'
		},
		{
			'label': 'Manuales'
		},
		{
			'label': 'Netex Community'
		}
	];
	mtp2User = {
		'avatar': 'assets/images/user_female_02.jpg',
		'fullname': 'Suzanne Axtens',
		'username': 'suzanne.axtens',
		'companyLogo': 'assets/images/icon-netex.png',
		'companyName': 'Logo netex',
		'link': 'http://www.netexlearning.es',
		'linkLabel': 'Accede a tu cuenta'
	};

	mtp2Options = [
		{
			'label': 'Notificaciones',
			'badge': 29
		},
		{
			'label': 'Novedades'
		},
		{
			'label': 'Manuales'
		},
		{
			'label': 'Netex Community'
		}
	];

	mtp2MainOption = {
		label: 'Use as administrator',
		img: 'assets/images/administrator-banner.png'
	}

}
