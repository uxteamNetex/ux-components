import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
	selector: 'ntx-toolbar-searchbox',
	templateUrl: './toolbar-searchbox.component.html',
	styleUrls: ['./toolbar-searchbox.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class ToolbarSearchboxComponent implements OnInit {

	@Input() apps: any[];
	@Input() label: string;
	@Input() src: string;
	@Input() menuAvatarOptions: any[];

	constructor() { }

	ngOnInit() { }

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

}
