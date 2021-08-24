import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DocumentationComponent } from '../card14/documentation/documentation.component';
import { ExamplesComponent } from '../card14/examples/examples.component';
import { Card14RoutingModule } from './card14-routing.module';

import {
	MatGridListModule, MatExpansionModule
} from '@angular/material';
import { NtxCardsModule } from '@netex/ux-components';

@NgModule({
	declarations: [DocumentationComponent, ExamplesComponent],
	imports: [
		CommonModule,
		Card14RoutingModule,
		NtxCardsModule,
		MatGridListModule,
		MatExpansionModule
	],
	exports: [
		MatGridListModule
	]
})
export class Card14Module { }
