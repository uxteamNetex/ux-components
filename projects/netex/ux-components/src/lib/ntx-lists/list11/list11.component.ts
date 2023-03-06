import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ntx-list11',
  templateUrl: './list11.component.html',
  styleUrls: ['./list11.component.scss']
})
export class List11Component implements OnInit {

  @Input() icon: string;
  @Input() title: string;
  @Input() label: string;
  @Input() showProgressBar: boolean;
  @Input() progressBarColor: string;
  @Input() progressBarValue: number;
  @Input() progressBarRequiredValue: number;

  constructor() { }

  ngOnInit() {
  }

}
