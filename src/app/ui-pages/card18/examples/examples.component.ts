import { AfterContentInit, Component, OnInit, ViewChild } from '@angular/core';
import { ntxCard18Data} from 'projects/netex/ux-components/src/lib/ntx-cards/card18/card18.component';

@Component({
	selector: 'app-examples',
	templateUrl: './examples.component.html',
	styleUrls: ['./examples.component.scss']
})
export class ExamplesComponent implements OnInit {

	data1: ntxCard18Data = {
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
	data2: ntxCard18Data = {
		avatar: 'assets/images/app-catalogue.png',
		color: '#5cce88',
		title: 'Leadership' ,
		subtitle: 'Europe division > 2019 competencies',
		progress: {
			value: 42,
			requiredValue: 65,
			level: undefined
		},
		showScore: true,
		disabled: false,
	};
	data3: ntxCard18Data = {
		avatar: 'assets/images/background-profile-header.jpg',
		color: '#1D5D93',
		title: 'Critical thinking & problem solving' ,
		subtitle: '',
		checked: true,
		showScore: true,
		disabled: false,
	};
	data4: ntxCard18Data = {
		avatar: undefined,
		color: '#5cce88',
		title: 'Verbal communication' ,
		subtitle: 'Europe division > 2019 competencies',
		checked: false,
		showScore: true,
		disabled: false,
	};
	data5: ntxCard18Data = {
		avatar: undefined,
		color: '#E7575B',
		title: 'Customer oriented' ,
		subtitle: '',
		showScore: true,
		disabled: true,
		progress: {
			value: 80,
			requiredValue: 50,
			level: '4/5'
		}
	};
	data6: ntxCard18Data = {
		avatar: '',
		color: '',
		title: '' ,
		subtitle: '',
		showScore: false,
		disabled: false,
	};

	constructor() {
	}

	ngOnInit() {
	}

}
