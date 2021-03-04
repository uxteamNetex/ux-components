import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { TabsHeaderService } from 'src/app/shared/services/tabs-header.service';
import { DashboardService } from 'src/app/shared/services/dashboard.service';

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

	data = TWO_LINES_LIST_WITH_AVATAR;
	chip = CHIP;
	strokedIconButton = STROKEDICONBUTTON;
	textIconButton = TEXTICONBUTTON;

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

    var arrColorLabel = ['black','blue','orange','lightblue','red', undefined];
    this.tableData = this.arrayOfData.map(function(item) {
      var state_color = arrColorLabel[Math.floor(Math.random() * arrColorLabel.length)];
      item['state_color'] = state_color;
      item['state_label'] = 'state';
      return item;
    });
	}

	setPath(value: string) {
		//this.tabsHeaderService.setPath(value);
	}

}
