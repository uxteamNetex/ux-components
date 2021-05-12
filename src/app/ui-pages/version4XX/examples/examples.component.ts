import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { TabsHeaderService } from 'src/app/shared/services/tabs-header.service';
import { DashboardService } from 'src/app/shared/services/dashboard.service';

const DATA4 = {
	title: 'Título del panel',
	iconTitle: 'icon-reports',
	iconTitleColor: 'utils--text-grey-700',
	showSubtitle: true,
	subtitle: 'Subtítulo',
};
const EMPTYPAGES = {
	actions: [
		{
			icon: 'icon-users',
			title: 'Here is the title of the issue',
			description: 'Here is the description of the issue that cant have more than 2 lines of text.',
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
const CHIP = {
	actions: [
		{
			state: 'primary',
			image: 'assets/images/perfil.jpg',
			label: 'Laura Lopez'
		},
		{
			state: 'accent',
			image: 'assets/images/perfil.jpg',
			label: 'Carlota Ruiz Corredera'
		}
	]
};
const RAISEDICONBUTTON = {
	actions: [
		{
			label: 'Link',
			color: 'primary',
			icon: 'icon-paperclip',
			showIconLeft: true,
			showIconRight: false,
			disabled: ''
		},
		{
			label: 'Next',
			color: 'primary',
			icon: 'icon-chevron-right',
			showIconLeft: false,
			showIconRight: true,
			disabled: 'disabled'
		},
		{
			label: 'Previous',
			color: 'accent',
			icon: 'icon-chevron-left',
			showIconLeft: true,
			showIconRight: false,
			disabled: ''
		},
		{
			label: 'Action',
			color: 'accent',
			icon: 'icon-chevron-left',
			showIconLeft: true,
			showIconRight: false,
			disabled: 'disabled'
		}
	]
};
const STROKEDICONBUTTON = {
	actions: [
		{
			label: 'Link',
			color: 'primary',
			icon: 'icon-paperclip',
			showIconLeft: true,
			showIconRight: false,
			disabled: ''
		},
		{
			label: 'Siguiente',
			color: 'primary',
			icon: 'icon-chevron-right',
			showIconLeft: false,
			showIconRight: true,
			disabled: 'disabled'
		},
		{
			label: 'Anterior',
			color: 'accent',
			icon: 'icon-chevron-left',
			showIconLeft: true,
			showIconRight: false,
			disabled: ''
		},
		{
			label: 'Acción',
			color: 'accent',
			icon: 'icon-chevron-left',
			showIconLeft: true,
			showIconRight: false,
			disabled: 'disabled'
		},
		{
			label: 'Acción',
			color: 'white',
			icon: 'icon-chevron-left',
			showIconLeft: true,
			showIconRight: false,
			disabled: ''
		},
		{
			label: 'Acción',
			color: 'white',
			icon: 'icon-chevron-right',
			showIconLeft: false,
			showIconRight: true,
			disabled: 'disabled'
		}
	]
};
const TEXTICONBUTTON = {
	actions: [
		{
			label: 'Link',
			color: 'primary',
			icon: 'icon-paperclip',
			showIconLeft: true,
			showIconRight: false,
			disabled: ''
		},
		{
			label: 'Siguiente',
			color: 'primary',
			icon: 'icon-chevron-right',
			showIconLeft: false,
			showIconRight: true,
			disabled: 'disabled'
		},
		{
			label: 'Anterior',
			color: 'accent',
			icon: 'icon-chevron-left',
			showIconLeft: true,
			showIconRight: false,
			disabled: ''
		},
		{
			label: 'Acción',
			color: 'accent',
			icon: 'icon-chevron-left',
			showIconLeft: true,
			showIconRight: false,
			disabled: 'disabled'
		},
		{
			label: 'Acción',
			color: 'white',
			icon: 'icon-chevron-left',
			showIconLeft: true,
			showIconRight: false,
			disabled: ''
		},
		{
			label: 'Acción',
			color: 'white',
			icon: 'icon-chevron-right',
			showIconLeft: false,
			showIconRight: true,
			disabled: 'disabled'
		}
	]
};

export interface Chip {
	label: string;
	name: string;
	removable?: boolean;
}

export interface LabelRound {
	text: string;
	color: string;
	textcolor: string;
}

@Component({
	selector: 'app-examples',
	templateUrl: './examples.component.html',
	styleUrls: ['./examples.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class ExamplesComponent implements OnInit {

	data4: Object;
	emptyPages = EMPTYPAGES;
	data = TWO_LINES_LIST_WITH_AVATAR;
	chip = CHIP;
	raisedIconButton = RAISEDICONBUTTON;
	strokedIconButton = STROKEDICONBUTTON;
	textIconButton = TEXTICONBUTTON;

	toolbarAlert: any[] = [
		{
			bgColor: '#FFEDB1',
			title: 'A plataforma de pagamentos já está aberta e você pode seguir com a compra dos materiais para o ano letivo.',
			link: 'Pagar ahora',
			showLink: true
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
	card1: any[] = [
		{
			image: '',
			initials: '',
			title: '',
			subtitle: '',
			options: '',
		},
		{
			image: '',
			initials: '',
			title: '',
			subtitle: '',
			options: '',
		}
	];
	card2: any[] = [
		{
			image: '',
			title: '',
			options: '',
		},
		{
			image: '',
			title: '',
			options: '',
		},
		{
			image: '',
			title: '',
			options: '',
		}
	];
	card3: any[] = [
		{
			image: '',
			initials: '',
			badgeColor: '',
			title: '',
			subtitle: '',
			subtitle2: '',
			subtitle3: '',
			subtitle3Color: '',
			options: '',
		},
		{
			image: '',
			initials: '',
			badgeColor: '',
			title: '',
			subtitle: '',
			subtitle2: '',
			subtitle3: '',
			subtitle3Color: '',
			options: '',
		}
	];
	card4: any[] = [
		{
			image: '',
			initials: '',
			badgeColor: '',
			title: '',
			subtitle: '',
			options: '',
		},
		{
			image: '',
			initials: '',
			badgeColor: '',
			title: '',
			subtitle: '',
			options: '',
		}
	];
	card20: any[] = [
		{
			showLink: '',
			link: '',
			image: '',
			title: '',
			subtitle: '',
		},
		{
			showLink: '',
			link: '',
			image: '',
			title: '',
			subtitle: '',
		}
	];
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

	labelRound: LabelRound[] = [
		{
			text: '6',
			color: 'utils--bc-grey-200',
			textcolor: 'utils--text-grey-700',
		},
		{
			text: '26',
			color: 'utils--bc-content',
			textcolor: 'utils--text-white',
		},
		{
			text: '126',
			color: 'utils--bc-primary',
			textcolor: 'utils--text-white',
		},
		{
			text: 'Ejemplo de label con texto muy largo',
			color: 'utils--bc-warning',
			textcolor: 'utils--text-white',
		}
	];

	chips2: any[] = [
		{
			label: 'Department',
			name: 'UX',
			removable: '',
			color: 'primary',
			disabled: false
		},
		{
			label: 'Department',
			name: 'UX',
			removable: '',
			color: 'primary',
			disabled: true
		},
		{
			label: 'Department',
			name: 'UX',
			removable: 'true',
			color: 'primary',
			disabled: true
		},
		{
			label: 'Job',
			name: 'Designer',
			removable: '',
			color: 'accent',
			disabled: false
		},
		{
			label: 'Job',
			name: 'Designer',
			removable: '',
			color: 'accent',
			disabled: true
		},
		{
			label: 'Department',
			name: 'Example chip with a very long name',
			removable: 'true',
			color: 'accent',
			disabled: false
		},
	];

	list3 = [
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

	rbgData_1 = [
		{
		  label: 'Option one',
		  value: 1,
		  checked: true,
		  disabled: undefined
		},
		{
		  label: 'Option two',
		  value: 2,
		  checked: undefined,
		  disabled: undefined
		},
		{
		  label: 'Disabled option',
		  value: 3,
		  checked: undefined,
		  disabled: true
		}
	];
	rbgData_2 = [
		{
		  label: undefined,
		  value: 2,
		  checked: true,
		  disabled: undefined
		}
	];
	rbgData_3 = [
	{
		label: undefined,
		value: 3,
		checked: undefined,
		disabled: undefined
	}
	];
	rbgData_4 = [
	{
		label: undefined,
		value: 4,
		checked: undefined,
		disabled: undefined
	}
	];
	rbgData_5 = [
	{
		label: undefined,
		value: 5,
		checked: undefined,
		disabled: undefined
	}
	];
	rbgData_6 = [
	{
		label: undefined,
		value: 6,
		checked: true,
		disabled: undefined
	}
	];
	rbgData_7 = [
	{
		label: undefined,
		value: 7,
		checked: undefined,
		disabled: undefined
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
	]

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
		}

	];

	filesAdded=[
		{
			name: 'pdf_file_with_a_very_long_text.pdf',
			icon: 'icon-file-pdf'
		},
		{
			name: 'zip_file_01',
			icon: 'icon-file-zip'
		},
		{
			name: 'pdf_file_01',
			icon: 'icon-file-pdf'
		}
	];

	arrayOfData =  [{
    "name": "Ynez con texo muy largo de ejemplo",
    "surname": "Stout con texo muy largo de ejemplo",
    "username": "ystout0",
    "avatar": "https://robohash.org/estipsamfacere.jpg?size=50x50&set=set1",
    "date": "08/04/2020"
  }, {
    "name": "Camila",
    "surname": "Skirving",
    "username": "cskirving5",
    "avatar": "https://robohash.org/eligendieteaque.jpg?size=50x50&set=set1",
    "date": "14/06/2020"
  }, {
    "name": "Hastings",
    "surname": "Dunbavin",
    "username": "hdunbavin6",
    "avatar": "https://robohash.org/fugaaliquidreprehenderit.jpg?size=50x50&set=set1",
    "date": "16/04/2020"
  }, {
    "name": "Valentine",
    "surname": "Vader",
    "username": "vvader2q",
    "avatar": "https://robohash.org/consequaturcupiditatererum.jpg?size=50x50&set=set1",
    "date": "11/07/2020"
  }, {
    "name": "Tracey",
    "surname": "Berrygun",
    "username": "tberrygun2r",
    "avatar": "https://robohash.org/nequequasaut.jpg?size=50x50&set=set1",
    "date": "19/02/2020"
	}];

	tableData = [];

	//constructor(private tabsHeaderService: TabsHeaderService) { }

	constructor(private dashboardService: DashboardService) { }
	apps: any[];

	ngOnInit() {
		this.apps = this.dashboardService.getDashboardApps();

		this.data4 = DATA4;

		setTimeout(() => {
			this.card1 = [
				{
					image: 'assets/images/writting.jpg',
					initials: '',
					title: 'Project name that could be longer than just one line and will be shown with three dots',
					subtitle: 'Subtitle with a very long text in one line and three dots',
					options: 'true',
				},
				{
					image: '',
					initials: 'PN',
					title: 'Project name',
					subtitle: 'Subtitle',
					options: 'true',
				}
			];
			this.card2 = [
				{
					image: 'assets/images/writting.jpg',
					title: 'Project name that could be longer than just one line and will be shown with three dots',
					options: 'true',
				},
				{
					image: 'assets/images/bg-01.png',
					title: 'Project name',
					options: 'true',
				},
				{
					image: 'assets/images/bg-02.png',
					title: 'Project name that could be longer than just one line and will be shown with three dots',
					options: 'true',
				}
			];
			this.card3 = [
				{
					image: '',
					initials: ' ',
					badgeColor: 'orange',
					title: 'Evaluation A',
					subtitle: '20/12/2020',
					subtitle2: '9/22 Users',
					subtitle3: 'Closed',
					subtitle3Color: '#f05060',
					options: '',
				},
				{
					image: 'assets/images/bg-01.png',
					initials: '',
					badgeColor: '',
					title: 'Evaluation name that could be longer than just one line and will be shown with three dots',
					subtitle: '28/12/2020',
					subtitle2: '10/22 Users',
					subtitle3: 'Open',
					subtitle3Color: '#5cce88',
					options: 'true',
				}
			];
			this.card4 = [
				{
					image: 'assets/images/perfil.jpg',
					initials: '',
					badgeColor: '',
					title: 'María Cristina Martínez Casanueva',
					subtitle: 'UX designer and web developer',
					options: 'true',
				},
				{
					image: '',
					initials: ' ',
					badgeColor: '#EE9A37',
					title: 'Ana Pérez Lago',
					subtitle: 'Front developer',
					options: 'true',
				}
			];
			this.card20 = [
				{
					showLink: false,
					link: '',
					image: 'assets/images/writting.jpg',
					title: 'Card title',
					subtitle: 'Card subtitle',
				},
				{
					showLink: true,
					link: 'blog.tucole.com',
					image: 'assets/images/bg-03.png',
					title: 'Title that could not be longer than one line and will be shown with three dots',
					subtitle: 'Os alunos e alunas realizaram uma excursão no sábado passado com a equipe docente do primário para realizar uma reportaxe.',
				}
			];
		}, 5000);

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
					title: 'Download',
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

		let arrColorLabel = ['black','blue','orange','lightblue','red', undefined];
		this.tableData = this.arrayOfData.map(function(item) {
			let state_color = arrColorLabel[Math.floor(Math.random() * arrColorLabel.length)];
			item['state_color'] = state_color;
			item['state_label'] = 'state';
			return item;
		});
	}

	setPath(value: string) {
		//this.tabsHeaderService.setPath(value);
  }

}
