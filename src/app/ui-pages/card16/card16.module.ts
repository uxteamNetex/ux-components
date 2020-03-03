import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MatGridListModule, MatExpansionModule } from '@angular/material';
import { NtxCardsModule } from '@netex/ux-components';
import { DocumentationComponent } from '../card16/documentation/documentation.component';
import { ExamplesComponent } from '../card16/examples/examples.component';
import { Card16RoutingModule } from './card16-routing.module';

@NgModule({
	imports: [
		CommonModule,
		Card16RoutingModule,
		NtxCardsModule,
		MatGridListModule,
		MatExpansionModule
	],
	declarations: [DocumentationComponent, ExamplesComponent],
})
export class Card16Module { }
