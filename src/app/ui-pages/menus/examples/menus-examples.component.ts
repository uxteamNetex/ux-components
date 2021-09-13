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
	// menuToolbarProfile: {
	// 	userImage: string;
	// 	userName: string;
	// 	actions: {
	// 		showUserInfo: boolean;
	// 		logo: string;
	// 		logoName: string;
	// 		title: string;
	// 		subtitle: string;
	// 		url: string;
	// 		link: string;
	// 		image: string;
	// 		click: () => void;
	// 		showButton: boolean;
	// 		titleButton: string;
	// 		imageButton: string;
	// 		showMenuOption: boolean;
	// 		menuOptionText: string;
	// 		showMenuOptionBadge: boolean;
	// 		showDivider: boolean;
	// 	}[];
	// };
	// menuToolbarProfile2: {
	// 	userImage: string;
	// 	userName: string;
	// 	actions: {
	// 		showUserInfo: boolean;
	// 		logo: string;
	// 		logoName: string;
	// 		title: string;
	// 		subtitle: string;
	// 		url: string;
	// 		link: string;
	// 		image: string;
	// 		click: () => void;
	// 		showButton: boolean;
	// 		titleButton: string;
	// 		imageButton: string;
	// 		showMenuOption: boolean;
	// 		menuOptionText: string;
	// 		showMenuOptionBadge: boolean;
	// 		showDivider: boolean;
	// 	}[];
	// };
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
