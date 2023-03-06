import { Component, OnInit, ViewEncapsulation } from '@angular/core';

const TABSDARK = {
	actions: [
		{
			title: 'First tab',
		},
    {
			title: 'Second tab',
			state: 'selected',
		},
    {
			title: 'Third tab',
			state: 'disabled',
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

  card25: any[] = [];
  card26: any[] = [];
  card27: any[] = [];
  card28: any[] = [];
  card29: any[] = [];
  textareaDark: any[] = [];

  tabsDark = TABSDARK;

  list10Dark = [
		{
			icon: 'star',
			iconColor: '#fff',
      iconSize: '18px',
		},
		{
			icon: 'star',
			iconColor: '#fff',
      iconSize: '18px',
		},
		{
			icon: 'star',
			iconColor: '#fff',
      iconSize: '18px',
		},
		{
			icon: 'star_border',
			iconColor: '#fff',
      iconSize: '18px',
		},
		{
			icon: 'star_border',
			iconColor: '#fff',
      iconSize: '18px',
		}
	];

  list11: any[] = [];

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

    this.card28 = [
			{
        image: 'assets/images/user_male_02.png',
        label: '13/02/2023',
        title : 'John Tabalot',
        subtitle : 'UX Designer - UX Deparment',
        description : 'Evaluation 12345abc'
      }
		];

    this.card29 = [
			{
        bgColor: '#18c283',
        score: '8/10',
        title : 'Is the score for John Tabalot in this competence as a result of the initial survey you’ve taken before. Please keep this in mind to choose one of the following answers!',
      }
		];

    this.textareaDark = [
      {
        image: 'assets/images/user_female_01.jpg',
        placeholder: 'Leave a comment'
      }
    ];

    this.list11 = [
			{
        icon: 'military_tech',
        title: 'Soft Skills',
        label: '87',
        showProgressBar: true,
        progressBarColor: 'primary',
        progressBarValue: '87'
      },
      {
        title: 'Project management',
        showProgressBar: true,
        progressBarColor: 'error',
        progressBarValue: '28',
        progressBarRequiredValue: '73'
      },
      {
        icon: 'star',
        title: 'Project management',
        showProgressBar: true,
        progressBarColor: 'green-lime',
        progressBarValue: '51',
        progressBarRequiredValue: '23'
      },
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

  selectDarkOptions = [
    {
      label:'Option 1',
      value: 0
    },
    {
      label:'Option 2',
      value: 1
    },
    {
      label:'Option 3',
      value: 2
    },
    {
      label:'Option 4 (Disabled) lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet vestibulum nisi, vel viverra magna.',
      value: 3,
      disabled: true
    },
  ];

  data01 = [{
    title: '',
    description: 'La pregunta no es pertinente / NS /NC / No posee esta competencia.',
    value: '0'
  },
  {
    title: '1. Leader in results',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    value: '1'
  },
  {
    title: '2. Results oriented',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    value: '2'
  },
  {
    title: '3. Not very good with results',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
    value: '3'
  }];

  data02 = [{
    title: '',
    description: 'Yes, indeed. He/She always takes the reins of the team when making strategic decisions.',
    value: '0'
  },
  {
    title: '',
    description: 'Sometimes. He/She never takes the reins of the team when making strategic desicions.',
    value: '1'
  },
  {
    title: '',
    description: 'No, he/she is not. He/She never takes the reins of the team when making strategic decisions.',
    value: '2'
  }];

}
