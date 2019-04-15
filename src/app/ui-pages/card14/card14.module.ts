import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MatGridListModule } from '@angular/material';
import { NtxCardsModule } from '@netex/ux-components';
import { DocumentationComponent } from '../card14/documentation/documentation.component';
import { ExamplesComponent } from '../card14/examples/examples.component';
import { Card14RoutingModule } from './card14-routing.module';

@NgModule({
	declarations: [DocumentationComponent, ExamplesComponent],
	imports: [
		CommonModule,
		Card14RoutingModule,
		NtxCardsModule,
		MatGridListModule
	],
	exports: [
		MatGridListModule
	]
})
export class Card14Module { }
