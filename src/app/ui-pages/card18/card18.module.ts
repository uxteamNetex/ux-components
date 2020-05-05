import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MatGridListModule, MatExpansionModule } from '@angular/material';
import { NtxCardsModule } from '@netex/ux-components';
import { DocumentationComponent } from '../card18/documentation/documentation.component';
import { ExamplesComponent } from '../card18/examples/examples.component';
import { Card18RoutingModule } from './card18-routing.module';
import { NtxTablesModule } from 'projects/netex/ux-components/src/public_api';

@NgModule({
	imports: [
		CommonModule,
		Card18RoutingModule,
		NtxCardsModule,
		MatGridListModule,
		MatExpansionModule,
		NtxTablesModule
	],
	declarations: [DocumentationComponent, ExamplesComponent],
})
export class Card18Module { }
