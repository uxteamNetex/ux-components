import { Component, OnInit } from '@angular/core';

const PROFILEDIALOG1 = {
	background: 'assets/images/background-profile-header.jpg',
	avatar: 'assets/images/perfil.jpg',
	name: 'Bernice Greaves',
	mail: 'berni.graves@netexlearning.com',
	phone: '+34 765432190',
	location: 'A Coruña',
	secondaryButton: 'Cancel',
	primaryButton: 'Go to profile',
};
const PROFILEDIALOG2 = {
	background: 'assets/images/background-profile-header.jpg',
	avatar: 'assets/images/user_female_01.jpg',
	name: 'Emma Fleming',
	mail: '13 de fevereiro 2021 - 12:00',
	phone: 'Ciencias da natureza',
	location: 'Luisa Gómez Seoane',
	description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.',
	action: 'justificante.png',
	actionIcon: 'icon-paperclip',
	labelText: 'Ausente',
	labelColor: 'red',
	secondaryButton: 'Cancel',
};


@Component({
	selector: 'app-examples',
	templateUrl: './examples.component.html',
	styleUrls: ['./examples.component.scss']
})
export class ExamplesComponent implements OnInit {

	user1 = PROFILEDIALOG1;
	user2 = PROFILEDIALOG2;

	constructor() { }

	ngOnInit() {
	}

}
