import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Card21RoutingModule } from './card21-routing.module';
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
		Card21RoutingModule,
		NtxCardsModule,
		MatGridListModule,
		MatExpansionModule
	],
	exports: [
		MatGridListModule
	]
})
export class Card21Module { }
