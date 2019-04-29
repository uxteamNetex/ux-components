import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'ntx-progress-spinner',
  templateUrl: './progress-spinner.component.html',
  styleUrls: ['./progress-spinner.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProgressSpinnerComponent implements OnInit {

  @Input() color: string;
  @Input() diameter: number;
  @Input() strokeWidth: number;

  constructor() { }

  ngOnInit() {
  }

}
