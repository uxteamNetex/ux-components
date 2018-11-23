import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'ntx-form-slider',
  templateUrl: './form-slider.component.html',
  styleUrls: ['./form-slider.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class FormSliderComponent implements OnInit {

  @Input() disabled: string;

  constructor() { }

  ngOnInit() {
  }

  slider(value: number | null) {
    return value;
  }


}

