import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'ntx-toolbar-back',
	templateUrl: './toolbar-back.component.html',
	styleUrls: ['./toolbar-back.component.scss']
})
export class ToolbarBackComponent implements OnInit {

	@Input() apps: any[];

	constructor() { }

	ngOnInit() { }

	mtpUser = {
		'avatar': 'assets/images/perfil.jpg',
		'fullname': 'Carolina López',
		'username': 'carolina.lopez',
		'companyLogo': 'assets/images/icon-netex.png',
		'companyName': 'Logo netex',
		'link': 'http://www.netexlearning.es',
		'linkLabel': 'Accede a tu cuenta'
	};

	mtpOptions = [
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

}
