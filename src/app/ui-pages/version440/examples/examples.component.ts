import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MediaChange, ObservableMedia } from '@angular/flex-layout';

const DATA   = [
	{
		checked: false,
		description: '',
		state: 'completed'
	},
	{
		checked: true,
		description: 'Add a competency framework and at least one competency',
		state: 'completed'
	},
	{
		check: true,
		description: 'Create a job role and assign it to several people',
		state: 'current',
		link: 'link'
	},
	{
		check: true,
		description: 'Another step to realize',
		state: 'next'
	}
];

const CARD17 = {
	title: 'Título del panel 1',
	showLink: true,
	icon: 'icon-plus-circle',
};
const CARD17B = {
	title: '',
	showSubtitle: true,
	subtitle: '',
};

const CARD18 = {
	avatar: undefined,
	color: '#E7575B',
	title: 'Customer oriented' ,
	subtitle: '',
	progress: {
		value: 80,
		requiredValue: 50,
		level: '4/5'
	},
	showScore: true,
	disabled: false,
};
const CARD18B = {
	avatar: '',
	color: '',
	title: '' ,
	subtitle: '',
	showScore: false,
	disabled: false,
};

const USER4 = {
	background: '',
	avatar: '',
	name : '',
	mail : '',
};
const USER1 = {
	background: 'assets/images/bg-01.png',
	avatar: 'assets/images/user_female_04.jpg',
	name : 'Bernice Greaves',
	mail : 'berni.graves@nydailynews.com',
	disabled: true
};

@Component({
	selector: 'app-examples',
	templateUrl: './examples.component.html',
	styleUrls: ['./examples.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class ExamplesComponent implements OnInit {

	data = DATA;
	user1 = USER1;
	user4 = USER4;
	card17 = CARD17;
	card17B = CARD17B;
	card18 = CARD18;
	card18B = CARD18B;

	card21: any[] = [
		{
			bar: '',
			barColor: '',
			image: '',
			title: '',
		},
		{
			bar: '',
			barColor: '',
			image: '',
			title: '',
		}
	];

	card22: any[] = [
		{
			image: '',
			title: '',
			subtitle: '',
			icon: '',
			iconName: '',
		},
		{
			image: '',
			title: '',
			subtitle: '',
			icon: '',
			iconName: '',
		}
	];

	card2: any[] = [
		{
			image: '',
			backgroundColor: '',
			icon: '',
			title: '',
			options: ''
		},
		{
			image: '',
			backgroundColor: '',
			icon: '',
			title: '',
			options: ''
		},
		{
			image: '',
			backgroundColor: '',
			icon: '',
			title: '',
			options: ''
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

	card5: any[] = [
		{
			title: '',
			number: '',
			options: '',
		},
		{
			title: '',
			number: '',
			options: '',
		},
		{
			title: '',
			number: '',
			options: '',
		}
	];

	card7: any[] = [
		{
			title: '',
			subtitle: '',
			options: '',
		},
		{
			title: '',
			subtitle: '',
			options: '',
		}
	];

	card8: any[] = [
		{
			title: '',
			subtitle: '',
			checkbox: '',
		},
		{
			title: '',
			subtitle: '',
			checkbox: '',
		}
	];

	card10 = [
		{
			number: '10',
			title: 'Disabled state: Enter a title...',
			description: 'Enter a description...',
			progress: '87',
			disabled: true
		},
		{
			number: '7',
			title: 'Enter a title...',
			description: 'Enter a description...',
			progress: '12'
		}
	];

	card12 = [
		{
			title: '',
			backgroundColor: '',
			options: '',
			icon1: '',
			text1: '',
			icon2: '',
			text2: '',
			buttons: '',
			disabled: false
		},
		{
			title: '',
			backgroundColor: '',
			options: '',
			icon1: '',
			text1: '',
			icon2: '',
			text2: '',
			buttons: '',
			disabled: false
		}
	];

	card13 = [
		{
			title: '',
			subtitle: '',
			checkbox: '',
			select: '',
			disabled: false
		},
		{
			title: '',
			subtitle: '',
			checkbox: '',
			select: '',
			disabled: false
		}
	];

	card14 = [
		{
			title: '',
			subtitle: '',
			state: false,
			stateIcon: '',
			stateText: '',
		},
		{
			title: '',
			subtitle: '',
			state: false,
			stateIcon: '',
			stateText: '',
		}
	];

	card19B: any[] = [];

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

	constructor(private observableMedia: ObservableMedia) { }

	ngOnInit() {

		this.card19B = [
			{
				badge: true,
				BlockBadge: false,
				urlImage: '',
				altImage: '',
				title: '',
				subtitle: '',
				description: '',
				options: '',
				disabled: false
			},
			{
				badge: true,
				BlockBadge: true,
				urlImage: 'assets/images/writting.jpg',
				altImage: 'Project image',
				title: 'Project name that could be longer than just one line and will be shown with three dots',
				subtitle: 'Subtitle with a very long text to see how it works',
				description: 'Has maiorum habemus detraxit at. Timeam fabulas splendide et his. Facilisi aliquando sea ad, vel ne consetetur adversarium. Integre admodum et his, nominavi urbanitas et per, alii reprehendunt et qui. His ei meis legere nostro, eu kasd fabellas definiebas mei, in sea augue iriure.',
				options: 'true',
				disabled: false
			}
		];

		setTimeout(() => {

			this.card2 = [
				{
					image: '',
					backgroundColor: '#E53B78',
					icon: 'icon-palette-color-solid',
					title: 'Project name that could be longer than just one line and will be shown with three dots',
					options: 'true',
					hoverable: true
				},
				{
					image: 'assets/images/bg-02.png',
					backgroundColor: '#E53B78',
					icon: 'icon-palette-color-solid',
					title: 'Project name that could be longer than just one line and will be shown with three dots',
					subtitle: 'Subtitle',
					disabled: true
				},
				{
					image: 'assets/images/background-profile-header.jpg',
					backgroundColor: '#E53B78',
					icon: 'icon-palette-color-solid',
					title: 'Project name that could be longer than just one line and will be shown with three dots',
					selected: true
				}
			];

			this.card1 = [
				{
					image: 'assets/images/writting.jpg',
					initials: '',
					title: 'Disabled state: Project name that could be longer than just one line and will be shown with three dots',
					subtitle: 'Subtitle with a very long text in one line and three dots',
					options: '',
					disabled: true
				},
				{
					image: 'assets/images/bg-01.png',
					initials: '',
					title: 'Project name that could be longer than just one line and will be shown with three dots',
					subtitle: 'Subtitle with a very long text in one line and three dots',
					options: 'true',
				},
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
					disabled: true
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
					options: '',
					disabled: true
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

			this.card5 = [
				{
					title: 'Disabled state: Project name that could be longer than just one line and will be shown with three dots',
					number: '(18)',
					options: '',
					disabled: true
				},
				{
					title: 'Project name that could be longer than just one line and will be shown with three dots',
					number: '(4)',
					options: ''
				},
				{
					title: 'Project name that could be longer than just one line and will be shown with three dots',
					number: '',
					options: 'true'
				}
			];

			this.card7 = [
				{
					title: 'Disabled state: Card title that could not be longer than just one line and will be shown with three dots',
					subtitle: 'Subtitle with a very long text in two lines and three dots to see how it looks like in the card',
					options: '',
					disabled: true
				},
				{
					title: 'Card title',
					subtitle: 'Subtitle',
					options: 'true',
				}
			];

			this.card8 = [
				{
					title: 'Disabled state: Card title that could not be longer than just one line and will be shown with three dots',
					subtitle: 'Subtitle with a very long text in two lines and three dots to see how it looks like in the card',
					checkbox: '',
					disabled: true
				},
				{
					title: 'Card title',
					subtitle: 'Subtitle',
					checkbox: 'true'
				},
			];

			this.card12 = [
				{
					title: 'Disabled state: Card title that could be longer than just two lines and will be shown with three dots',
					backgroundColor: '#279ED6',
					options: '',
					icon1: 'icon-users',
					text1: '24',
					icon2: '',
					text2: '',
					buttons: '',
					disabled: true
				},
				{
					title: 'Card title',
					backgroundColor: '#9B2761',
					options: '',
					icon1: 'icon-archive',
					text1: '8',
					icon2: 'icon-chat-bubble',
					text2: '56',
					buttons: 'true',
					disabled: false
				}
			];

			this.card13 = [
				{
					title: 'Disabled state: Card title that could not be longer than just one line and will be shown with three dots',
					subtitle: 'Subtitle with a very long text in two lines and three dots to see how it looks like in the card',
					checkbox: 'true',
					select: 'true',
					disabled: true
				},
				{
					title: 'Card title that could not be longer than just one line and will be shown with three dots',
					subtitle: 'Subtitle',
					checkbox: 'true',
					select: 'true',
					disabled: false
				}
			];

			this.card14 = [
				{
					title: 'Disabled state: Card title that could not be longer than just one line and will be shown with three dots',
					subtitle: 'Subtitle with a very long text in two lines and three dots to see how it looks like in the card',
					state: true,
					stateIcon: 'icon-check',
					stateText: 'Added',
				},
				{
					title: 'Card title',
					subtitle: 'Subtitle',
					state: true,
					stateIcon: 'icon-trash',
					stateText: 'deleted',
				},
			];

			this.card20 = [
				{
					showLink: false,
					link: '',
					image: 'assets/images/writting.jpg',
					title: 'Disabled state: Card title',
					subtitle: 'Card subtitle',
					disabled: true
				},
				{
					showLink: true,
					link: 'tublog.com',
					image: 'assets/images/bg-03.png',
					title: 'Title that could not be longer than one line and will be shown with three dots',
          subtitle: 'Os alunos e alunas realizaram uma excursão no sábado passado com a equipe docente do primário para realizar uma reportaxe.',
				}
			];

			this.card21 = [
				{
					bar: true,
					barColor: '#5cce88',
					image: 'assets/images/writting.jpg',
					title: 'Project name that could be longer than just one line and will be shown with three dots',
				},
				{
					bar: '',
					barColor: '',
					image: 'assets/images/background-profile-header.jpg',
					title: 'Project name',
				}
			];

			this.card22 = [
				{
					image: 'assets/images/bengal.jpg',
					title: 'Project name that could be longer than just one line and will be shown with three dots',
					subtitle: '13 contenidos',
					icon: 'Card bloqueada',
			    iconName: 'icon-lock'
				},
				{
					image: 'assets/images/coffee.jpg',
					title: 'Project name',
					subtitle: '13 contenidos con texto muy largo',
					icon: '',
			    iconName: ''
				}
			];

		}, 5000);

	}

	setPath(value: string) {
		//this.tabsHeaderService.setPath(value);
	}

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

	selectOptions = [
		{
		  label:'Option 1',
		  value: 1
		},
		{
		  label:'Option 2',
		  value: 2
		},
		{
		  label:'Option 3',
		  value: 3
		},
	  ];

}
