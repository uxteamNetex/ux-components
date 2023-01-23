import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-examples',
  templateUrl: './examples.component.html',
  styleUrls: ['./examples.component.scss']
})
export class ExamplesComponent implements OnInit {

  card27: any[] = [];

  constructor() { }

  ngOnInit() {

    this.card27 = [
      {
        description : 'Toast notifications are a great way to give the user ephemeral, unobtrusive feedback about an action they have just carried out. We have a top-right desktop toast variant plus a bottom-centered mobile. Toast notifications are a great way to give the user ephemeral, unobtrusive feedback about an action they have just carried out. We have a top-right desktop toast variant plus a bottom-centered mobile. We have a top-right desktop toast variant plus a bottom-centered mobile.'
      },
      {
        title : 'How to become the best team leader',
        description : 'Toast notifications are a great way to give the user ephemeral, unobtrusive feedback about an action they have just carried out. We have a top-right desktop toast variant plus a bottom-centered mobile. Toast notifications are a great way to give the user ephemeral, unobtrusive feedback about an action they have just carried out. We have a top-right desktop toast variant plus a bottom-centered mobile. We have a top-right desktop toast variant plus a bottom-centered mobile.'
      },
			{
        image: 'assets/images/bg-01.png',
        label: 'http://google.es/hwtsyahefdb56yd29olchwtsyahefdb56yd29olc',
        title : 'How to become the best team leader',
        description : 'Toast notifications are a great way to give the user ephemeral, unobtrusive feedback about an action they have just carried out. We have a top-right desktop toast variant plus a bottom-centered mobile. Toast notifications are a great way to give the user ephemeral, unobtrusive feedback about an action they have just carried out. We have a top-right desktop toast variant plus a bottom-centered mobile. We have a top-right desktop toast variant plus a bottom-centered mobile.'
      },
      {
        image: 'assets/images/bg-01.png',
        label: 'http://google.es/hwtsyahefdb56yd29olchwtsyahefdb56yd29olc',
        title : 'How to become the best team leader',
        description : 'Toast notifications are a great way to give the user ephemeral, unobtrusive feedback about an action they have just carried out. We have a top-right desktop toast variant plus a bottom-centered mobile. Toast notifications are a great way to give the user ephemeral, unobtrusive feedback about an action they have just carried out. We have a top-right desktop toast variant plus a bottom-centered mobile. We have a top-right desktop toast variant plus a bottom-centered mobile.',
        sizeCard : 'tablet',
        sizeText : 'mobile',
        highlighted: true
      },
			{
				image: 'assets/images/bg-01.png',
        label: 'http://google.es/hwtsyahefdb56yd29olchwtsyahefdb56yd29olc',
        title : 'How to become the best team leader',
        description : 'Toast notifications are a great way to give the user ephemeral, unobtrusive feedback about an action they have just carried out. We have a top-right desktop toast variant plus a bottom-centered mobile. Toast notifications are a great way to give the user ephemeral, unobtrusive feedback about an action they have just carried out. We have a top-right desktop toast variant plus a bottom-centered mobile. We have a top-right desktop toast variant plus a bottom-centered mobile.',
        sizeCard : 'mobile',
        sizeText : 'mobile',
        textUnlimited: true
      }
		];

  }

}
