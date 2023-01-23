import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Card27RoutingModule } from './card27-routing.module';
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
    Card27RoutingModule,
    NtxCardsModule,
		MatGridListModule,
		MatExpansionModule
  ],
  exports: [
		MatGridListModule
	]
})
export class Card27Module { }
