import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'ntx-form-textarea-dark',
  templateUrl: './form-textarea-dark.component.html',
  styleUrls: ['./form-textarea-dark.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FormTextareaDarkComponent implements OnInit {

  @Input() image: string;
  @Input() placeholder: string;
  @Input() textButton: string;

  constructor() { }

  ngOnInit() {
  }

}
