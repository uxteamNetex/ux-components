import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'ntx-progress-circle',
  templateUrl: './progress-circle.component.html',
  styleUrls: ['./progress-circle.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProgressCircleComponent implements OnInit {

  @Input() color: string;
  @Input() diameter: number;
  @Input() strokeWidth: number;
  @Input() value: number;
  @Input() color2: string;
  @Input() value2: number;

  constructor() { }

  ngOnInit() {
  }

}
