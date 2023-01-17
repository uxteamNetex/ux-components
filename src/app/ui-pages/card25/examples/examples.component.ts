import { Component, OnInit } from '@angular/core';

const USER1 = {
	avatar: 'assets/images/user_female_04.jpg',
  name : 'John Tabalot',
	subtitle : 'UX Designer - UX Department',
  description : 'You have been choosen to evaluate John talabot’s skills. Please select the answers that fits best his level. Please always be honest, this is very important for us as a team!',
};

@Component({
  selector: 'app-examples',
  templateUrl: './examples.component.html',
  styleUrls: ['./examples.component.scss']
})
export class ExamplesComponent implements OnInit {

  user1 = USER1;

  constructor() { }

  ngOnInit() {
  }

}
