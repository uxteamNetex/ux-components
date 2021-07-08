import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'ntx-toolbar',
	templateUrl: './toolbar.component.html',
	styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

	@Input() apps: any[];

	menuToolbarProfile: {
		userImage: string;
		userName: string;
		actions: {
			showUserInfo: boolean;
			logo: string;
			logoName: string;
			title: string;
			subtitle: string;
			url: string;
			link: string;
			image: string;
			click: () => void;
			showButton: boolean;
			titleButton: string;
			imageButton: string;
			showMenuOption: boolean;
			menuOptionText: string;
			showMenuOptionBadge: boolean;
			showDivider: boolean;
		}[];
	};

	constructor() { }

	ngOnInit() {

		this.menuToolbarProfile = {
			userImage: 'assets/images/perfil.jpg',
			userName: 'Carolina López',
			actions: [
				{
					showUserInfo: true,
					logo: 'assets/images/icon-netex.png',
					logoName: 'Logo netex',
					title: 'Carolina López',
					subtitle: 'carolina.lopez',
					url: 'http://google.es',
					link: 'Accede a tu cuenta',
					image: 'assets/images/perfil.jpg',
					click: function() { alert('You\'ve clicked in \'Accede a tu cuenta\' option'); },
					showButton: false,
					titleButton: '',
					imageButton: '',
					showMenuOption: false,
					menuOptionText: '',
					showMenuOptionBadge: false,
					showDivider: false,
				},
				{
					showUserInfo: false,
					logo: '',
					logoName: '',
					title: '',
					subtitle: '',
					url: '',
					link: '',
					image: '',
					click: function() { alert('You\'ve clicked in \'Use as administrator\' option'); },
					showButton: true,
					titleButton: 'Use as administrator',
					imageButton: 'assets/images/administrator-banner.png',
					showMenuOption: false,
					menuOptionText: '',
					showMenuOptionBadge: false,
					showDivider: false,
				},
				{
					showUserInfo: false,
					logo: '',
					logoName: '',
					title: '',
					subtitle: '',
					url: '',
					link: '',
					image: '',
					click: function() { alert('You\'ve clicked in \'Notificaciones\' option'); },
					showButton: false,
					titleButton: '',
					imageButton: '',
					showMenuOption: true,
					menuOptionText: 'Notificaciones',
					showMenuOptionBadge: true,
					showDivider: false,
				},
				{
					showUserInfo: false,
					logo: '',
					logoName: '',
					title: '',
					subtitle: '',
					url: '',
					link: '',
					image: '',
					click: function() { alert('You\'ve clicked in \'Novedades\' option'); },
					showButton: false,
					titleButton: '',
					imageButton: '',
					showMenuOption: true,
					menuOptionText: 'Novedades',
					showMenuOptionBadge: false,
					showDivider: false,
				},
				{
					showUserInfo: false,
					logo: '',
					logoName: '',
					title: '',
					subtitle: '',
					url: '',
					link: '',
					image: '',
					click: function() { alert('You\'ve clicked in \'Manuales\' option'); },
					showButton: false,
					titleButton: '',
					imageButton: '',
					showMenuOption: true,
					menuOptionText: 'Manuales',
					showMenuOptionBadge: false,
					showDivider: false,
				},
				{
					showUserInfo: false,
					logo: '',
					logoName: '',
					title: '',
					subtitle: '',
					url: '',
					link: '',
					image: '',
					click: function() { alert('You\'ve clicked in \'Netex Community\' option'); },
					showButton: false,
					titleButton: '',
					imageButton: '',
					showMenuOption: true,
					menuOptionText: 'Netex Community',
					showMenuOptionBadge: false,
					showDivider: false,
				},
				{
					showUserInfo: false,
					logo: '',
					logoName: '',
					title: '',
					subtitle: '',
					url: '',
					link: '',
					image: '',
					click: function() {},
					showButton: false,
					titleButton: '',
					imageButton: '',
					showMenuOption: false,
					menuOptionText: '',
					showMenuOptionBadge: false,
					showDivider: true,
				},
				{
					showUserInfo: false,
					logo: '',
					logoName: '',
					title: '',
					subtitle: '',
					url: '',
					link: '',
					image: '',
					click: function() { alert('You\'ve clicked in \'Salir\' option'); },
					showButton: false,
					titleButton: '',
					imageButton: '',
					showMenuOption: true,
					menuOptionText: 'Salir',
					showMenuOptionBadge: false,
					showDivider: false,
				}
			]
		};

	}

}
