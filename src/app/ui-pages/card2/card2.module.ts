import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Card2RoutingModule } from './card2-routing.module';
import { DocumentationComponent } from './documentation/documentation.component';
import { ExamplesComponent } from './examples/examples.component';

import {
  NtxCardsModule
} from '@netex/ux-components';

import {
  MatGridListModule
} from '@angular/material';

@NgModule({
  declarations: [DocumentationComponent, ExamplesComponent],
  imports: [
    CommonModule,
    Card2RoutingModule,
    NtxCardsModule,
    MatGridListModule
  ],
  exports: [
    MatGridListModule
  ]
})
export class Card2Module { }
