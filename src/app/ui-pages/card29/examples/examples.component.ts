import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-examples',
  templateUrl: './examples.component.html',
  styleUrls: ['./examples.component.scss']
})
export class ExamplesComponent implements OnInit {

  card29: any[] = [];

  constructor() { }

  ngOnInit() {

    this.card29 = [
			{
        bgColor: '#18c283',
        score: '8/10',
        title : 'Is the score for John Tabalot in this competence as a result of the initial survey you’ve taken before. Please keep this in mind to choose one of the following answers!',
      },
      {
        bgColor: '#F05060',
        score: '3/10',
        title : 'Is the score for John Tabalot in this competence as a result of the initial survey you’ve taken before. Please keep this in mind to choose one of the following answers!',
      }
		];

  }

}
