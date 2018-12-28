import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Card12RoutingModule } from './card12-routing.module';
import { DocumentationComponent } from './documentation/documentation.component';
import { ExamplesComponent } from './examples/examples.component';

import {
  NtxCardsModule
} from '@netex/ux-components';

@NgModule({
  declarations: [DocumentationComponent, ExamplesComponent],
  imports: [
    CommonModule,
    Card12RoutingModule,
    NtxCardsModule
  ]
})
export class Card12Module { }
