import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-examples',
  templateUrl: './examples.component.html',
  styleUrls: ['./examples.component.scss']
})
export class ExamplesComponent implements OnInit {

  card26: any[] = [];

  constructor() { }

  ngOnInit() {

    this.card26 = [
			{
        avatar: 'assets/images/user_male_01.png',
        title : 'Badge name in no more than two lines otherwise it gets truncated with an ellipse or even',
        subtitle : '1.046'
      },
      {
        avatar: 'assets/images/user_male_01.png',
        title : 'Badge name in no more than two lines otherwise it gets truncated with an ellipse or even',
        subtitle : '1.046',
        sizeCard : 'tablet',
        sizeText : 'mobile',
        highlighted: true
      },
			{
				image: 'assets/images/badge2.png',
        title : 'Badge name in no more than two lines otherwise it gets truncated with an ellipse or even',
        label : 'RETRIEVED JULY 14, 2022',
        sizeCard : 'mobile',
        sizeText : 'mobile'
      },
      {
        title : 'Lorem ipsum dolor sit amet consectetur adipiscing elit tristique justo commodo, quam leo faucibus mauris conubia ultricies eu id donec facilisis maecenas consectetur adipiscing elit tristique justo commodo.',
        sizeCard : 'mobile',
        sizeText : 'mobile',
        textUnlimited: true
      }
		];

  }

}
