import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-examples',
  templateUrl: './examples.component.html',
  styleUrls: ['./examples.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ExamplesComponent implements OnInit {

  card25: any[] = [];
  card26: any[] = [];
  card27: any[] = [];
  textareaDark: any[] = [];

  constructor() { }

  ngOnInit() {

    this.card25 = [
			{
				image: '',
        avatar: 'assets/images/user_male_01.png',
        title : 'John Tabalot',
        subtitle : 'UX Designer - UX Department',
        description : 'You have been choosen to evaluate John Talabot’s skills. Please select the answers that fits best his level. Please always be honest, this is very important for us as a team!',
      }
		];

    this.card26 = [
			{
        avatar: 'assets/images/user_male_01.png',
        title : 'Badge name in no more than two lines otherwise it gets truncated with an ellipse or even',
        subtitle : '1.046'
      },
      {
				image: 'assets/images/badge2.png',
        title : 'Badge name in no more than two lines otherwise it gets truncated with an ellipse or even',
        label : 'RETRIEVED JULY 14, 2022',
        sizeCard : 'mobile',
        sizeText : 'mobile'
      }
		];

    this.card27 = [
			{
        image: 'assets/images/bg-01.png',
        label: 'http://google.es/hwtsyahefdb56yd29olc',
        title : 'How to become the best team leader',
        description : 'Toast notifications are a great way to give the user ephemeral, unobtrusive feedback about an action they have just carried out. We have a top-right desktop toast variant plus a bottom-centered mobile. Toast notifications are a great way to give the user ephemeral, unobtrusive feedback about an action they have just carried out. We have a top-right desktop toast variant plus a bottom-centered mobile.'
      },
      {
				image: 'assets/images/bg-01.png',
        label: 'http://google.es/hwtsyahefdb56yd29olc',
        title : 'How to become the best team leader',
        description : 'Toast notifications are a great way to give the user ephemeral, unobtrusive feedback about an action they have just carried out. We have a top-right desktop toast variant plus a bottom-centered mobile. Toast notifications are a great way to give the user ephemeral, unobtrusive feedback about an action they have just carried out. We have a top-right desktop toast variant plus a bottom-centered mobile.',
        sizeCard : 'mobile',
        sizeText : 'mobile'
      }
		];

    this.textareaDark = [
      {
        image: 'assets/images/user_female_01.jpg',
        placeholder: 'Leave a comment'
      }
    ];

  }

  radiobuttondark = [
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

}
