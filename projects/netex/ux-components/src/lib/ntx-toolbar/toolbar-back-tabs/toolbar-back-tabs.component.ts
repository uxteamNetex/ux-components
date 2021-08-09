import { Component, OnInit, Input, EventEmitter, Output, ViewEncapsulation } from '@angular/core';

@Component({
	selector: 'ntx-toolbar-back-tabs',
	templateUrl: './toolbar-back-tabs.component.html',
	styleUrls: ['./toolbar-back-tabs.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class ToolbarBackTabsComponent implements OnInit {

	@Input() apps: any[];
	@Input() action: ('launch' | 'finish');
	@Output() buttonClick = new EventEmitter();

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

	onClickButton() {
		this.buttonClick.emit();
	}

}
