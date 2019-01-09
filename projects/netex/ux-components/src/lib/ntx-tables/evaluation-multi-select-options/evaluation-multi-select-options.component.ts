import { ComponentPortal } from '@angular/cdk/portal';
import { Component, ComponentFactoryResolver, EventEmitter, Injector, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'ntx-evaluation-multi-select-options',
  templateUrl: './evaluation-multi-select-options.component.html',
  styleUrls: ['./evaluation-multi-select-options.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class EvaluationMultiSelectOptionsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
