import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Card26RoutingModule } from './card26-routing.module';
import { DocumentationComponent } from './documentation/documentation.component';
import { ExamplesComponent } from './examples/examples.component';

import {
	NtxCardsModule
} from '@netex/ux-components';

import {
	MatGridListModule, MatExpansionModule
} from '@angular/material';

@NgModule({
  declarations: [DocumentationComponent, ExamplesComponent],
  imports: [
    CommonModule,
    Card26RoutingModule,
    NtxCardsModule,
		MatGridListModule,
		MatExpansionModule
  ],
  exports: [
		MatGridListModule
	]
})
export class Card26Module { }
