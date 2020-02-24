import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MatGridListModule } from '@angular/material';
import { NtxCardsModule } from '@netex/ux-components';
import { DocumentationComponent } from '../card15/documentation/documentation.component';
import { ExamplesComponent } from '../card15/examples/examples.component';
import { Card15RoutingModule } from './card15-routing.module';

@NgModule({
	declarations: [DocumentationComponent, ExamplesComponent],
	imports: [
		CommonModule,
		Card15RoutingModule,
		NtxCardsModule,
		MatGridListModule
	],
	exports: [
		MatGridListModule
	]
})
export class Card15Module { }
