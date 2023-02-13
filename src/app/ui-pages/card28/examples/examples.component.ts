import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-examples',
  templateUrl: './examples.component.html',
  styleUrls: ['./examples.component.scss']
})
export class ExamplesComponent implements OnInit {

  card28: any[] = [];

  constructor() { }

  ngOnInit() {

    this.card28 = [
			{
        image: 'assets/images/user_male_02.png',
        label: '13/02/2023',
        title : 'John Tabalot',
        subtitle : 'UX Designer - UX Deparment',
        description : 'Evaluation 12345abc'
      },
      {
        image: 'assets/images/user_male_02.png',
        label: '13/02/2023',
        title : 'John Tabalot',
        subtitle : 'UX Designer - UX Deparment Curabitur quis orci viverra, scelerisque lacus eget, porta ipsum suspendisse ligula nulla.',
        description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi volutpat euismod urna, eget vehicula neque volutpat id. In magna libero, iaculis et magna vitae, tincidunt convallis lorem. Vestibulum vestibulum ac enim id elementum. Nullam nec lorem consectetur, ullamcorper orci sed, pulvinar urna.'
      },
      {
        title : 'John Tabalot',
        subtitle : 'UX Designer - UX Deparment Curabitur quis orci viverra, scelerisque lacus eget, porta ipsum suspendisse ligula nulla.',
        description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi volutpat euismod urna, eget vehicula neque volutpat id. In magna libero, iaculis et magna vitae, tincidunt convallis lorem. Vestibulum vestibulum ac enim id elementum. Nullam nec lorem consectetur, ullamcorper orci sed, pulvinar urna.'
      }
		];

  }

}
