import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatExpansionModule } from '@angular/material/expansion';

import {
	NtxCardsModule,
	NtxExpansionPanelsModule,
	NtxProgressBarModule
} from '@netex/ux-components';

import { ExpansionPanelsRoutingModule } from './expansion-panels-routing.module';
import { DocumentationComponent } from './documentation/documentation.component';
import { ExamplesComponent } from './examples/examples.component';

@NgModule({
	declarations: [DocumentationComponent, ExamplesComponent],
	imports: [
		CommonModule,
		NtxCardsModule,
		NtxExpansionPanelsModule,
		NtxProgressBarModule,
		MatExpansionModule,
		ExpansionPanelsRoutingModule
	]
})
export class ExpansionPanelsModule { }
