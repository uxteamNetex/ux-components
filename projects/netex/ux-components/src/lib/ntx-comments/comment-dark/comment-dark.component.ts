import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ntx-comment-dark',
  templateUrl: './comment-dark.component.html',
  styleUrls: ['./comment-dark.component.scss']
})
export class CommentDarkComponent implements OnInit {

  @Input() image: string;
  @Input() title: string;
  @Input() time: string;
  @Input() text: string;
  @Input() score: boolean;
  @Input() type!: 'reply';

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

  constructor() { }

  ngOnInit() {
  }

}
