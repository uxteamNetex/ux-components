import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-examples',
	templateUrl: './examples.component.html',
	styleUrls: ['./examples.component.scss']
})
export class ExamplesComponent implements OnInit {

  card26: any[] = [];
  card27: any[] = [];
  textareaDark: any[] = [];

	constructor() { }

	ngOnInit() {
    this.card26 = [
      {
        title : 'Lorem ipsum dolor sit amet consectetur adipiscing elit tristique justo commodo, quam leo faucibus mauris conubia ultricies eu id donec facilisis maecenas consectetur adipiscing elit tristique justo commodo.',
        sizeCard : 'mobile',
        sizeText : 'mobile',
        textUnlimited: true,
        highlighted: false
      }
    ];
    this.card27 = [
			{
        image: 'assets/images/bg-01.png',
        label: 'http://google.es/hwtsyahefdb56yd29olchwtsyahefdb56yd29olc',
        title : 'How to become the best team leader',
        description : 'Toast notifications are a great way to give the user ephemeral, unobtrusive feedback about an action they have just carried out. We have a top-right desktop toast variant plus a bottom-centered mobile.',
        textUnlimited: true,
        highlighted: false
      },
		];
    this.textareaDark = [
      {
        image: 'assets/images/user_female_01.jpg',
        placeholder: 'Leave a comment'
      },
      {
        placeholder: 'Leave a comment'
      }
    ];
  }

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
  radiobuttondark2 = [
    {
      label: 'Option one',
      value: 1,
      checked: true,
      disabled: true,
      hidden : true,
    }
  ];
  radiobuttondark3 = [
    {
      value: 2,
      checked: undefined,
      disabled: undefined
    }
  ];
  radiobuttondark4 = [
    {
      value: 3,
      checked: undefined,
      disabled: undefined
    }
  ];
  selectAvatarOptions=[
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
    },

  ];

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

}
