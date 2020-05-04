import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatExpansionModule, MatTableModule, MatIconModule, MatGridListModule } from '@angular/material';

import {
	NtxCardsModule,
	NtxButtonsModule,
	NtxListsModule,
	NtxTablesModule
} from '@netex/ux-components';

import { Version420RoutingModule } from './version420-routing.module';
import { DocumentationComponent } from './documentation/documentation.component';
import { ExamplesComponent } from './examples/examples.component';

@NgModule({
	declarations: [DocumentationComponent, ExamplesComponent],
	imports: [
		CommonModule,
		Version420RoutingModule,
		MatTableModule,
		MatIconModule,
		MatGridListModule,
		MatExpansionModule,
		NtxCardsModule,
		NtxButtonsModule,
		NtxListsModule,
		NtxTablesModule
	]
})
export class Version420Module { }
