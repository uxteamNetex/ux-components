import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { Card13RoutingModule } from './card13-routing.module';
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
		Card13RoutingModule,
		NtxCardsModule,
		MatGridListModule,
		MatExpansionModule
	],
	exports: [
		MatGridListModule
	]
})
export class Card13Module { }
