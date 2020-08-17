import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Card19RoutingModule } from './card19-routing.module';
import { DocumentationComponent } from './documentation/documentation.component';
import { ExamplesComponent } from './examples/examples.component';

import {
  NtxCardsModule
} from '@netex/ux-components';

import {
  MatGridListModule, MatExpansionModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    NtxCardsModule,
    Card19RoutingModule,
    MatGridListModule,
		MatExpansionModule,
  ],
  declarations: [
    DocumentationComponent,
    ExamplesComponent
  ]
})
export class Card19Module { }
