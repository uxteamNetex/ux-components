import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatExpansionModule, MatTableModule, MatIconModule, MatGridListModule } from '@angular/material';

import {
	NtxCardsModule,
	NtxButtonsModule,
	NtxListsModule,
	NtxChipsModule,
	NtxFormsModule
} from '@netex/ux-components';

import { Version430RoutingModule } from './version430-routing.module';
import { DocumentationComponent } from './documentation/documentation.component';
import { ExamplesComponent } from './examples/examples.component';

@NgModule({
	declarations: [DocumentationComponent, ExamplesComponent],
	imports: [
		CommonModule,
		Version430RoutingModule,
		MatTableModule,
		MatIconModule,
		MatGridListModule,
		MatExpansionModule,
		NtxCardsModule,
		NtxButtonsModule,
		NtxListsModule,
		NtxChipsModule,
		NtxFormsModule
	]
})
export class Version430Module { }
