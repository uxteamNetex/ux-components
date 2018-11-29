import { ComponentPortal } from '@angular/cdk/portal';
import { Component, ComponentFactoryResolver, EventEmitter, Injector, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'ntx-multi-select-options',
  templateUrl: './multi-select-options.component.html',
  styleUrls: ['./multi-select-options.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MultiSelectOptionsComponent implements OnInit {

@Input() selectAllActive = false;


  constructor(

  ) { }

  ngOnInit() {
  }

}
