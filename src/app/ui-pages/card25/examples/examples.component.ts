import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-examples',
  templateUrl: './examples.component.html',
  styleUrls: ['./examples.component.scss']
})
export class ExamplesComponent implements OnInit {

  card25: any[] = [];

  constructor() { }

  ngOnInit() {

    this.card25 = [
			{
				image: '',
        avatar: 'assets/images/user_male_01.png',
        title : 'John Tabalot',
        subtitle : 'UX Designer - UX Department',
        description : 'You have been choosen to evaluate John Talabot’s skills. Please select the answers that fits best his level. Please always be honest, this is very important for us as a team!',
      },
			{
				image: 'assets/images/page-not-found-illustration.png',
        avatar: '',
        title : 'John Tabalot',
        subtitle : 'UX Designer - UX Department',
        description : 'You have been choosen to evaluate John Talabot’s skills. Please select the answers that fits best his level. Please always be honest, this is very important for us as a team!',
        mobile: true
      }
		];

  }

}
