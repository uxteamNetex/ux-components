import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { TabsHeaderService } from 'src/app/shared/services/tabs-header.service';

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
	selector: 'app-examples',
	templateUrl: './examples.component.html',
	styleUrls: ['./examples.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class ExamplesComponent implements OnInit {

	data = TWO_LINES_LIST_WITH_AVATAR;

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


	constructor(
		private tabsHeaderService: TabsHeaderService
	) { }

	ngOnInit() {
	}

	setPath(value: string) {
		this.tabsHeaderService.setPath(value);
	}

}
