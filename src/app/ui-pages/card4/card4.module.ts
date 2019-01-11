import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Card4RoutingModule } from './card4-routing.module';
import { DocumentationComponent } from './documentation/documentation.component';
import { ExamplesComponent } from './examples/examples.component';

import {
  NtxCardsModule
} from '@netex/ux-components';

import {
  MatGridListModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    NtxCardsModule,
    Card4RoutingModule,
    MatGridListModule
  ],
  declarations: [
    DocumentationComponent,
    ExamplesComponent
  ]
})
export class Card4Module { }
