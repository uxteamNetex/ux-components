import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
	selector: 'app-avatars-examples',
	templateUrl: './avatars-examples.component.html',
	styleUrls: ['./avatars-examples.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class AvatarsExamplesComponent implements OnInit {

	src_1 = 'assets/images/user_female_01.jpg';
	src_2 = 'assets/images/user_male_01.png';
	src_3 = 'assets/images/user_female_02.jpg';
	
	constructor() { }

	ngOnInit() { }
}
