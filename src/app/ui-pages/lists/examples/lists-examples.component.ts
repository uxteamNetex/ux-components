import { Component, OnInit, ViewEncapsulation } from '@angular/core';

export interface Item {
	label: string;
	avatar: string;
	color: string;
}

export interface Item1 {
	label: string;
	avatar: string;
	color: string;
	progress: {
		value: number;
		level: string;
	};
}

export interface Item2 {
	label: string;
	avatar: string;
	color: string;
	progress: {
		value: number;
		requiredValue: number;
		edited: boolean
	};
	checked: boolean;
}

export interface Item3 {
	label: string;
	icon: string;
}

export interface Item4 {
	label: string;
	checked: boolean;
	actions: IActionsMenuLinkComponent[];
}

export interface Section {
	title: string;
	icon: string;
	links?: SectionLink[];
}

export interface SectionLink {
	title: string;
	link: any;
}

export class IActionsMenuLinkComponent {
	icon?: string;
	title: string;
	click: Function;
}

const USER = {
	actions: [
		{
			label: 'Recibidas',
			state: 'active',
			icon: 'icon-inbox-solid',
			link: '#',
			showBadge: true
		},
		{
			label: 'Papelera',
			state: '',
			icon: 'icon-archive-solid',
			link: '#',
			showBadge: false
		}
	]
};

const TWO_LINES_LIST_WITH_AVATAR = {
	texts: [
		{
			title: 'Carolina López',
			subtitle: 'carolina.lopez',
			image: 'assets/images/perfil.jpg',
			link: 'Go to learningCloud',
			icon: 'icon-warning-solid',
			iconColor: 'utils--text-warning',
			showIcon: true,
			showLink: true,
		},
		{
			title: 'María Fraga Colorado',
			subtitle: 'maria.fraga',
			image: 'assets/images/user_female_01.jpg',
			link: 'Go to learningCloud',
			icon: 'icon-bell-solid',
			iconColor: 'utils--text-error',
			showIcon: true,
			showLink: false,
		},
		{
			title: 'Antonio Prado',
			subtitle: 'antonio.prado',
			image: 'assets/images/user_male_02.png',
			link: 'Go to learningCloud',
			icon: 'icon-warning-solid',
			iconColor: 'utils--text-warning',
			showIcon: false,
			showLink: false,
		}
	]
};

@Component({
	selector: 'app-lists-examples',
	templateUrl: './lists-examples.component.html',
	styleUrls: ['./lists-examples.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class ListsExamplesComponent implements OnInit {

	user = USER;

	data = TWO_LINES_LIST_WITH_AVATAR;

	list: Item[] = [
		{
			label: 'Customer oriented',
			avatar: undefined,
			color: '#E7575B'
		},
		{
			label: 'Leadership',
			avatar: 'assets/images/app-catalogue.png',
			color: '#5cce88'
		},
		{
			label: 'Organisation',
			avatar: 'assets/images/app-community.png',
			color: '#EE9A37'
		},
		{
			label: 'Verbal communication',
			avatar: undefined,
			color: '#5cce88'
		},
		{
			label: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
			avatar: undefined,
			color: '#41545D'
		},
		{
			label: 'Critical thinking & problem solving',
			avatar: 'assets/images/background-profile-header.jpg',
			color: '#1D5D93'
		}
	];
	list1: Item1[] = [
		{
			label: 'Customer oriented',
			avatar: undefined,
			color: '#E7575B',
			progress: {
				value: 40,
				level: '3/5'
			}
		},
		{
			label: 'Leadership',
			avatar: 'assets/images/app-catalogue.png',
			color: '#5cce88',
			progress: {
				value: 80,
				level: '4/7'
			}
		},
		{
			label: 'Organisation',
			avatar: 'assets/images/app-community.png',
			color: '#EE9A37',
			progress: {
				value: 75,
				level: '3/7'
			}
		},
		{
			label: 'Verbal communication',
			avatar: undefined,
			color: '#5cce88',
			progress: {
				value: 68,
				level: '4/9'
			}
		},
		{
			label: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
			avatar: undefined,
			color: '#41545D',
			progress: {
				value: 33,
				level: '2/5'
			}
		},
		{
			label: 'Critical thinking & problem solving',
			avatar: 'assets/images/background-profile-header.jpg',
			color: '#1D5D93',
			progress: {
				value: 88,
				level: '5/8'
			}
		}
	];
	list2_1: Item2[] = [
		{
			label: 'Customer oriented',
			avatar: undefined,
			color: '#E7575B',
			progress: {
				value: 40,
				requiredValue: 80,
				edited: true
			},
			checked: true
		},
		{
			label: 'Leadership',
			avatar: 'assets/images/app-catalogue.png',
			color: '#5cce88',
			progress: {
				value: 80,
				requiredValue: 30,
				edited: true
			},
			checked: false
		},
		{
			label: 'Organisation',
			avatar: 'assets/images/app-community.png',
			color: '#EE9A37',
			progress: {
				value: 75,
				requiredValue: 55,
				edited: true
			},
			checked: true
		}
	];
	list2_2: Item2[] = [
		{
			label: 'Customer oriented',
			avatar: undefined,
			color: '#E7575B',
			progress: {
				value: 40,
				requiredValue: 80,
				edited: false
			},
			checked: true
		},
		{
			label: 'Leadership',
			avatar: 'assets/images/app-catalogue.png',
			color: '#5cce88',
			progress: {
				value: 80,
				requiredValue: 30,
				edited: false
			},
			checked: false
		},
		{
			label: 'Organisation',
			avatar: 'assets/images/app-community.png',
			color: '#EE9A37',
			progress: {
				value: 75,
				requiredValue: 55,
				edited: false
			},
			checked: true
		}
	];
	list3: Item3[] = [
		{
			label: '11 de feb de 2020',
			icon: 'icon-calendar'
		},
		{
			label: 'A Coruña, edificio principal',
			icon: 'icon-location'
		},
		{
			label: '32 destinatarios',
			icon: 'icon-users'
		}
	];
	list4Items: Item4[] = [
		{
			label: 'Formación personalizada',
			checked: true,
			actions: [
				{
					icon: 'icon-pencil',
					title: 'Edit',
					click: function() { alert('You\'ve clicked in \'Edit\' option'); }
				},
				{
					icon: 'icon-check-circle',
					title: 'Check as completed',
					click: function() { alert('You\'ve clicked in \'Check as completed\' option'); }
				},
				{
					icon: 'icon-trash',
					title: 'Delete',
					click: function() { alert('You\'ve clicked in \'Delete\' option'); }
				}
			],
		},
		{
			label: 'Curso de Angular2',
			checked: false,
			actions: [
				{
					icon: 'icon-pencil',
					title: 'Edit',
					click: function() { alert('You\'ve clicked in \'Edit\' option'); }
				},
				{
					icon: 'icon-check-circle',
					title: 'Check as completed',
					click: function() { alert('You\'ve clicked in \'Check as completed\' option'); }
				},
				{
					icon: 'icon-trash',
					title: 'Delete',
					click: function() { alert('You\'ve clicked in \'Delete\' option'); }
				}
			],
		},
		{
			label: 'Retener a tu equipo, lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
			checked: true,
			actions: [
				{
					icon: 'icon-pencil',
					title: 'Edit',
					click: function() { alert('You\'ve clicked in \'Edit\' option'); }
				},
				{
					icon: 'icon-check-circle',
					title: 'Check as completed',
					click: function() { alert('You\'ve clicked in \'Check as completed\' option'); }
				},
				{
					icon: 'icon-trash',
					title: 'Delete',
					click: function() { alert('You\'ve clicked in \'Delete\' option'); }
				}
			],
		}
	];
	listMultilineIconData: Section[] = [
		{
			title: 'Section one',
			icon : 'icon-editor-launcher',
			links : [
				{
					title: 'title of link one',
					link: '/path'
				},
				{
					title: 'title of link two ',
					link: undefined
				},
			]
		},
		{
			title: 'Section two',
			icon : 'icon-globe',
			links : [
				{
					title: 'title of link one',
					link: '/another path'
				},
				{
					title: 'title of link two ',
					link: undefined
				},
			]
		}

	];

	list5_1 = [
		{
			labelPrincipal: 'Web designer',
			labelSecondary: '25%',
			labelRouterLink: '/home'
		},
		{
			labelPrincipal: 'Graphic designer / illustrator',
			labelSecondary: '65%',
			labelRouterLink: '/home'
		},
		{
			labelPrincipal: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
			labelSecondary: '24%',
			labelRouterLink: '/home'
		}
	];

	list5_2 = [
		{
			labelPrincipal: 'Customer oriented',
			labelSecondary: '80',
			labelRouterLink: undefined
		},
		{
			labelPrincipal: 'Graphic designer / illustrator',
			labelSecondary: '78',
			labelRouterLink: undefined
		},
		{
			labelPrincipal: 'Organisation lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
			labelSecondary: '67',
			labelRouterLink: undefined
		}
	];

	list5_3 = [
		{
			labelPrincipal: 'Customer oriented',
			labelSecondary: undefined,
			labelRouterLink: undefined
		},
		{
			labelPrincipal: 'Graphic designer / illustrator',
			labelSecondary: undefined,
			labelRouterLink: undefined
		},
		{
			labelPrincipal: 'Organisation lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
			labelSecondary: undefined,
			labelRouterLink: undefined
		}
	];

	constructor() { }

	ngOnInit() {
	}

}
