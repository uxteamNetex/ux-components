import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/shared/services/dashboard.service';

@Component({
	selector: 'app-menus-examples',
	templateUrl: './menus-examples.component.html',
	styleUrls: ['./menus-examples.component.scss']
})
export class MenusExamplesComponent implements OnInit {

	menuOptionsSimple: {
		icon: string;
		actions: {
			showIconOptions: boolean;
			iconOptions: string;
			title: string;
			disabled: boolean;
			click: () => void;
		}[];
	};
	menuOptionsSimpleIcon: {
		icon: string;
		actions: {
			showIconOptions: boolean;
			iconOptions: string;
			title: string;
			disabled: boolean;
			click: () => void;
		}[];
	};
	menuOptions: {
		icon: string;
		actions: {
			showmenuOptions: boolean;
			showIconOptions: boolean;
			showDivider: boolean;
			showButtons: boolean;
			iconOptions: string;
			title: string;
			buttonText: string;
			disabled: boolean;
			click: () => void;
		}[];
	};
	menuOptionsAdvanced: {
		icon: string;
		actions: {
			showmenuOptions: boolean;
			showIconOptions: boolean;
			showDivider: boolean;
			showButtons: boolean;
			iconOptions: string;
			title: string;
			buttonText: string;
			disabled: boolean;
			click: () => void;
		}[];
	};
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
	menuToolbarProfile2: {
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
	menulinkData: {
		title: string;
		icon: string;
		actions: {
			icon: string;
			title: string;
			click: () => void;
		}[];
	};
	menuButtonFlatData: {
		actions: {
			icon: string;
			title: string;
			click: () => void;
		}[];
		icon: string;
		title: string;
	};

	constructor(private dashboardService: DashboardService) { }

	apps: any[];

	ngOnInit() {
		this.apps = this.dashboardService.getDashboardApps();

		this.menuOptionsSimple = {
			icon: 'icon-more-options',
			actions: [
				{
					disabled: false,
					showIconOptions: false,
					iconOptions: '',
					title: 'Delete',
					click: function() { alert('You\'ve clicked in \'Delete\' option'); }
				},
				{
					disabled: true,
					showIconOptions: false,
					iconOptions: '',
					title: 'Edit',
					click: function() { alert('You\'ve clicked in \'Edit\' option'); }
				}
			]
		};
		this.menuOptionsSimpleIcon = {
			icon: 'icon-heart',
			actions: [
				{
					disabled: false,
					showIconOptions: true,
					iconOptions: 'icon-archive',
					title: 'Archive',
					click: function() { alert('You\'ve clicked in \'Archive\' option'); }
				},
				{
					disabled: false,
					showIconOptions: true,
					iconOptions: 'icon-bell',
					title: 'Notifications',
					click: function() { alert('You\'ve clicked in \'Notifications\' option'); }
				},
				{
					disabled: false,
					showIconOptions: true,
					iconOptions: 'icon-camera',
					title: 'Take a picture',
					click: function() { alert('You\'ve clicked in \'Take a picture\' option'); }
				},
				{
					disabled: true,
					showIconOptions: true,
					iconOptions: 'icon-clock',
					title: 'Select hour',
					click: function() { alert('You\'ve clicked in \'Select hour\' option'); }
				}
			]
		};
		this.menuOptions = {
			icon: 'icon-more-options',
			actions: [
				{
					disabled: false,
					showmenuOptions: true,
					showIconOptions: false,
					showDivider: false,
					showButtons: false,
					iconOptions: '',
					title: 'Archive',
					buttonText: '',
					click: function() { alert('You\'ve clicked in \'Archive\' option'); }
				},
				{
					disabled: false,
					showmenuOptions: true,
					showIconOptions: true,
					showDivider: false,
					showButtons: false,
					iconOptions: 'icon-bell',
					title: 'Notifications',
					buttonText: '',
					click: function() { alert('You\'ve clicked in \'Notifications\' option'); }
				},
				{
					disabled: true,
					showmenuOptions: true,
					showIconOptions: true,
					showDivider: false,
					showButtons: false,
					iconOptions: 'icon-pencil',
					title: 'Edit',
					buttonText: '',
					click: function() { alert('You\'ve clicked in \'Edit\' option'); }
				}
			]
		};
		this.menuOptionsAdvanced = {
			icon: 'icon-plus-circle',
			actions: [
				{
					disabled: false,
					showmenuOptions: true,
					showIconOptions: false,
					showDivider: false,
					showButtons: false,
					iconOptions: '',
					title: 'Archive',
					buttonText: '',
					click: function() { alert('You\'ve clicked in \'Archive\' option'); }
				},
				{
					disabled: false,
					showmenuOptions: true,
					showIconOptions: false,
					showDivider: false,
					showButtons: false,
					iconOptions: '',
					title: 'Notifications',
					buttonText: '',
					click: function() { alert('You\'ve clicked in \'Notifications\' option'); }
				},
				{
					disabled: true,
					showmenuOptions: true,
					showIconOptions: false,
					showDivider: false,
					showButtons: false,
					iconOptions: '',
					title: 'Edit',
					buttonText: '',
					click: function() { alert('You\'ve clicked in \'Edit\' option'); }
				},
				{
					disabled: true,
					showmenuOptions: false,
					showIconOptions: false,
					showDivider: true,
					showButtons: false,
					iconOptions: '',
					title: '',
					buttonText: '',
					click: function() {}
				},
				{
					disabled: false,
					showmenuOptions: true,
					showIconOptions: true,
					showDivider: false,
					showButtons: false,
					iconOptions: 'icon-trash',
					title: 'Delete',
					buttonText: '',
					click: function() { alert('You\'ve clicked in \'Delete\' option'); }
				},
				{
					disabled: true,
					showmenuOptions: true,
					showIconOptions: true,
					showDivider: false,
					showButtons: false,
					iconOptions: 'icon-download',
					title: 'Download and option with a very long text',
					buttonText: '',
					click: function() { alert('You\'ve clicked in \'Download\' option'); }
				},
				{
					disabled: true,
					showmenuOptions: false,
					showIconOptions: false,
					showDivider: true,
					showButtons: false,
					iconOptions: '',
					title: '',
					buttonText: '',
					click: function() {}
				},
				{
					disabled: false,
					showmenuOptions: false,
					showIconOptions: false,
					showDivider: false,
					showButtons: true,
					iconOptions: '',
					title: '',
					buttonText: 'Button',
					click: function() {}
				},
				{
					disabled: false,
					showmenuOptions: false,
					showIconOptions: false,
					showDivider: false,
					showButtons: true,
					iconOptions: '',
					title: '',
					buttonText: 'Button two',
					click: function() {}
				},
			]
		};
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
		this.menuToolbarProfile2 = {
			userImage: 'assets/images/user_female_02.jpg',
			userName: 'Suzanne Axtens',
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
					click: function() { alert('You\'ve clicked in \'Archive\' option'); },
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
					click: function() { },
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
					click: function() { },
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
		this.menulinkData = {
			title: 'Click me!',
			icon: 'icon-plus-circle',
			actions: [
				{
					icon: 'icon-plus-circle',
					title: 'Create from scratch',
					click: function() { alert('You\'ve clicked in \'Create from scratch\' option'); }
				},
				{
					icon: 'icon-upload',
					title: 'Upload CSV',
					click: function() { alert('You\'ve clicked in \'Upload CSV\' option'); }
				}
			]
		};
		this.menuButtonFlatData = {
			actions: [
				{
					icon: 'icon-plus-circle',
					title: 'Create from scratch',
					click: function() { alert('You\'ve clicked in \'Create from scratch\' option'); }
				},
				{
					icon: 'icon-upload',
					title: 'Upload CSV',
					click: function() { alert('You\'ve clicked in \'Upload CSV\' option'); }
				}
			],
			icon: 'icon-plus',
			title: 'Click me!',
		};
	}

	menuAvatarOptions=[
		{
		  id: 1,
		  label: 'Suzanne Axtens',
		  src:'assets/images/user_female_01.jpg',
		  active: false
		},
		{
		  id: 2,
		  label: 'Sara Dyhouse',
		  src:'assets/images/user_female_02.jpg',
		  active: true
		},

	  ];
}
