import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { CardsCatalogRoutingModule } from './cards-catalog-routing.module';
import { DocumentationComponent } from './documentation/documentation.component';
import { ExamplesComponent } from './examples/examples.component';

import {
	NtxCardsModule,
	NtxMenusModule
} from '@netex/ux-components';

import {
	MatGridListModule, MatExpansionModule, MatCardModule
} from '@angular/material';

@NgModule({
	imports: [
		CommonModule,
		CardsCatalogRoutingModule,
		MatGridListModule,
		MatExpansionModule,
		MatCardModule,
		NtxCardsModule,
		NtxMenusModule
	],
	declarations: [
		DocumentationComponent,
		ExamplesComponent
	],
	exports: [
		MatGridListModule
	]
})
export class CardsCatalogModule { }
