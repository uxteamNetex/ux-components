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
			showIcon: true,
			icon: 'icon-inbox-solid',
			link: '#',
			showBadge: true
		},
		{
			label: 'Papelera',
			state: '',
			showIcon: true,
			icon: 'icon-archive-solid',
			link: '#',
			showBadge: false
		},
		{
			label: 'Otros',
			state: '',
			showIcon: false,
			icon: '',
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
			text: undefined
		},
		{
			title: 'María Fraga Colorado',
			subtitle: 'maria.fraga',
			image: 'assets/images/user_female_01.jpg',
			link: undefined,
			icon: 'icon-bell-solid',
			iconColor: 'utils--text-error',
			text: undefined
		},
		{
			title: 'Antonio Prado',
			subtitle: 'antonio.prado',
			image: 'assets/images/user_male_02.png',
			link: undefined,
			icon: undefined,
			iconColor: undefined,
			text: undefined
		},
		{
			title: 'José Antonio García',
			subtitle: 'josean.garcia',
			image: undefined,
			link: undefined,
			icon: undefined,
			iconColor: undefined,
			text: 'Est ei erat mucius quaeque ei his quas phaedrum.',
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
			labelPrincipal: 'List option with link',
			labelSecondary: '25%',
			labelRouterLink: '/home'
		}
	];
	list5_2 = [
		{
			labelPrincipal: 'List option with menu options',
			labelSecondary: '80',
			labelRouterLink: undefined
		}
	];
	list5_3 = [
		{
			labelPrincipal: 'Organisation lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
			labelSecondary: undefined,
			labelRouterLink: undefined
		}
	];
	list5_4 = [
		{
			avatar: 'assets/images/user_female_04.jpg',
			labelPrincipal: 'Bernice Greaves',
			labelSecondary: undefined,
			labelRouterLink: undefined
		}
	];
	list5_5 = [
		{
			labelPrincipal: 'List option with slide',
			labelSecondary: '',
			labelRouterLink: undefined
		}
	];
	list5_6 = [
		{
			labelPrincipal: 'List option with button',
			labelSecondary: '',
			labelRouterLink: undefined
		}
	];

	list6 = [
		{
			avatar: 'assets/images/user_female_04.jpg',
			lblPrincipal: 'Bernice Greaves',
			lblSecondary: {
				text: '1 day left',
				value: 1,
				requiredValue: 5
			}
		},
		{
			avatar: 'assets/images/user_female_01.jpg',
			lblPrincipal: 'Suzanne Axtens',
			lblSecondary: {
				text: '10 days left',
				value: 10,
				requiredValue: 5
			}
		},
		{
			avatar: 'assets/images/user_male_01.png',
			lblPrincipal: 'Jerry Basile',
			lblSecondary: {
				text: '3 days left',
				value: 3,
				requiredValue: 5
			}
		},
		{
			avatar: 'assets/images/user_male_02.png',
			lblPrincipal: 'Anthony Olenin',
			lblSecondary: {
				text: '7 days left',
				value: 7,
				requiredValue: 5
			}
		}
	];
	list7 = [
		{
			labelPrincipal:'ux q3',
			labelSecondary:'UX designer',
			labelTertiary:'27/10/2020',
			badgeBgColor:'#199AA8',
		},
		{
			labelPrincipal:'ux q3 lorem ipsum dolor sit amet, consectetur adipiscing',
			labelSecondary:'Front-End developer lorem ipsum dolor',
			labelTertiary:'26/07/2020',
			badgeBgColor:'#199AA8',
		},
		{
			labelPrincipal:'ux q2',
			labelSecondary:'UI developer',
			labelTertiary:'28/03/2020',
			badgeBgColor:'#B182A6',
		}
	];
	list8 = [
		{
			positionClass: '',
			firstLabel: '26',
			firstLabelBgColor: '#1AA9E2',
			firstLabelColor: '#fff',
			secondLabel: 'L OCT',
			thirdLabel: '09:00 - 09:30',
			badgeBgColor: '#FFC400',
			fourthLabel: 'Tarea - Los fósiles',
		},
		{
			positionClass: '',
			firstLabel: '27',
			firstLabelBgColor: '',
			firstLabelColor: '',
			secondLabel: 'M OCT',
			thirdLabel: '09:00 - 10:00',
			badgeBgColor: '#FFC400',
			fourthLabel: 'Tarea - Los invertebrados',
		},
		{
			positionClass: 'no-border',
			firstLabel: '',
			firstLabelBgColor: '',
			firstLabelColor: '',
			secondLabel: '',
			thirdLabel: '10:00 - 12:00',
			badgeBgColor: '#FFC400',
			fourthLabel: 'Evento para toda la clase',
		},
		{
			positionClass: 'no-border',
			firstLabel: '',
			firstLabelBgColor: '',
			firstLabelColor: '',
			secondLabel: '',
			thirdLabel: '12:00 - 13:30',
			badgeBgColor: '#FFC400',
			fourthLabel: 'Evento para toda la clase',
		},
		{
			positionClass: '',
			firstLabel: '28',
			firstLabelBgColor: '',
			firstLabelColor: '',
			secondLabel: 'M OCT',
			thirdLabel: '09:30 - 10:00',
			badgeBgColor: '#1AA9E2',
			fourthLabel: 'Tarea - Meis vocent signiferumque pri et. Facilis corpora recusabo ne quo, eum ne eruditi blandit suscipiantur.',
		},
		{
			positionClass: '',
			firstLabel: '30',
			firstLabelBgColor: '',
			firstLabelColor: '',
			secondLabel: 'V OCT',
			thirdLabel: '09:00 - 10:00',
			badgeBgColor: '#FFC400',
			fourthLabel: 'Tarea - Los invertebrados',
		},
	];
	list9 = [
		{
			title: '90',
			titleColor: '#1AA9E2',
			subtitle: 'Asistencia',
		},
		{
			title: '10',
			subtitle: 'Justificadas',
		},
		{
			title: '50',
			titleColor: '#5CCE88',
			subtitle: 'Nota media',
		},
		{
			title: '70',
			titleColor: '#EE9A37',
			subtitle: 'Media del curso',
		},
		{
			title: '0',
			titleColor: '#F05060',
			subtitle: 'Notas debajo de 5',
		},
		{
			title: '11.4 Gb',
			titleColor: '#000',
			subtitle: 'Espacio usado',
		}
	];
	list10 = [
		{
			icon: 'icon-star-solid',
			iconColor: '#EE9A37',
		},
		{
			icon: 'icon-star-solid',
			iconColor: '#EE9A37',
		},
		{
			icon: 'icon-star-solid',
			iconColor: '#EE9A37',
		},
		{
			icon: 'icon-star',
		},
		{
			icon: 'icon-star',
		}
	];
	list10b = [
		{
			icon: 'icon-star-solid',
			iconColor: '#EE9A37',
		},
		{
			icon: 'icon-star-solid',
			iconColor: '#EE9A37',
		},
		{
			icon: 'icon-star-solid',
			iconColor: '#EE9A37',
		},
		{
			icon: 'icon-star-solid',
			iconColor: '#EE9A37',
		},
		{
			icon: 'icon-star-solid',
			iconColor: '#EE9A37',
		}
	];
  list10Dark = [
		{
			icon: 'star',
			iconColor: '#fff',
      iconSize: '18px',
		},
		{
			icon: 'star',
			iconColor: '#fff',
      iconSize: '18px',
		},
		{
			icon: 'star',
			iconColor: '#fff',
      iconSize: '18px',
		},
		{
			icon: 'star_border',
			iconColor: '#fff',
      iconSize: '18px',
		},
		{
			icon: 'star_border',
			iconColor: '#fff',
      iconSize: '18px',
		}
	];


	constructor() { }

	ngOnInit() {
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
	}

}
